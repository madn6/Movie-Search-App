"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Results from "@/components/Results";

export default function SearchPage({ params }) {
	const searchTerm = params.searchTerm;
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
				);

				if (!res.ok) {
					throw new Error(`Fetching failed with status: ${res.status}`);
				}

				const data = await res.json();
				setResults(data.results);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [searchTerm]);

	if (loading) {
		return <h1 className="text-center mt-6">Loading...</h1>;
	}

	if (error) {
		return (
			<h1 className="text-center mt-6 text-red-500">
				Error: {error}
			</h1>
		);
	}

	return (
		<div>
			<Suspense>

			{results.length === 0 ? (
				<h1 className="text-center mt-6">No Results Found</h1>
			) : (
				<Results results={results} />
			)}
			</Suspense>
		</div>
	);
}
