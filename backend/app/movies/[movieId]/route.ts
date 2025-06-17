import { movies } from "../db";

interface MovieParams {
    params:{
    movieId : string
       
    }
}

// using _req cause we are not using the req right noe
export async function GET(
  _req: Request,
  { params }: MovieParams
) {
  const { movieId } = await params;
  // add +movies to covert string into number Number(movieId)
  const movie = movies.find((movie) => movie.id === +movieId);
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not Found", { status: 404 });
}

//updating the movie
export async function PATCH(
  req: Request,
  { params }: { params: { movieId: string } }
) {
  const { movieId } = params;
  const movie = movies.find((movie) => movie.id === +movieId);
  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie Not Found" }), {
      status: 404,
    });
  }

  try {
    const updatedMovie = await req.json();
    //find the index of the movie
    const index = movies.findIndex((m) => m.id === +movieId);
   
  //update the movie
  movies[index] = {...movie, ...updatedMovie}
  return new Response(JSON.stringify(movies[index]), {status : 200})

  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 400 });
  }
}


//delete the movies

export async function DELETE(req : Request, {params}: MovieParams){
    const {movieId} = params;
    const ToDeleteMovieIndex = movies.findIndex(m => m.id === +movieId);
    console.log("deleted Index:",ToDeleteMovieIndex)
    if (ToDeleteMovieIndex === -1){
        return new Response(JSON.stringify({error : "movie not found"}  ), {status : 404})
    };
    movies.splice(ToDeleteMovieIndex,1)


    return new Response(JSON.stringify({message :"deleted!"}), {status : 202})



}
