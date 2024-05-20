import React from "react";

import "../scss/nav.scss";
import { Link } from "react-scroll";

export default function HomeHeaderNavigation() {
	return (
		<nav className='nav__section'>
			<div className='nav__container'>
				<ul className='nav__menu'>
					<Link>
						<li className='nav__item'>Start</li>
					</Link>

					<li className='nav__item'>O co chodzi?</li>
					<li className='nav__item'>o nas</li>
					<li className='nav__item'>Fundacje i organizacje</li>
					<li className='nav__item'>Kontakt</li>
				</ul>
			</div>
		</nav>
	);
}
