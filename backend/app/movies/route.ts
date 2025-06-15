import { movies } from "./db";

// export async function GET(){
//     return new Response("hello World , i am Pratik Devkota");
// }

export async function GET(){
    return Response.json(movies);
}

export async function POST(req : Request) {
    const movie = await req.json();
    // console.log("movie::", movie)
    const newMovie = {...movie};
    console.log(newMovie);
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie))
}