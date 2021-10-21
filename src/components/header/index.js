import React from "react";
import styled from "styled-components";
function Header() {
	return (
		<Wrapper>
			<div>Grafikvägen 9 - Kostnader</div>
			<div>max/marie</div>
		</Wrapper>
	);
}

export default Header;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	width: 50%;
	margin: 12px 6px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
