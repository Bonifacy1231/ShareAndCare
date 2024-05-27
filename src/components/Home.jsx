import React from "react";
import HomeHeader from "./HomeHeader.jsx";
import HomeThreeColumns from "./HomeThreeColumns";

import '../scss/Home.scss'

export default function Home () {
	return (
		<div className="container">
			<HomeHeader/>
			<HomeThreeColumns/>
		</div>
	);
}