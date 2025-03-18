'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function DayLightSwitch() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = theme || 'dark'; // Default to dark

	if (!mounted) return null;

	return (
		<button
			className="p-2 rounded-sm  cursor-pointer  transition-all duration-300 ease-in-out 
              bg-white text-[#121212] dark:bg-[#232323] dark:text-[#a4a4a6]
              dark:hover:bg-[#232323] hover:bg-gray-200"
			onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
		>
			{currentTheme === 'dark' ? (
				<MdLightMode className="text-xl  dark:text-yellow-400" />
			) : (
				<MdDarkMode className="text-xl  text-gray-100" />
			)}
		</button>
	);
}
