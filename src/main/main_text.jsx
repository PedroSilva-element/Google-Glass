import Quadro_homem_mulher from '../img/glass-quadro-homem-mulher.jpg';
import One_Day from '../_media/one-day.mp4';


const Maintext = () => {
    return (
        <main className='main'>
            <hgroup className='hgroupMain'>
                <h3>Tecnologia - Inovações</h3>
                <h1>Saiba tudo sobre o Google Glass</h1>
                <h4>por Gustavo Guanabara</h4>
                <h5>Atualizado em 23/Abril/2013</h5>
            </hgroup>

            <h2>O que é</h2>
            <p>
                O Google Glass é um acessório em forma de óculos que possibilita a interação dos usuários com diversos conteúdos em realidade aumentada. Também chamado de Project Glass, o eletrônico é capaz de tirar fotos a partir de comandos de voz, enviar mensagens instantâneas e realizar vídeoconferências. Seu lançamento está previsto para 2014, e seu preço deve ser de US$ 1,5 mil. Atualmente o Google Glass encontra-se em fase de testes e já possui um vídeo totalmente gravado com o dispositivo. Além disso, a companhia de buscas registrou novas patentes anti-furto e de desbloqueio de tela para o acessório.</p>
                <figure className='quadro-homem-mulher'>
                    <img src={Quadro_homem_mulher} alt="Quadro_homem_mulher" />
                </figure>
            

            <h2>Data de lançamento</h2>
            <p>Não há uma data específica e oficial para o dispositivo ser lançado, ainda. Pode ser que ele esteja disponível em demonstrações a partir de 2013, mas seu lançamento para as lojas fica para, pelo menos, 2014.</p>

            <h2>Especificações Técnicas</h2>
            <table className='table'>
                <caption>Tabela Técnica do Google Glass</caption>
                <caption className='descriptionTabble'>Mar/2013</caption>
                <tr>
                    <td className='title'>Tela</td>
                    <td className='content'>Resolução equivalente a tela de 25"</td>
                </tr>
                <tr>
                    <td className='title' rowSpan={2}>Camera</td>
                    <td className='content'>5MP para fotos</td>
                </tr>
                <tr><td className='content'>720p para vídeos</td></tr>
                <tr>
                    <td className='title' rowSpan={2}>Conectividade</td>
                    <td className='content'>Wi-Fi</td>
                </tr>
                <tr><td className='content'>Bluetooth</td></tr>
                <tr>
                    <td className='title'>Memória Interna</td>
                    <td className='content'>12GB</td>
                </tr>
            </table>

            <h2>Como funciona</h2>
            <p>De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça.</p>

            <h2>O que você pode fazer com o Google Glasses</h2>
            <p>O vídeo de divulgação do Google mostra que você pode se transformar em uma espécie de “super-humano”, já que o aparelho pode indicar a quantos metros você está de seu destino, se o metrô está aberto ou fechado, mostrar o clima, agenda e até mesmo permitir que você marque encontros apenas com comandos de voz.</p>
            
            <video src={One_Day} controls className='oneDay'>
            
            </video>
        </main>
    );
}
export default Maintext;