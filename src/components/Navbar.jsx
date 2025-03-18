import React from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
	return (
		<div>
			<NavbarItem title="trending" param="fetchTrending" />
			<NavbarItem title="Top Rated" param="fetchTopRated" />
		</div>
	);
}
