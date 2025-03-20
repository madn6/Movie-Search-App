'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the useRouter hook to disable SSR
const DynamicSearchBox = dynamic(() => import('./SearchBox'), {
	ssr: false // Disable server-side rendering for this component
});

export default function SearchBox() {
	const [search, setSearch] = useState('');
	const [isClient, setIsClient] = useState(false); // Track if we are on the client side

	// Set the client-side state after the component is mounted
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Only render the component once the client-side is ready
	if (!isClient) {
		return null; // Can show a loading state here if needed
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// Only proceed if search is not empty
		if (search.trim()) {
			// Redirect to the search page dynamically
			window.location.href = `/search/${search}`;
		}
	};

	return (
		<div>
			<Suspense>
				<form
					onSubmit={handleSubmit}
					className="flex p-3 mt-4 max-w-7xl mx-auto items-center gap-2"
					aria-labelledby="search-form"
				>
					<label htmlFor="search-input" className="sr-only">
						Search Keywords
					</label>
					<input
						id="search-input"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search Any Movie..."
						className="px-4 focus:outline-none text-light-100 py-2 border border-gray-300 bg-gray-200 rounded-md w-full sm:w-auto"
						aria-describedby="search-input-description"
					/>
					<button
						disabled={search === ''}
						type="submit"
						className={`px-6 py-2 text-gray-100 bg-gray-200 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-300 transition-colors 
            ${search === '' ? 'cursor-not-allowed opacity-50 ' : 'bg-gray-200'}`}
						aria-label="Search"
					>
						Search
					</button>
				</form>
			</Suspense>
		</div>
	);
}
