import Link from 'next/link';
import React from 'react';

export default function MenuItems({ title, Icon, address }) {
	return (
      <Link href={address} className=''>
         <Icon className="text-2xl sm:hidden"/>
			<p className='font-regular  capitalize text-base hidden sm:inline'>{title}</p>
		</Link>
	);
}
