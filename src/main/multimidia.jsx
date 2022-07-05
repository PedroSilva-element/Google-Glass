import Footer from "../footer/footer";
import RadioTv from '../img/radio-tv.png';
import VideoMini03 from '../_media/getting-started.mp4';
import LoversBibio from '../_media/2009-lovers-carvings-bibio.mp3';

const Multimidia = () => {
    return (
        <>
            <p>
                <hgroup className="hgroupMain">
                    <h3>Glass - Multimídia</h3>
                    <h1>Sons e Vídeos</h1>
                    <h4>por Gustavo Guanabara</h4>
                <h5>Atualizado em 01/Maio/2013</h5>
                </hgroup>
                <h2>Áudio e Vídeo</h2>
                <figure>
                    <img src={RadioTv} alt="" />
                </figure>
                <video src={VideoMini03} controls className="videoMini03"></video>
                <audio src={LoversBibio} controls className="audioLovers"></audio>
            </p>
            <Footer />
        </>
    );
}
export default Multimidia;