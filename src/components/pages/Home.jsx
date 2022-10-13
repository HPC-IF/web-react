import { Container, Row, Col } from 'react-bootstrap'

export const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Nuestro trabajo</h2>
                    <p>Nuestro trabajo se basa en la propuesta de herramientas aplicadas a la <b>investigación de incendios forestales y su propagación.</b> El cuál enmarcamos en la <b>computación de alto rendimiento (High Performance Computing o HPC por sus siglas en inglés)</b>, ya que usamos computadoras paralelas de tecnologías de punta, a fin de acelerar las respuestas y obtener resultados más precisos.</p>
                    <p>A través del estudio de la problemática (propagación del fuego en incendios forestales) y el estudio de tecnologías de alto rendimiento se proponen herramientas que estimamos puedan ayudar en la comprensión del fenómeno (avance del fuego en un incendio forestal), como así también estimamos que ayuden a mejorar la toma de decisiones, mejorar estrategias para la prevención de incendios, mejorar el control y mitigación del fuego en el momento de un siniestro, etc.</p>
                    <p>Usamos <b>placas gráficas</b> (si!!! las gamers) para el desarrollo y ejecución de nuestras aplicaciones. ¿Por qué? porque son rápidas y económicas (dada su potencia de cálculo), además de ser tecnologías amigables con el medio ambiente debido a su bajo consumo energético.</p>
                    <p>Nos encontramos en uno de los lugares más hermosos del mundo, en la ciudad de San Carlos de Bariloche, Patagonia Argentina. Nuestos paisajes nos inspiran para trabajar, día a día, desde nuestro equipo interdisciplinario en este trabajo, el cual nos hace sentir que podemos, finalmente contribuir al bienestar de nuestro planeta.</p>
                    <p>Somos un equipo de investigadores de distintas áreas disciplinares (físicos, informáticos, ingenieros electrónicos), los cuales trabajamos en distintas instituciones (Universidades Nacionales y CONICET), donde cada uno suma su experiencia y conocimiento, a fin de lograr resultados que ayuden en este área de conocimiento e idealmente, a instituciones relacionadas al manejo del fuego.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Un breve resumen...</h3>
                    <p>Los incendios forestales son incendios no controlados, no deseados, que se propagan rápidamente. Se desarrollan en áreas de bosques naturales, cultivos, áreas forestadas, en zonas de interfaz con poblaciones, etc.</p>
                    <p>Los incendios forestales son parte del balance ecológico del planeta, pero en las últimas décadas su frecuencia aumentó, haciendo que este tipo de fenómeno pase de ser un fenómeno natural a un desastre que amenaza el equilibrio del planeta y la vida en el mismo.</p>
                    <p>Causantes de los incendios: naturalmente, las tormentas con rayos eléctricos eran una fuente importante de este tipo de incendios. Hoy se le suma el factor antropológico: negligencia humana, quemas para convertir zonas de vegetación natural en áreas de cultivo y explotación del suelo, especulación inmobiliaria, quemas prescriptas que se vuelven incontrolables, quemas de desperdicios, etc.</p>
                </Col>
            </Row>
        </Container>
    )
}