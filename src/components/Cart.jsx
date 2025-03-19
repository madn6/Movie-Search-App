import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Cart({ movie }) {
	return (
		<div className="cursor-pointer shadow-2xl bg-gray-200 rounded-md border border-gray-300 overflow-hidden">
			<Link href={`/movie/${movie.id}`}>
				<div className="relative w-full h-52">
					<Image
						layout="fill" // Make the image cover the container area
						className="object-cover object-top rounded-t-md"
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`}
						alt={movie.title || movie.original_title || 'Movie poster'}
					/>
				</div>
				<div className="p-3">
					<h2 className="font-medium text-lg truncate text-light-100">
						{movie.title || movie.name}
					</h2>
					<p className="line-clamp-2 text-sm dark:text-gray-100 ">{movie.overview}</p>
					<div className="flex items-center text-xs dark:text-light-100  mt-2">
						<div className="flex items-center w-full justify-between ">
							<span className="">{movie.release_date || movie.first_air_date} </span>
							<div className='flex gap-1'>
								<FaHeart className=" text-green-800  text-sm" />
								<div className=" text-light-100 text-xs ">{movie.vote_count} </div>
							</div>
							<div className=" text-light-100">Lang-{movie.original_language} </div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
