import React from 'react';

export default function About() {
	return (
		<div className=" max-w-2xl mx-auto p-3 px-4 md:px-6 space-y-4">
			<h1
				className=" text-center mt-12 mb-6 lg:text-3xl md:text-2xl text-2xl font-semibold 
  bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 
  text-transparent bg-clip-text dark:from-gray-300 dark:via-gray-400 dark:to-gray-500"
			>About this app</h1>
			<div className='text-justify'>
            <div className=' text-xl md:text-2xl font-medium mb-1'>Discover Movies Effortlessly</div> MovieSearch is your go-to platform for finding movies
				instantly. Whether you’re looking for trending films, classics, or hidden gems, we’ve got
				you covered.
			</div>
			<div className='text-justify'>
				<div className=' text-xl  md:text-2xl font-medium  mb-1 '>Your Ultimate Movie Companion</div> With MovieSearch, exploring movies has never been easier. Our
				intuitive search engine lets you find details about any film, including ratings, cast,
				genres, and reviews. Whether you’re a casual viewer or a movie enthusiast, you can dive deep
				into filmographies, watch trailers, and stay updated with the latest releases. Designed for
				speed and accuracy, MovieSearch ensures that you get precise results without hassle. Say
				goodbye to endless scrolling—just type, search, and enjoy!
			</div>
		</div>
	);
}
