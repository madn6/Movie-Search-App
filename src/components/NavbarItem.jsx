'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
	const searchParams = useSearchParams();
	const genre = searchParams.get('genre');

	return (
		<div>
			<Link
				className={`text-gray-100 ${
					genre === param ? 'underline underline-offset-8  rounded-full decoration-2 decoration-light-100' : ''
				} hover:text-light-100 transition`}
				href={`/?genre=${param}`}
			>
				{title}
			</Link>
		</div>
	);
}

