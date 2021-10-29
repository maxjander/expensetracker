import { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";

export const bounceAnimation = keyframes`${bounceInUp}`;

export const randomAnimationTime = () => {
	const times = ["0.8", "0.9", "1", "1.1", "1.2"];
	const random = Math.floor(Math.random() * times.length);

	return times[random];
};
