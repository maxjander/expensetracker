import React from "react";
import styled from "styled-components";
import AddForm from "../../components/addform";
import TopFold from "../../components/topfold";

function AddExpense() {
	return (
		<Wrapper>
			<TopFold />
			<AddForm />
		</Wrapper>
	);
}

export default AddExpense;

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
