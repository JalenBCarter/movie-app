import Movie from '../Movie'

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.asc&page=1&origin_country=CA`
  )
  const res = await data.json()

  console.log(res)

  return (
    <main >
      <h1 className='text-5xl mb-8'>Top Shows</h1>
      <div className='grid gap-16 grid-cols-fluid'>
        {
          res.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))
        }
      </div>
    </main>
  )
}
