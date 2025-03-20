import React from 'react';
import Link from 'next/link';
import MenuItems from './MenuItems';

import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DayLightSwitch from './DayLightSwitch';
import Image from 'next/image';

export default function Header() {
	return (
		<div className="p-3 flex-row-reverse flex items-center justify-between max-w-6xl mx-auto">
			<div className="flex items-center gap-4">
				<DayLightSwitch className="" />
				<MenuItems title="home" address="/" Icon={AiFillHome} />
				<MenuItems title="About" address="/about" Icon={BsFillInfoCircleFill} />
			</div>
			<h1
				className="hidden md:block lg:text-3xl md:text-2xl font-semibold 
  bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 
  text-transparent bg-clip-text dark:from-gray-300 dark:via-gray-400 dark:to-gray-500"
			>
				Discover, Explore, and Enjoy!
			</h1>

			<Link href={'/'} className="flex gap-1 items-end ">
				<Image src="/fevicon2.webp" alt="fevicon" width={28} height={28}/>
				<span className="font-thin text-xl leading-none">Search</span>
			</Link>
		</div>
	);
}
