
import Image from "next/image"

export async function generateStaticParams() {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
    const res = await data.json()

    return await res.results.map((movie) => ({
        movie: toString(movie.id)
    }))
}

export default async function MovieDetails({ params }) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: { revalidate: 0 } }
    )
    const res = await data.json()

    return (
        <div>
            <div className="">
                <div className="fixed w-screen top-[-50px] left-0 z-[-1]">
                    <div className="bg-black bg-opacity-50 h-screen w-screen fixed top-0 left-0 z-50"></div>
                    <Image
                        className="my-12 w-full"
                        src={imagePath + res.backdrop_path}
                        alt="backdrop image"
                        width={1000} height={1000}
                        priority
                    />
                </div>
                <div className="w-[70%]">
                    <div className="flex">
                        <h2 className="text-4xl mr-4">{res.title}</h2>
                        <h2 className="bg-green-500 inline-block my-2 py-1 px-3 rounded-md text-sm">{res.status}</h2>
                    </div>
                    <div className="flex font-bold">
                        <h2 className="mr-2">Released on {res.release_date}</h2>
                        <h2 className="">Runtime: {res.runtime} minutes</h2>
                    </div>
                    <p>{res.overview}</p>
                </div>
            </div>
        </div>
    )
}