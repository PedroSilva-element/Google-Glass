import How_its_feels from '../_media/how-it-feels.mp4';

const Aside = () => {
    return (
        <aside className="aside">
            <h1>Outras Notícias</h1>
            
            <h2>Vídeo mais recente</h2>
            <video src={How_its_feels} controls className='oneDay'>
            </video>
            
            <h3>Novidades no Glass</h3>
            <p>O Google enfim revelou as especificações completas do Google Glass, e com ele uma surpresa ainda inédita no mercado: a gigante das buscas usará um sistema de áudio baseado na transdução por condução. Através das hastes dos óculos, o som será transmitido para o ouvido do usuário por meio de microvibrações em determinados ossos de sua cabeça, sem usar nenhum tipo de alto-falante.</p>
            <p>Além da surpresa do áudio, a tela montada a frente do olho do usuário também chamou atenção. Serão 640 x 360 pixels de resolução que, em proporção, equivaleria a um monitor de 25 polegadas de alta definição colocado a 2,5 metros de distância do espectador.</p>
        </aside>
    );
}
export default Aside;