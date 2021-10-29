import React from "react";
import styled from "styled-components";

import ExpenseList from "../../components/expenselist";
import TopFold from "../../components/topfold";

function Home() {
	return (
		<Wrapper>
			<TopFold />
			<ExpenseList />
		</Wrapper>
	);
}

export default Home;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	width: 50%;
	margin: 0px 6px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
