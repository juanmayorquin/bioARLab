import { ColorBar } from "./components/ColorBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

export function Instrumentos() {
    return (
        <>
            <ColorBar />
            <Header />
            <Section 
                texto={"¡Comencemos este emocionante viaje explorando de cerca dos instrumentos biomédicos que están cambiando el juego en la medicina moderna!"}
                isBold
            />
            <Section
                texto={"El osciloscopio es una herramienta poderosa que ha revolucionado la forma en que los ingenieros y científicos comprenden y trabajan con señales eléctricas. Desde su capacidad para revelar detalles sutiles de las señales hasta su papel crucial en la resolución de problemas y la toma de decisiones en diseño y desarrollo, el osciloscopio sigue siendo un pilar en la industria electrónica. Es una ventana al mundo oculto de las señales eléctricas que impulsa nuestra tecnología moderna y transforma la forma en que interactuamos con el mundo de la electrónica."}
                backgroundColor={"#F2F2F2"}
            />
            <ColorBar />
            <Section
                texto={"La fuente de voltaje, a menudo pasando desapercibida pero omnipresente en nuestro mundo electrificado, es el motor que impulsa nuestra vida digital y tecnológica. Sin ella, la mayoría de los dispositivos que damos por sentado simplemente no podrían funcionar. Es el corazón energético que hace latir la electrónica moderna y desbloquea un sinfín de posibilidades en la innovación y el progreso tecnológico."}
                backgroundColor={"#F4F4F4"}
            />
            <Footer />
        </>
    );
}

