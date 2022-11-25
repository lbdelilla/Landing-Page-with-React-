import React from "react";


//include images into your bundle

import Jumbotron from "./jumbotron.jsx";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";
import CardContainer from "./cardcontainer.jsx";


//create your first component
const Home = () => {
	return (
	<div className="all">	
		<div className="text-center">
			<NavBar/>
			<div>	
				<Jumbotron/>	
				<h1 className="titleTeam">Nuestro equipo!</h1>
			</div>
		</div>
		<div className="card-group">
		<CardContainer/>
		</div>	
			<Footer/>
	</div>	
	);
};

export default Home;
