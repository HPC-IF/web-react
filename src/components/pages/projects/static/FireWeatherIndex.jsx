import { Col, Container, Row } from "react-bootstrap"
import { Scroller } from "../../../Scroller"

export const FireWeatherIndex = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Scroller
                        prefix="fwi"
                        items={[
                            "Fire Weather Index (FWI) - Índice meteorológico de peligro de incendios",
                            "¿Cómo trabajamos el FWI en nuestro proyecto?"
                        ]}
                    />
                </Col>
                <Col xs={12} md={8} lg={9}>
                    <section id="fwi-1" className="smt-navbar">
                        <h2>Fire Weather Index (FWI) - Índice meteorológico de peligro de incendios</h2>
                        <p>El Canadian Forest Fire Weather Index (FWI) System (FWI de ahora en más) fue desarrollado en Canadá, y forma parte del Fire Behavior Prediction (FBP) System, sistema canadiense de predicción del comportamientod el fuego. El FWI o índice meteorológico de peligro de incendios sirve para determinar el estado de los combustibles finos, medianos y gruesos, para calcular índices de carga (cantidad de combustible disponible para quemar) y de propagación. Se basa datos meteorológicos de temperatura, humedad relativa, velocidad del viento y precipitaciones acumuladas.</p>
                        <p>El FWI está formado por 6 componentes que reflejan los efectos de la humedad en la vegetación (por condiciones meteorológicas), y cómo ésto influye en la peligrosidad de incendio. Los primeros 3 componentes son códigos de humedad del combustible (vegetación presente en un sitio, que dado un incendio, actuará como combustible del fuego). Sus valores crecen a medida que la humedad del suelo decrece (que la sequía crece). Se consideran 3 niveles de combustible: Fine Fuel Moisture Code (FFMC): hojarasca y material fino; Duff Moisture Code (DMC): material orgánico poco compactado y de moderada profundidad (7cm de profundidad) y Drought Code (DC): material orgánico compactado y profundo (hasta 18cm de profundidad). Los cálculos se basan en procesos de secado del material (pérdida de la humedad) o de absorción de humedad en caso de presentarse lluvias.</p>
                        <p>Los siguientes 3 índices de comportamiento del fuego son: Initial Spread Index (ISI): combinación del efecto del viento y del efecto del contenido de humedad del combustible fino en el avance del fuego. Buildup Index (BUI): combinación del DC y DMC, índices de contenido de humedad de los niveles más gruesos, lo cual brinda una idea de la cantidad de combustible disponible para quemar: cuanto más seco el material en estos 2 niveles del suelo, más combustible para quemar. Luego, mediante la combinación del ISI y del BUI (el cual se transforma a una medida de peso de combustible consumido), se obtiene el Fire Weather Index (FWI), el cual representa una medida de intensidad del fuego.</p>
                        <p>Un componente adicional al FWI es el Daily Severity Rating (DSR): se propone como forma de medir la dificultad de control del incendio en términos del FWI. Además, el FWI no es conveniente para calcular promedios: sólo debe usarse como un valor diario de intensidad. Cualquier promedio (espacial, entre distintas estaciones meteorológcias para un día determinado o temporal, considerando un rango de días/tiempo), se calcula usando el DSR y no el FWI.</p>
                        <p>Para profundizar en detalles sobre el FWI y sus cálculos, se recomienda la lectura de: este reporte. Adicionalmente, este otro reporte suma una implementación en FORTRAN de las ecuaciones del FWI, como así también ejemplifica una posible entrada y la salida correspondiente aplicando las ecuaciones implementadas.</p>
                        <p>El FWI fue desarrollado en Canadá pero su utilización no se restringe a dicho país. En el caso particular de Argentina, existen trabajos científicos que demuestran su utilidad con nuestros suelos y escenarios: informe técnico, o este artículo.</p>
                        <p>Las entradas del FWI son datos meteorológicos, datos estándares para estaciones meteorológicas actuales: temperatura, humedad relativa del ambiente, dirección del viento, velocidad del viento y precipitación acumulada en las últimas 24hs. Además, para su correcto funcionamiento, necesita de valores del FFMC, DMC y DC previamente calculados para el día anterior (si los mismos no se conocen, es posible usar valores por defecto, sabiendo que este hecho puede disminuir la precisión de los resultados obtenidos).</p>
                    </section>
                    <section id="fwi-2" className="smt-navbar">
                        <h2>¿Cómo trabajamos el FWI en nuestro proyecto?</h2>
                        <p>A partir de nuestra comunicación con personal técnico y brigadistas del Departamento de Incendios, Comunicaciones y Emergencias del Parque Nacional Nahuel Huapi (ICE-PNNH, Administración de Parques Nacionales) nos sugieren implementar las ecuaciones del FWI en una aplicación propia.</p>
                        <p>A partir de esto, hemos implementado estos cálculos en el lenguaje de programación C, a fin de tener una aplicación más robusta y rápida para ofrecer al equipo del PNNH previamente mencionado. Luego, a fin de mejorar la interfaz y hacerla más amigable, implementamos los cálculos en Java Script respondiendo a varios de los requerimientos solicitados.</p>
                        <p>Desde "Calculadora FWI" se puede acceder a dicha calculadora. La misma permite seleccionar un archivo con datos meteorológicos almacenado localmente, realizar los cálculos del FWI, visualizar y guardar los datos en el disco local.</p>
                        <p>Luego, los cálculos para estimar la peligrosidad de incendio fueron embebidos en nuestro Simulador SIP. La ventaja de poder realizar los cálculos en el marco del simulador SIP es que se puede visualizar la peligrosidad de ignición en el mapa, esto es, se toma la vegetación de cada celda y con el cálculo del índice se determina la peligrosidad de que un punto de ignición se convierta en un incendio. Esto se muestra en el video representativo de más abajo.</p>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}
