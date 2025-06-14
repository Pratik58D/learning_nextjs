import React from 'react'
import { FaComment, FaStar } from 'react-icons/fa';

const MovieEach = ({params} : {params :{moviesId : string } }) => {
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
  
      const movie = movies.find( (movie) => movie.id === Number(params.moviesId)) ;
    //   console.log("the movie is ",movie)



  return (
    <div className='p-8 sapce-y-8 bg-green-900 text-white min-h-screen'>
     {/* Movie Title & description */}

     <div className='bg-gradient-to-r from-blue-500 to-red-500 p-8 rounded-xl shadow-lg'>



        <h2 className='text-4xl font-semibold mb-4'>{movie?.title}</h2>
        <p className='text-lg text-gray-300'>{movie?.description}</p>
     </div>

     {/* rating and comment summary */}
     <div className='mt-6 border-rounded'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <p>Rating:</p>
                <div className='flex items-center'>
                    <FaStar  className='mr-1'/>
                    <span>{movie?.rating}</span> /5
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <p>Comments :</p>
               <div className='flex gap-1 items-center'>
                 <FaComment />
                <p>{movie?.comment}</p>
               </div>
            </div>
        </div>
     </div>
        
        
        
        </div>
  )
}

export default MovieEach