import { movies } from "../db";

// using _req cause we are not using the req right noe
export async function GET(
    _req : Request,
    {params} : {params : {movieId : string}}
){
    const {movieId} = await params;
    // add +movies to covert string into number Number(movieId)
    const movie = movies.find((movie)=> movie.id === +movieId);
    return movie ? new Response(JSON.stringify(movie)) :
    new Response ("Movie not Found", {status : 404})
}


