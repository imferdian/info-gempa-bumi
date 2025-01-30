import EarthquakeInfo from "@/components/EarthquakeInfo"

const EarthquakePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Informasi Gempa Terkini</h1>
                <p className="text-gray-600 mt-2">Data gempa terbaru dari BMKG.</p>
            </header>

            <EarthquakeInfo />

        </div>
    )
}

export default EarthquakePage;