import Footer from "../footer/footer";
import GoogleSpecs from "./googleSpecs/googleSpecs.jsx";
import Esquema_Glass from '../img/glass-esquema-marcado.jpg';

const Specs = () => {
    return (
        <>
            <p>
                <hgroup className="hgroupMain">
                    <h3>Glass - specificações</h3>
                    <h1>Raio-X no Google Glass</h1>
                    <h4>por Gustavo Guanabara Atualizado em 01/Maio/2013</h4>
                </hgroup>
                <p>Clique em qualquer área destacada da imagem para ter mais informações sobre os recursos do Google Glass. Qualquer ponto vermelho vai te levar a um lugar cheio de novas informações.</p>

                <figure className="glassInfoBlock">
                    <img src={Esquema_Glass} alt="Esquema Google Glass" useMap="#googleSpecsMap" />
                    <map name="googleSpecsMap">
                        <area shape="rect" coords="183,219,267,241" href="./googleSpecs/googleSpecs.jsx#tela" alt="Tela do Glass" />
                        <area shape="circle" coords="145,232,26,24" href="./googleSpecs/googleSpecs.jsx#camera" alt="Camera do Glass"/>
                    </map>
                </figure>
                <GoogleSpecs />
            </p>
            <Footer />
        </>
    );
}
export default Specs;