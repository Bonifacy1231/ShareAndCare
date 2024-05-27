import React from "react";

import "../scss/HomeHeaderNavigation.scss";
import { Link } from "react-scroll";

export default function HomeHeaderNavigation() {
	return (
		<nav className='nav__section'>
			<div className='nav__container'>
				<ul className='nav__menu'>
					<Link>
						<li className='nav__item'>Start</li>
					</Link>
					<Link>
						<li className='nav__item'>O co chodzi?</li>
					</Link>
					<Link>
						<li className='nav__item'>o nas</li>
					</Link>
					<Link>
						<li className='nav__item'>Fundacje i organizacje</li>
					</Link>
					<Link>
						<li className='nav__item'>Kontakt</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}
