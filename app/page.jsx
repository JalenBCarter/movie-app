import Link from 'next/link'

export default function page() {

    return (
        <div className='w-full h-[500px] flex flex-col justify-center items-center text-5xl'>
            <Link className="p-5 text-gray-200 hover:text-gray-400" href={`/popular`}>See popular movies</Link>
            <Link className="p-5 text-gray-200 hover:text-gray-400" href={`/tom-cruise`}>See Tom Cruise movies</Link>
            <Link className="p-5 text-gray-200 hover:text-gray-400" href={`/other-movies`}>In Theatres</Link>
            <Link className="p-5 text-gray-200 hover:text-gray-400" href={`/top-shows`}>Tv Shows</Link>
        </div>
    )
}
