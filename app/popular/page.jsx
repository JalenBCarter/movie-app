import Movie from '../Movie'

export default async function Home() {
  const data = await fetch(
    // f277df2212b84383b85ba8ca62648e21
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  console.log(res)

  return (
    <main >
      <h1 className='text-5xl mb-8'>Popular</h1>
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
