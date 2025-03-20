'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';
import { FaStar, FaChartBar, FaGlobe ,FaCalendarAlt} from 'react-icons/fa';

export default function MovieDetails() {
	const { id: movieId } = useParams();
	const [movieDetail, setMovieDetail] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchMovie() {
			try {
				const res = await fetch(
					`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
				);

				if (!res.ok) {
					throw new Error('Failed to fetch movie details');
				}

				const data = await res.json();
				setMovieDetail(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		if (movieId) fetchMovie();
	}, [movieId]);

	if (loading) return <p className='flex text-xl h-screen items-center justify-center'>Loading...</p>;
	if (error) return <p className="text-red-500 flex text-xl h-screen items-center justify-center">{error}</p>;
	if (!movieDetail) return <p flex text-xl h-screen items-center justify-center>Movie not found.</p>;

	return (
		<div className="flex justify-center ">
			<div className="flex flex-col w-full rounded-md bg-gray-200 mt-6 mb-6 border border-gray-300 max-w-3xl  sm:mx-4 md:mx-6 mx-2 lg:mx-8 p-4 ">
				{/* Image Container */}
				<div className="relative w-full h-[400px]">
					<Image
						src={`https://image.tmdb.org/t/p/original/${
							movieDetail.backdrop_path || movieDetail.poster_path
						}`}
						alt={movieDetail.title || movieDetail.name || 'Movie poster'}
						layout="fill"
						objectFit="cover"
						className="rounded-md object-cover object-top"
					/>
				</div>

				{/* Movie Title */}
				<h2 className="text-lg md:text-2xl font-medium text-light-100  mt-4">
					{movieDetail.title || movieDetail.name}
				</h2>

				{/* Movie Overview */}
				<p className="text-sm md:text-lg my-2 text-gray-100">{movieDetail.overview}</p>

				{/* Release Date */}
            <p className="text-justify flex items-center gap-2  text-sm text-light-100">
               <FaCalendarAlt className='text-blue-200'/>
					{movieDetail.release_date || movieDetail.first_air_date}
				</p>

				{/* Movie Stats Section */}
				<div className="flex items-center gap-4 mt-2 ">
					{/* Heart & Vote Count */}
					<div className="flex gap-1 items-center">
						<FaHeart className="text-green-800 text-sm" />
						<div className="text-light-100 text-xs">{movieDetail.vote_count}</div>
					</div>

					{/* Language */}
					<p className="flex items-center gap-1 text-sm text-lime-100">
						<FaGlobe className="text-blue-400" />
						{movieDetail.original_language.toUpperCase()}
					</p>
				</div>

				{/* Rating and Popularity */}
				<div className="flex items-center gap-4 mt-2">
					{/* Rating */}
					<p className="flex items-center gap-1 text-sm text-lime-100">
						<FaStar className="text-yellow-600" />
						{movieDetail.vote_average}
					</p>

					{/* Popularity */}
					<p className="flex items-center gap-1 text-sm text-lime-100">
						<FaChartBar className="text-cyan-700" />
						{movieDetail.popularity}
					</p>
				</div>
			</div>
		</div>
	);
}
