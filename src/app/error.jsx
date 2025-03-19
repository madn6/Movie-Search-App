'use client';
import { useEffect } from 'react';

export default function error(error, reset) {
	useEffect(() => {
		console.log(error);
	}, [error]);
	return (
		<div className='flex items-center justify-self-center mt-10 '>
			<h1 className=''>something went wrong. Please try again later.</h1>
			<button className="text-blue-600 cursor-pointer" onClick={() => reset()}>
				Try Again
			</button>
		</div>
	);
}
