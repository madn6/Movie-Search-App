import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";  
import SearchBox from "@/components/SearchBox";  

export const metadata = {
	title: "Movie Search App",
	description: "Discover, search, and explore movies."
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Header />
					<Suspense fallback={<div>Loading Navbar...</div>}>
						<Navbar />
					</Suspense>
					<Suspense fallback={<div>Loading SearchBox...</div>}>
						<SearchBox />
					</Suspense>
					<Suspense fallback={<div>Loading Page...</div>}>
						{children}
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}
