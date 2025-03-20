'use client';

import Results from '@/components/Results';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function HomePage() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const searchParams = useSearchParams();
	const genre = searchParams.get('genre'); // Get the genre from URL params
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				let urls = [];

				if (genre === 'fetchTopRated') {
					// Only fetch top-rated movies
					urls = [
						`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
					];
				} else if (genre === 'fetchTrending') {
					// Only fetch trending movies
					urls = [
						`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
					];
				} else {
					// Default: Fetch both trending and top-rated
					urls = [
						`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
						`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
					];
				}

				// Fetch all required URLs
				const responses = await Promise.all(urls.map((url) => fetch(url)));
				const data = await Promise.all(responses.map((res) => res.json()));

				// Combine results when on the homepage
				const combinedMovies = genre ? data[0].results : [...data[0].results, ...data[1].results];

				setMovies(combinedMovies);
			} catch (err) {
				console.error('Error fetching data:', err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [API_KEY, genre]); // Re-fetch when genre changes

	return (
		<div>
			<h1
				className="text-center mt-2 
        text-xl md:text-2xl lg:text-3xl font-semibold"
			>
				{genre === 'fetchTopRated'
					? 'Top Rated Movies'
					: genre === 'fetchTrending'
					? 'Trending Movies Now...'
					: 'All Movies'}
			</h1>
			<Results results={movies} loading={loading} error={error} />
		</div>
	);
}
