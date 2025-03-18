import React from 'react';

export default function About() {
	return (
		<div className=" max-w-2xl mx-auto p-3 space-y-4">
			<h1 className=" mb-12 text-center text-light-100 text-3xl">About this app</h1>
			<div className='text-justify'>
            <div className='text-light-100 text-xl mb-1'>Discover Movies Effortlessly</div> MovieSearch is your go-to platform for finding movies
				instantly. Whether you’re looking for trending films, classics, or hidden gems, we’ve got
				you covered.
			</div>
			<div className='text-justify'>
				<div className='text-light-100 text-xl  mb-1'>Your Ultimate Movie Companion</div> With MovieSearch, exploring movies has never been easier. Our
				intuitive search engine lets you find details about any film, including ratings, cast,
				genres, and reviews. Whether you’re a casual viewer or a movie enthusiast, you can dive deep
				into filmographies, watch trailers, and stay updated with the latest releases. Designed for
				speed and accuracy, MovieSearch ensures that you get precise results without hassle. Say
				goodbye to endless scrolling—just type, search, and enjoy!
			</div>
		</div>
	);
}
