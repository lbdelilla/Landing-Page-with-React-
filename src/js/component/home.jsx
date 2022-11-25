import React from "react";


//include images into your bundle

import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>	
			<Jumbotron/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
