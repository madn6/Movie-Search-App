'use client'; // Ensure this runs on the client side

import Results from '@/components/Results';
import { useState, useEffect } from 'react';

export default function HomePage({ searchParams }) {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const genre = searchParams?.genre || 'fetchTrending';
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Use NEXT_PUBLIC for frontend access

	useEffect(() => {
		async function fetchData() {
			try {
				const url = `https://api.themoviedb.org/3${
					genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
				}?api_key=${API_KEY}&language=en-US&page=1`;
				console.log('Fetching URL:', url);

				const res = await fetch(url, { next: { revalidate: 10000 } });
				if (!res.ok) {
					throw new Error('Failed to fetch data');
				}

				const data = await res.json();
				setResults(data.results);
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
			<h1>HomePage</h1>
			<Results results={results} loading={loading} error={error} />
		</div>
	);
}
