"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useQuery } from "@tanstack/react-query"
import EarthquakeCard from "./EarthquakeCard"


const EarthquakeInfo = () => {

    const {data, isLoading: loading, error} = useQuery({
      queryKey: ['recentEarthquakes'],
      queryFn: async () => {
        try{
          const res = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json');
          const data = res.json();
          if(!res.ok) throw new Error(data.error || 'Something went wrong');
          return data;
        }catch(error){
          throw new Error(error.message);
        }
      }
    })

  const {data: earthquakes, isLoading, error: queryError} = useQuery({
    queryKey: ['earthquakes'],
    queryFn: async () => {
      try{
        const res = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
        const data = res.json();
        if(!res.ok) throw new Error(data.error || 'Something went wrong');
        return data;
      }catch(error){
        throw new Error(error.message);
      }
    }
  })

  const recentEarthquake = data?.Infogempa?.gempa;
  
  if(isLoading || loading) {
    return <div>Loading data...</div>
  }
  
  if(queryError || error) {
    return <div>Error loading data: {error.message}</div>
  }


  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Earthquake Information</h1> */}
      <Tabs defaultValue="terkini" className="w-full">
        <TabsList className="grid w-full grid-cols-2 border bg-slate-300/50">
          <TabsTrigger value="terkini">Gempa Terbaru</TabsTrigger>
          <TabsTrigger value="gempa-lainnya">Gempa Lainnya</TabsTrigger>
        </TabsList>
        <TabsContent value="terkini">
          <div className="grid md:grid md:grid-cols-2 lg:flex mt-4">
              <EarthquakeCard earthquake={recentEarthquake} />
          </div>
        </TabsContent>
        <TabsContent value="gempa-lainnya">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {earthquakes?.Infogempa?.gempa.map((earthquake) => (
              <EarthquakeCard key={earthquake.id} earthquake={earthquake} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EarthquakeInfo

