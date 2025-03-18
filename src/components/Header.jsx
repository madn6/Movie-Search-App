import React from 'react';
import Link from 'next/link';
import MenuItems from './MenuItems';

import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Header() {
	return (
		<div className="p-3 flex items-center justify-between max-w-6xl mx-auto">
			<div className="flex items-center gap-4">
				<MenuItems title="home" address="/" Icon={AiFillHome} />
				<MenuItems title="About" address="/about" Icon={BsFillInfoCircleFill} />
			</div>
			<Link href={'/'}  className="flex items-end gap-1">
				<img src="fevicon2.webp" alt="fevicon" width={28}/>
            <span className="font-thin hidden text-xl sm:inline leading-none">Search</span>
			</Link>
		</div>
	);
}
