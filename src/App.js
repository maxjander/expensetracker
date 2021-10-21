import styled from "styled-components";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddExpense from "./pages/add-expense";

function App() {
	return (
		<Router>
			<Wrapper>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/add" exact component={AddExpense} />
				</Switch>

				<Footer />
			</Wrapper>
		</Router>
	);
}

export default App;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	background-color: aliceblue;
`;
