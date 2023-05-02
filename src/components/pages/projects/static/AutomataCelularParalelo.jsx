import { Col, Container, Row } from "react-bootstrap"
import { Scroller } from "../../../Scroller"

export const AutomataCelularParalelo = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Scroller 
                        prefix="acp"
                        items={["Autómata Celular Paralelo"]}
                    />
                </Col>
                <Col xs={12} md={8} lg={9}>
                    <section id="acp-1" className="smt-navbar">
                        <h2>Autómata Celular Paralelo</h2>
                        <p>Este proyecto dio inicio aproximadamente en el 2014, donde generamos un autómata celular paralelo (usando CUDA C y CUDA C++) para simular la propagación de incendios forestales. Un autómata celular, en simples palabras, es un modelo matemático que permite simular la propagación de un fenómeno, en este caso, en 2 dimensiones.</p>
                        <p>Dicho simulador fue el inicio de nuestro trabajo. Implementamos un modelo de propagación del fuego estadístico, publicado en:</p>
                        <p>A stochastic fire spread model for north patagonia based on fire occurrence maps</p>
                        <p>Juan Manuel Morales, Mónica Mermoz, J. H. Gowda, and Thomas Kitzberger. Ecological Modelling, vol. 300, no. 0, pp. 73 – 80, 2015.</p>
                        <p>Dicho autómata celular paralelo mostró una notable reducción de tiempos al ser paralelo. Además, se lo utilizó junto a estrategias de optimización (un algoritmo genético y un Monte Carlo) a fin de reducir la incertidumbre de ciertas variables.</p>
                        <p>Dicho simulador utiliza datos de topografía, meteorología y cobertura del suelo armando de esta forma un escenario, donde se inicia en un punto determinado el fuego. Gracias a los datos de entrada y a ecuaciones que modelizan el comportamiento del fuego, se puede simular cómo avanza el fuego para sucesivos pasos de simulación. Los datos de entrada se arman en archivos raster (archivos que permiten georeferenciación) y donde la precisión espacial (tamaño de cada celda) se puede variar (de un escenario a otro, ya que esto es un parámetro de entrada del simulador).</p>
                        <p>Se realizó una etapa de estimación de datos de entrada y esta etapa permitió validar el método para fuegos de la zona del Noroeste Patagónico.</p>
                        <p>Este simulador no cuenta con interfaz visual, pero las salidas se almacenan en archivos, que luego, utilizando scripts y un poco de arte, hemos armado videos que muestran el avance del fuego para distintas simulaciones.</p>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}
