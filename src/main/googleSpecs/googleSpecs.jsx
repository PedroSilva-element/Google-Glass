import Tela from '../../img/det-tela.jpg';
import Camera from '../../img/det-camera.jpg';
import Sensores from '../../img/det-touch.jpg';
import Sets from '../../img/det-bateria.jpg';
import Mao from '../../img/mao.png';

const GoogleSpecs = () => {
    return (
        <section className="googleSpecs">

            <article className="blocks">
                <h3>Clique sobre as áreas destacadas em vermelho</h3>
                <figure>
                    <img src={Mao} alt=""/>
                </figure>
            </article>

            <article className="blocks">
                <header>
                    <hgroup>
                        <h3 id='tela'>Tela</h3>
                        <h4>Como o mundo vai aparecer</h4>
                    </hgroup>
                </header>
                <p>De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça.</p>
                <img src={Tela} alt=""/>
            </article>

            <article className="blocks">
                <header>
                    <hgroup>
                        <a href='#'><h3 id='camera'>Câmera</h3></a>
                        <h4>Filme e fotografe a qualquer momento</h4>
                    </hgroup>
                </header>

                <img src={Camera} alt="" className='img-dir'/>
                <p>Com o Google Glass será possível tirar fotos com até 5 megapixels e gravar vídeos com 720 linhas de resolução. Os primeiros vídeos e fotos capturados com o aparelho já começaram a circular pela rede, mas até agora ninguém tem muitas informações técnicas.</p>
            </article>

            <article className="blocks">
                <header>
                    <hgroup>
                        <h3>Sensores</h3>
                        <h4>A sensibilidade de um simples óculos</h4>
                    </hgroup>
                </header>
                <p>Quem pensa que para comandar o Google Glass vai precisar de teclado e mouse, se engana redondamente. O dispositivo vem com vários tipos de sensores e microfones embutidos. Assim, para dar um comando, basta falar ou passar o dedo na lateral do óculos.</p>
                <img src={Sensores} alt="sensores do Google glass" />
            </article>

            <article className="blocks">
                <header>
                    <hgroup>
                        <h3>Bateria e Gadgets</h3>
                        <h4>Quais são os dispositivos que complementam o Glass</h4>
                    </hgroup>
                </header>
                <img src={Sets} alt="" className='img-dir'/>
                <p>Segundo a própria Google, o Glass virá com uma bateria que tem autonomia suficiente para durar um dia inteiro. Apenas algumas atividades como videoconferências e longas filmagens vão exigir um pouco mais. Além disso ele vem com WiFi, Bluetooth, 3G/4G e muito mais.</p>
            </article>

        </section>
    );
}
export default GoogleSpecs;