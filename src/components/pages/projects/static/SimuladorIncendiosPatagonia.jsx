import { Container, Col, Row } from "react-bootstrap"
import { Scroller } from "../../../Scroller"

const videos = [
    {
        title: "Abrir un proyecto en SIP",
        url: "amD8-mR5wyQ"
    },
    {
        title: "Recorrer el escenario 3D",
        url: "ofHhbKjafmU"
    },
    {
        title: "Elegir el modelo de propagación del fuego",
        url: "fK_WmgLqlik"
    },
    {
        title: "Avance y retroceso del fuego. Colocación de cortafuegos",
        url: "uA264XeZ1u0"
    },
    {
        title: "Agregando nuevos puntos de ignición",
        url: "bXSQT8s4NGM"
    },
    {
        title: "Capas de información",
        url: "Ug4UKapBUBQ"
    },
]

export const SimuladorIncendiosPatagonia = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Scroller
                        prefix="sip"
                        items={[
                            "SIP: Simulador de Incendios Patagonia",
                            "¿Por qué es importante este simulador en nuestro país?",
                            "¿Para qué se puede usar?",
                            "Un pequeño resumen de la propuesta del simulador"
                        ]}
                    />
                </Col>
                <Col xs={12} md={8} lg={9}>
                    <section id="sip-1" className="smt-navbar">
                        <h2>SIP: Simulador de Incendios Patagonia</h2>
                        <p>Este simulador de alto rendimiento simula cómo se propaga el fuego en un entorno natural específico (escenario) a partir de 1 (o más) puntos de ignición.</p>
                        <p>En un incendio forestal, la intensidad y dirección de avance del fuego está gobernado principalmente por: la vegetación presente en el lugar (que actúa como combustible del fuego), el estado meteorológico del lugar y la topografía. Estos son los factores que más condicionan el avance del fuego en un incendio. Entonces, como la mayoría de los simuladores actuales, nuestro simulador se alimenta de datos topográficos, meteorológicos y de cobertura del suelo a fin de calcular cómo se propagará el fuego.</p>
                        <p>Una vez definido el escenario para la simulación, se usan fórmulas matemáticas que nos ayudan a modelizar el avance del fuego. Dichas fórmulas matemáticas toman los datos de entrada y los puntos de comienzo del fuego y tras múltiples pasos de simulación, se puede observar cómo avanzaría el fuego.</p>
                        <p>Es un simulador desarrollado para ser ejecutado en placas gráficas (para video juegos). El simulador es de alto rendimiento ya que usamos paralelismo y técnicas de optimización para que sea eficiente y rápido. En la imagen más abajo se puede ver la vista principal del simulador, y luego, más abajo, se muestran múltiples videos con algunas de las funciones más importantes del simulador.</p>
                        <img src={require("../../../../assets/images/projects/simulador.png")} alt="Simulador" className="w-100 mb-3" />
                    </section>

                    <section id="sip-2" className="smt-navbar">
                        <h2>¿Por qué es importante este simulador en nuestro país?</h2>
                        <p>En países desarrollados, se observa un grado avanzado de desarrollo de este tipo de herramientas (USA: FARSITE, BehavePlus , Canada: PROMETHEUS, etc.). Dado que el comportamiento del fuego en incendios forestales está gobernado por la topografía, clima y vegetación, estas características forman parte de los datos de entrada de estas herramientas.</p>
                        <p>Entonces, <b>el desarrollo de este tipo de herramientas en nuestro país y específicamente en la Patagonia Argentina, logrará obtener herramientas diseñadas y desarrolladas para nuestros escenarios, nuestros climas, topografías y vegetaciones predominantes.</b></p>
                        <p>Además, como parte de nuestro trabajo de investigación, el estudio de modelos matemáticos que representen la propagación del fuego en un incendio forestal siempre se mantiene como pilar en nuestro trabajo. En este simulador, hemos incorporado 2 modelos matemáticos que modelizan el avance del fuego. El primero, detallado en la sección de proyectos Autómata Celular se trata de un modelo estadístico, basado en incendios ocurridos en el noroeste patagónico y implementado en un autómata celular, el cual es una de las opciones de nuestro simulador.</p>
                        <p>Pero, además del autómata celular, un nuevo modelo matemático está siendo desarrollado por nuestro grupo, el cual también está embebido en nuestro simulador SIP. Dicho modelo es un modelo basado en ecuaciones diferenciales, y modeliza el fenómento según sus características de Reacción-Difusión-Convección. Este modelo representa características físicas del avance del fuego en la superficie. En el simulador SIP es posible intercambiar y elegir entre los 2 modelos de propagación.</p>
                    </section>

                    <section id="sip-3" className="smt-navbar">
                        <h2>¿Para qué se puede usar?</h2>
                        <p>Todo simulador sirve, valga la redundancia, para "simular" un fenómeno, que en nuestro caso, es el avance del fuego en un incendio forestal. Gracias a los simuladores, se pueden simular incendios sin producir pérdidas ni riesgos, en un entorno seguro como es el uso de una computadora.</p>
                        <p>Por otro lado, dadas las características de la interfaz gráfica de nuestro simulador, se obtiene la visualización del avance del fuego en un entorno 3D donde se manejan distintas capas de información: topografía, datos del viento, vegetación, etc. Esto facilita la comprensión de cómo se propagaría el fuego en un entorno en particular. Comprender el fenómeno ayuda en general en las tareas de control, mitigación y reducción del fuego. Se estima que esta herramienta puede resultar de suma utilidad para el proceso de toma de decisiones.</p>
                        <p>Además, se puede utilizar para mejorar los planes de evacuación en zonas de interfaz, planificación y evaluación de cortafuegos, evaluar el avance del fuego ante cambios en el viento, etc.</p>
                    </section>

                    <section id="sip-4" className="smt-navbar">
                        <h2>Un pequeño resumen de la propuesta del simulador</h2>
                        <p>El Simulador de Incendios Patagonia (SIP) es un simulador de alto rendimiento que permite visualizar el avance del fuego en un escenario específico. Está desarrollado en CUDA C y CUDA C++, utilizando placas de video juegos para acelerar el cálculo, interfaz e interacción con el ususario. Funciona en entornos Linux y Windows.</p>
                        <p>Las entradas del simulador SIP son archivos raster (formato ASCII). Las cuales deben ser correctamente armadas antes de usarlas. Todas las capas de información deben coincidir en el área exacta de representación de la superficie terrestre. Las salidas del simulador, además de la salida visual, se pueden obtener mapas del avance del fuego en cualquier paso de simulación. Dichos mapas se almacenan en el disco y, gracias a que son también archivos raster son georreferenciables y se pueden visualizar y utilizar con cualquier GIS.</p>
                        <p>El simulador SIP se encuentra en estado de desarrollo. Nuevas funciones se diseñan, implementan y testean a fin de dotar a nuestro simulador de características propias que lo conviertan en una herramienta útil y rápida. Las funciones más importantes del simulador se muestran en la sección de videos.</p>
                    </section>

                    <section>
                        <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3">
                            {videos.map(({ title, url }) =>
                                <Col key={url} className="d-flex flex-column justify-content-end mb-3">
                                    <p><strong>{title}</strong></p>
                                    <iframe height="250" src={"https://www.youtube.com/embed/" + url} title="SIP: Abrir Proyecto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                                </Col>
                            )}
                        </Row>
                    </section>

                </Col>
            </Row>

        </Container>
    )
}
