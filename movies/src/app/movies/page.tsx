import Link from "next/link";
import React from "react";

const MoviesPage = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
    },
    {
      id: 2,
      title: "The Dark Knight",
    },
    {
      id: 3,
      title: "Interstellar",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
    },
    {
      id: 5,
      title: "Parasite",
    },
  ];

  return (
    <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">
            MoviesList
        </h2>
        <ul className="space-y-4">
            {movies.map((movie)=>(
                <li 
                key={movie.id}
                className="bg-red-800 p-4 rounded-lg"
                >
                    <Link
                    className="text-white hover:text-blue-600"
                    href={`/movies/${movie.id}`}>
                        {movie.title }
                    
                    </Link>

                </li>
            ))}
        </ul>
        
    </div>
  )
};

export default MoviesPage;
