import React from "react";

import "../scss/HomeThreeColumns.scss";

export default function HomeThreeColumns() {
	return (
		<section className='HomeThreeColumns__section'>
			<div className='HomeThreeColumns__single'>
				<h3 className='HomeThreeColumns__title'>Oddanych Worków</h3>
				<p className='HomeThreeColumns__text'>
					Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
					a elit viverra elementuma. Aliquam erat volutpat.
				</p>
			</div>
			<div className='HomeThreeColumns__single'>
				<h3 className='HomeThreeColumns__title'>WSPARTYCH ORGANIZACJI</h3>
				<p className='HomeThreeColumns__text'>
					Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
					a elit viverra elementuma. Aliquam erat volutpat.
				</p>
			</div>
			<div className='HomeThreeColumns__single'>
				<h3 className='HomeThreeColumns__title'>ZORGANIZOWANY ZBIÓREK</h3>
				<p className='HomeThreeColumns__text'>
					Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
					a elit viverra elementuma. Aliquam erat volutpat.
				</p>
			</div>
		</section>
	);
}
