import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Clock, Waves, ArrowDown } from "lucide-react"


const EarthquakeCard = ({ earthquake }) => {
  const getMagnitudeColor = (magnitude) => {
    if (magnitude < 4.0) return "bg-green-500"
    if (magnitude < 5.0) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <Card className="w-full">
        <div className="md:flex">
            <div className="md:flex-1">
                <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-lg font-bold">{earthquake.Wilayah}</CardTitle>
                        <Badge className={`${getMagnitudeColor(earthquake.Magnitude)} text-white text-nowrap mt-2`}>M {earthquake.Magnitude}</Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {earthquake.Lintang}° {earthquake.Bujur}°
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{earthquake.Tanggal}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{earthquake.Jam}</span>
                    </div>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <Waves className="w-4 h-4" />
                            <span className="text-sm font-medium">Magnitudo: {earthquake.Magnitude}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <ArrowDown className="w-4 h-4" />
                            <span className="text-sm font-medium">Kedalaman: {earthquake.Kedalaman}</span>
                        </div>
                    </div>
                    <Separator className="my-2" />
                    <div>
                        <span className="text-sm font-medium" >Dirasakan: {earthquake.Dirasakan}</span>
                    </div>
                </CardContent>
            </div>
            {earthquake.Shakemap && 
            <div className="md:w-1/2 md:flex-shrink-0 p-4">
                <img
                    src={'https://static.bmkg.go.id/'+earthquake.Shakemap}
                    alt={`Earthquake in ${earthquake.Wilayah}`}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover"
                />
            </div>
            }
        </div>
    </Card>
  )
}

export default EarthquakeCard