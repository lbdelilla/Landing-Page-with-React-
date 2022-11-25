import React from "react";
import ray from "../../img/ray.jpg";
import peter from "../../img/peter.jpg";
import winston from "../../img/winston.jpg";
import egon from "../../img/egon.jpg";

const Card = () => {
    return (
        <div class="container-lg">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col-lg-14 mb-3 d-flex align-items-stretch">
                    <a name="about"/>
                    <div className="card-body card">
                        <img src={peter} class="card-img-top rounded cardfoto" alt="A CUTE PICTURE OF A GHOSTBUSTER"/>
                        <h5 className="card-title">Peter Venkman</h5>
                        <p className="card-text">Nació en Brooklyn, Nueva York, su madre murió a muy temprana edad y tiene pésima relación con su padre, un estafador profesional. Se unió a Ray y Egon en la investigación científica de los fantasmas y otros fenómenos paranormales y es miembro fundador de los Cazafantasmas.</p>
                        <a href="https://es.wikipedia.org/wiki/Peter_Venkman" target="_blank" className="btn btn-dark mt-auto align-self-center">Más información!</a>
                    </div>
                </div>    
                <div class="col-lg-14 mb-3 d-flex align-items-stretch">    
                    <div className="card-body card">
                        <img src={egon} class="card-img-top rounded cardfoto" alt="A CUTE PICTURE OF A GHOSTBUSTER"/>
                        <h5 className="card-title">Egon Spengler</h5>
                        <p className="card-text">Es un físico nuclear y un parapsicólogo, y su pensamiento es el más científico de todos.Junto con Ray Stantz desarrolló el equipo de los Cazafantasmas. Aunque sea sumamente científico también es bien versado en ocultismo, y sabe consultar mejor que nadie la Guía de los Espíritus de Tobin, especie de grimorio paranormal.</p>
                        <a href="https://es.wikipedia.org/wiki/Egon_Spengler" target="_blank" className="btn btn-dark mt-auto align-self-center">Más información!</a>
                    </div>
                </div>
                <div class="col-lg-14 mb-3 d-flex align-items-stretch">  
                    <div className="card-body card">
                        <img src={ray} class="card-img-top rounded cardfoto" alt="A CUTE PICTURE OF A GHOSTBUSTER" />
                        <h5 className="card-title">Ray Santz</h5>
                        <p className="card-text">Ray es el más sensible de los Cazafantasmas, y mientras Egon es el cerebro del grupo, Ray es el corazón. Ray desarrolló las principales teorías científicas y la mayor parte del Equipo de los Cazafantasmas junto a Egon Spengler. Es uno de los miembros fundadores del grupo y tiene una pasión enorme por viejas películas y cómics de terror.</p>
                        <a href="https://es.wikipedia.org/wiki/Ray_Stantz" target="_blank" className="btn btn-dark mt-auto align-self-center">Más información!</a>
                    </div>
                </div>    
                <div class="col-lg-14 mb-3 d-flex align-items-stretch">   
                    <div className="card-body card">
                        <img src={winston} class="card-img-top rounded cardfoto" alt="A CUTE PICTURE OF A GHOSTBUSTER"/>
                        <h5 className="card-title">Winston Zeddemore</h5>
                        <p className="card-text">Es el conductor oficial del Ecto-1.Siendo el único miembro no científico y más escéptico, sirve como referente constante pues mantiene los pies en la tierra mientras su colegas sencillamente se distraen en teorías.Asegura que era escéptico y no creía en fantasmas antes de unirse a los Cazafantasmas solo para recibir un cheque.</p>
                        <a href="https://es.wikipedia.org/wiki/Winston_Zeddemore" target="_blank" className="btn btn-dark mt-auto align-self-center">Más información!</a>
                    </div>
                </div>
            </div>        
        </div>
    );
};



export default Card;