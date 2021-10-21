import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";

function Footer() {
	return (
		<Wrapper>
			<AiFillGithub className="icon" />
			<AiFillFacebook className="icon" />
			<AiFillInstagram className="icon" />
			<AiFillMail className="icon" />
		</Wrapper>
	);
}

export default Footer;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: calc(100% - 12px);
	margin: 12px 6px;

	.icon {
		font-size: 1.5rem;
		&:hover {
			filter: drop-shadow(0 0 0.75rem darkgrey);
		}
	}
`;
