import { NextRequest } from "next/server";
import { movies } from "./db";

// export async function GET(){
//     return new Response("hello World , i am Pratik Devkota");
// }

// export async function GET(){
//     return Response.json(movies);
// }

export async function POST(req : Request) {
    const movie = await req.json();
    // console.log("movie::", movie)
    const newMovie = {...movie};
    console.log(newMovie);
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie))
}


//searching for the movie

export async function GET(req:NextRequest) {
    // console.log(req.nextUrl.searchParams);
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    // console.log("query is :",query) //john
    const filterMovies = query 
    ? movies.filter((m)=> m.name.toLowerCase().includes(query)) 
    : movies;
    
    return new Response(JSON.stringify(filterMovies))
}
