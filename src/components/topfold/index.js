import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillPlusCircle, AiFillCreditCard } from "react-icons/ai";
function TopFold() {
	const [query, setQuery] = useState("");
	const handleQuery = (e) => {
		setQuery(e.target.value);
		console.log(query);
	};

	return (
		<Wrapper>
			<div className="searchBar">
				<input placeholder="Sök utlägg" value={query} onChange={handleQuery} />
			</div>
			{window.location.pathname === "/add" ? (
				<Link to="/">
					<div className="icon">
						<AiFillCreditCard />
					</div>
				</Link>
			) : (
				<Link to="/add">
					<div className="icon">
						<AiFillPlusCircle />
					</div>
				</Link>
			)}
		</Wrapper>
	);
}

export default TopFold;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: calc(100% - 12px);
	margin: 12px 6px;

	.icon {
		color: green;
		font-size: 1.5rem;
		&:hover {
			filter: drop-shadow(0 0 0.75rem darkgrey);
		}
	}

	.searchBar {
		width: 50%;
		& input {
			width: 80%;
			border: none;
			outline: none;
			padding: 10px;
			border-radius: 20px;
		}
	}
`;
