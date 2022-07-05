import Footer from "../footer/footer";
import Esquema_Glass from '../img/glass-esquema-marcado.jpg';
import Tela from '../img/det-tela.jpg';
import Camera from '../img/det-camera.jpg';
import Sensores from '../img/det-touch.jpg';
import Sets from '../img/det-bateria.jpg';
import Mao from '../img/mao.png';
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
                    <img src={Esquema_Glass} alt="" />

                    <div className="infos">
                        
                        <div className="dets">
                            <h3>Clique sobre as áreas destacadas em vermelho</h3>
                            <figure>
                                <img src={Mao} alt="" />
                            </figure>
                        </div>

                        <div className="dets">
                            <h3>Tela</h3>
                            <h4>Como o mundo vai aparecer</h4>
                            <p>De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça.</p>
                            <img src={Tela} alt="" />
                        </div>

                        <div className="dets">
                            <h3>Câmera</h3>
                            <h4>Filme e fotografe a qualquer momento</h4>
                            <img src={Camera} alt="" />
                            <p>Com o Google Glass será possível tirar fotos com até 5 megapixels e gravar vídeos com 720 linhas de resolução. Os primeiros vídeos e fotos capturados com o aparelho já começaram a circular pela rede, mas até agora ninguém tem muitas informações técnicas.</p>
                        </div>

                        <div className="dets">
                            <h3>Sensores</h3>
                            <h4>A sensibilidade de um simples óculos</h4>
                            <p>Quem pensa que para comandar o Google Glass vai precisar de teclado e mouse, se engana redondamente. O dispositivo vem com vários tipos de sensores e microfones embutidos. Assim, para dar um comando, basta falar ou passar o dedo na lateral do óculos.</p>
                            <img src={Sensores} alt="" />
                        </div>

                        <div className="dets">
                            <h3>Bateria e Gadgets</h3>
                            <h4>Quais são os dispositivos que complementam o Glass</h4>
                            <img src={Sets} alt="" />
                            <p>Segundo a própria Google, o Glass virá com uma bateria que tem autonomia suficiente para durar um dia inteiro. Apenas algumas atividades como videoconferências e longas filmagens vão exigir um pouco mais. Além disso ele vem com WiFi, Bluetooth, 3G/4G e muito mais.</p>
                        </div>

                    </div>
                </figure>
            </p>
            <Footer />
        </>
    );
}
export default Specs;