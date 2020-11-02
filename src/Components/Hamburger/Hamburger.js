import React from 'react';
import { StyledHamburger, StyledHamburgerBread, StyledHamburgerMeat, StyledHamburgerLabel } from './Hamburger.style';

export default function Hamburger({ isOpen, toggle }) {

	return (
		<StyledHamburger onClick={() => toggle(!isOpen)}>
			<StyledHamburgerBread>
				<StyledHamburgerMeat isOpen={isOpen} />
			</StyledHamburgerBread>
		</StyledHamburger>
	);
}
