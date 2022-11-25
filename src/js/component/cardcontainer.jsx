import React from "react";
import Card from "./card.jsx";

import ray from "../../img/ray.jpg";
import peter from "../../img/peter.jpg";
import winston from "../../img/winston.jpg";
import egon from "../../img/egon.jpg";

const ghostBusters = {
    peter :{
        image: peter,
        title: "Peter Venkman",
        text: "Nació en Brooklyn, Nueva York, su madre murió a muy temprana edad y tiene pésima relación con su padre, un estafador profesional. Se unió a Ray y Egon en la investigación científica de los fantasmas y otros fenómenos paranormales y es miembro fundador de los Cazafantasmas.",
        buttonURL: "https://es.wikipedia.org/wiki/Peter_Venkman", 
    },
    egon : {
        image: egon,
        title: "Egon Spengler",
        text: "Es un físico nuclear y un parapsicólogo, y su pensamiento es el más científico de todos.Junto con Ray Stantz desarrolló el equipo de los Cazafantasmas. Aunque sea sumamente científico también es bien versado en ocultismo, y sabe consultar mejor que nadie la Guía de los Espíritus de Tobin, especie de grimorio paranormal.",
        buttonURL: "https://es.wikipedia.org/wiki/Egon_Spengler",
    },
    ray : {
        image: ray,
        title: "Ray Stantz",
        text: "Ray es el más sensible de los Cazafantasmas, y mientras Egon es el cerebro del grupo, Ray es el corazón. Ray desarrolló las principales teorías científicas y la mayor parte del Equipo de los Cazafantasmas junto a Egon Spengler. Es uno de los miembros fundadores del grupo y tiene una pasión enorme por viejas películas y cómics de terror.",
        buttonURL: "https://es.wikipedia.org/wiki/Ray_Stantz",

    },
    winston: {
        image: winston,
        title: "Winston Zeddemore",
        text: "Es el conductor oficial del Ecto-1.Siendo el único miembro no científico y más escéptico, sirve como referente constante pues mantiene los pies en la tierra mientras su colegas sencillamente se distraen en teorías.Asegura que era escéptico y no creía en fantasmas antes de unirse a los Cazafantasmas solo para recibir un cheque.",
        buttonURL: "https://es.wikipedia.org/wiki/Winston_Zeddemore ",

    }
}

const CardContainer = () => {
    return (
        <div className="container">
           <div class="row row-cols-md-4 d-flex justify-content-between mt-5 mb-5">
            <Card image={ghostBusters.peter.image} title={ghostBusters.peter.title} text={ghostBusters.peter.text} buttonUrl={ghostBusters.peter.buttonURL}/>
            <Card image={ghostBusters.egon.image} title={ghostBusters.egon.title} text={ghostBusters.egon.text} buttonUrl={ghostBusters.egon.buttonURL}/>
            <Card image={ghostBusters.ray.image} title={ghostBusters.ray.title} text={ghostBusters.ray.text} buttonUrl={ghostBusters.ray.buttonURL}/>
            <Card image={ghostBusters.winston.image} title={ghostBusters.winston.title} text={ghostBusters.winston.text} buttonUrl={ghostBusters.winston.buttonURL}/>
            </div>
        </div>    
    );
};

export default CardContainer;