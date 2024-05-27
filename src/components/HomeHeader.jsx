import React from "react";
import HomeHeaderNavigation from "./HomeHeaderNavigation";

import '../scss/HomeHeader.scss'

export default function HomeHeader() {
	return (
		<section className='HomeHeader__opening'>
			<div className='HomeHeader__img'></div>
			<HomeHeaderNavigation />
			<div className="HomeHeader__section__reight">
				<h1 className="HomeHeader__title">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
				<div></div>
				<button>ODDAJ RZECZY</button>
				<button>ZORGANIZUJ ZBIÓRKĘ</button>
			</div>
		</section>
	);
}
