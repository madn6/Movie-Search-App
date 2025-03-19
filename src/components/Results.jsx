import React from 'react';

export default function Results({results,loading,error}) {
	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error fetching data: {error}</p>}
			<div>
				{results.length > 0
					? results.map((movie) => <p key={movie.id}>{movie.title || movie.name}</p>)
					: !loading && <p>No results found.</p>}
			</div>
		</div>
	);
}
