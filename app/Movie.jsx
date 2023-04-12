import Link from "next/link"
import Image from "next/image"

export default function Movie({ id, title, release_date, poster_path }) {
    const imagePath = "https://image.tmdb.org/t/p/original"

    return (
        <div>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} width={800} height={800} alt={title} />
                <div className="w-full p-3">
                    <h1 className="text-xl">{title}</h1>
                    <h2>{release_date}</h2>
                </div>
            </Link>
        </div>
    )
}
