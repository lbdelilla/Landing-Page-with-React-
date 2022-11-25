import React from "react";


//include images into your bundle

import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";



//create your first component
const Home = () => {
	return (
	<div className="all">	
		<div className="text-center">
			<NavBar/>
			<div>	
				<Jumbotron/>	
				<h1 className="title">Meet our team!</h1>
			</div>
		</div>
		<div className="card-group">
			<Card/>
		</div>	
			<Footer/>
	</div>	
	);
};

export default Home;
