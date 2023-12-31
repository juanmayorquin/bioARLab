import { ColorBar } from './components/ColorBar.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Section } from './components/Section.jsx'
import { Article } from './components/Article.jsx'
import { LargeArticle } from './components/LargeArticle.jsx'
import { Footer } from './components/Footer.jsx'
export function Inicio() {
    return (
        <>
            <ColorBar />
            <Header />
            <Hero />
            <Section
                texto={"¡Bienvenidos a nuestra plataforma dedicada a brindarte información detallada sobre dos instrumentos biomédicos líderes en la industria de la salud!"}
                video={"https://www.youtube.com/embed/8jPKgJAQlZA"}
                backgroundColor={"#FFFFFF"}
                isBold
            />
            <ColorBar />
            <section className="container">
                <Article 
                    titulo={"Osciloscopio: Explorando las Ondas Electrónicas"}
                    contenido={"Sumérgete en el mundo de las ondas electrónicas con los osciloscopios. Desde señales simples hasta complejas, estas herramientas te permiten visualizar y comprender el comportamiento de las corrientes eléctricas. Aprende a ajustar la escala y la frecuencia para analizar detenidamente las formas de onda. Descubre cómo un osciloscopio puede ser tu aliado para diagnosticar problemas y diseñar circuitos más eficientes."}
                    src={"../src/assets/osciloscopio.png"} 
                    alt={"Fuente de voltaje"}
                    side={"left"}
                    isBold={true}
                />
                <Article 
                    titulo={"Fuente de Voltaje: Controla el Flujo de Energía"}
                    contenido={"Adéntrate en el mundo de la regulación de energía con las fuentes de voltaje. Desde proyectos electrónicos simples hasta experimentos avanzados, estas fuentes te permiten ajustar y suministrar voltajes específicos. Aprende a establecer voltajes constantes o variables, y descubre cómo limitar corrientes para evitar daños. Con una fuente de voltaje a tu disposición, podrás alimentar tus circuitos y dispositivos con precisión y confiabilidad."}
                    src={"../src/assets/fuente_de_voltaje.png"} 
                    alt={"Fuente de voltaje"}
                    side={"right"}
                />
            </section>
            <section className="container">
                <LargeArticle 
                    titulo={"¡Descubre la Maravilla del Osciloscopio en 3D!"}
                    contenido={"Sumérgete en una experiencia única mientras desvelamos el mundo del osciloscopio a través de un modelado en 3D sorprendentemente realista."}
                    src={"src/assets/osciloscopio.glb"}
                    img={"../src/assets/osciloscopio.png"}
                    alt={"Osciloscopio"}
                    side={"left"}
                    bgColor={"#D20B0B"}
                    textColor={"#FFFFFF"}
                />
                <LargeArticle 
                    titulo={" ¡Descubre la Fuente de Voltaje en 3D!"}
                    contenido={"Te damos la bienvenida a un viaje tridimensional hacia el mundo de la fuente de voltaje. En este fascinante recorrido, podrás explorar cada componente y rincón de esta herramienta que desempeña un papel fundamental en la alimentación y el funcionamiento de dispositivos electrónicos."}
                    src={"src/assets/fuente_de_voltaje.glb"}
                    img={"../src/assets/fuente_de_voltaje.png"}
                    alt={"Fuente de voltaje"}
                    side={"right"}
                    bgColor={"#F4F4F4"}
                    textColor={"#000000"}
                />
            </section>
            <Section
                texto={"Mantente actualizado con las últimas innovaciones y avances en la tecnología biomédica mientras continuamos compartiendo contenido relevante y apasionante."}
                backgroundColor={"#F4F4F4"}
            />
            <Footer />
        </>
    );
}