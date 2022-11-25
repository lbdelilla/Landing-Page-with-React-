import React from "react";
import allofthem from "../../img/allofthem.png";
import font from "../../img/font.png";

const Jumbotron = () => {
    return (
        <div className="jumbotron" style={{backgroundImage: `url(${allofthem})`}}>
            <img className="logo" src={font} alt="ghostbuster logo"/>
            <p className="textjmb"><strong>Ser cazafantasmas no solo es nuestra profesión, es nuestra pasión!</strong></p>            
            <p className="textjmb2"><strong>Si sientes ruidos extraños, si tus puertas abren o cierran solas o si tienes a Slimer comiendo la comida de tu nevera..</strong></p>
            <p className="lead"><a className="btn btn-dark btn-lg" href="https://es.wikipedia.org/wiki/Los_cazafantasmas" target="_blank" role="button">Contáctanos!</a></p>
        </div>
    );
};


export default Jumbotron;