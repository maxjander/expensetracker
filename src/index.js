import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import store from "./redux/store";
/*
const animation = keyframes`${lightSpeedIn}`;
*/

/* animation: 2s ${animation}; */
const GlobalStyle = createGlobalStyle`

body {
	margin: 0;
	font-family: 'Noto Sans Mono', monospace;
	background-color: aliceblue ;

}
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
