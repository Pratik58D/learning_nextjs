import Link from "next/link";
import { FaComment, FaStar } from "react-icons/fa";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      comment: 125,
      rating: 4.8,
      description:
        "A skilled thief is given a chance at redemption if he can successfully perform inception—planting an idea into someone's subconscious.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      comment: 389,
      rating: 5.0,
      description:
        "Batman faces his greatest psychological and physical tests when the Joker unleashes chaos on Gotham.",
    },
    {
      id: 3,
      title: "Interstellar",
      comment: 690,
      rating: 4.7,
      description:
        "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      comment: 545,
      rating: 4.9,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 5,
      title: "Parasite",
      comment: 222,
      rating: 4.6,
      description:
        "A poor family schemes to become employed by a wealthy family by infiltrating their household one by one.",
    },
  ];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comment, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);

  return (
    <div className="p-8 space-y-8 bg-green-700 text-white min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Movie Dashboard Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-xl md:text-2xl font-medium">Total Movies</p>
            <p className="text-2xl md:text-4xl font-bold ">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-xl md:text-2xl font-medium">Total Comments</p>
            <p className="text-2xl md:text-4xl font-bold ">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-xl md:text-2xl font-medium">average Ratings</p>
            <p className="text-2xl md:text-4xl font-bold ">{averageRating}</p>
          </div>
        </div>
        
      </div>
      {/* movies list */}
      <h2 className="text-3xl font-semibold text-white"> Movie List </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-8">

          {movies.map((movie)=>(
            <li
            key={movie.id}
            
            className="bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ">

              <Link 
              className="text-2xl font-bold text-blue-400 hover:text-blue-600"
              href={`/movies/${movie.id}`}>
              {movie.title}

              </Link>
              <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-sm text-gray-300">
                  <FaComment className="mr-1" />
                  <span>{movie.comment}</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaStar className="mr-1" />
                  <span>{movie.rating}</span>
                </div>
              </div>

            </li>
          ))}

        </ul>
      
    </div>
  );
}
