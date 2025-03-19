import React from 'react';
import Cart from './Cart';

export default function Results({ results, loading, error }) {
	console.log('Results received:', results); // Debugging log

	return (
		<div>
			{loading && <p className="flex text-xl h-screen items-center justify-center">Loading...</p>}
			{error && <p>Error fetching data: {error}</p>}
			<div className="grid grid-cols-2 max-w-7xl gap-x-4 gap-y-6 mx-auto py-4 px-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{results && results.length > 0
					? results.map((movie, index) => <Cart key={movie.id || index} movie={movie} />)
					: !loading && <p>No results found.</p>}
			</div>
		</div>
	);
}
