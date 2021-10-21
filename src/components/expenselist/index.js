import React from "react";
import styled from "styled-components";

function ExpenseList() {
	const list = [
		{
			title: "Gjorde ett utlägg",
			logo: "djdjd",
			createdAt: Date.now(),
			amount: 1345,
		},
		{
			title: "Gjorde ett utlägg",
			logo: "djdjd",
			createdAt: Date.now(),
			amount: 122,
		},
		{
			title: "Gjorde ett utlägg",
			logo: "djdjd",
			createdAt: Date.now(),
			amount: 3322,
		},
	];

	return (
		<Wrapper>
			Utgifter
			{list.length &&
				list.map((item, key) => (
					<div key={key}>
						{item.title} {item.amount}
					</div>
				))}
		</Wrapper>
	);
}

export default ExpenseList;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	width: calc(100% - 12px);
	margin: 12px 6px;

	& div {
		border: none;
		outline: none;
		padding: 10px 10px 10px 0;
		&:hover {
			background-color: #eeeeee;
		}
	}
`;
