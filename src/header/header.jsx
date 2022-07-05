import Nav from "./nav";
import Hgroup from "./hgroup";
import { useState } from "react";

import Black_Glasses from '../img/glass-oculos-preto-peq.png';
import Home from '../img/home.png';
import Specs from '../img/especificacoes.png';
import Imagens from '../img/fotos.png';
import Multimidia from '../img/multimidia.png';
import Contato from '../img/contato.png';

const Header = () => {

    const [image, setImage] = useState(Home);
    const [image01, setImage01] = useState(Specs);
    const [image02, setImage02] = useState(Imagens);
    const [image03, setImage03] = useState(Multimidia);
    const [image04, setImage04] = useState(Contato);
    const [image05, setImage05] = useState(Black_Glasses);
    const [global, setGlobal] = useState(image, image01, image02, image03, image04, image05);

    const idMove = () => {
        if (global) {
            return <img src={global} alt="" />
        }
    };

    return (
        <header className="header">
            <Nav
                logo={() => setGlobal(image)}
                logo01={() => setGlobal(image01)}
                logo02={() => setGlobal(image02)}
                logo03={() => setGlobal(image03)}
                logo04={() => setGlobal(image04)}
                Out={()=> setGlobal(image05)}
            />
            <Hgroup />
            <figure className="figure">
                {idMove()}
            </figure>
        </header>
    );
}
export default Header;