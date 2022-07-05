import Footer from "../footer/footer";

import Galeria01 from '../img/galeria-01.jpg';
import Galeria02 from '../img/galeria-02.jpg';
import Galeria03 from '../img/galeria-03.jpg';
import Galeria04 from '../img/galeria-04.jpg';
import Galeria05 from '../img/galeria-05.jpg';
import Galeria06 from '../img/galeria-06.jpg';

const Image = () => {
    return (
        <>
            <p>
                <hgroup className="hgroupMain">
                    <h3>Glass - Fotos</h3>
                    <h1>Galeria de Imagens do Google Glass</h1>
                    <h4>por Gustavo Guanabara Atualizado em 01/Maio/2013</h4>
                </hgroup>
                <p>Veja na nossa galeria de fotos várias belas imagens que mostram algumas das principais características do Google Glass, como recursos e propriedades que estão impressionando o mundo inteiro. Basta passar o mouse sobre uma das fotos para ver uma versão ampliada e com uma breve descrição.</p>

                <figure className="grid-images">
                    <img src={Galeria01} alt="Agenda e lembretes" />
                    <img src={Galeria02} alt="Sergey Brin usando o Glass" />
                    <img src={Galeria03} alt="Leve e compacto" />
                    <img src={Galeria04} alt='Sensação de uma tela de 50"' />
                    <img src={Galeria05} alt="Vários tipos de lente" />
                    <img src={Galeria06} alt="Informações importantes" />
                </figure>

            </p>
            <Footer />
        </>

    );
}
export default Image;