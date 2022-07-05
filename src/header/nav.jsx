import { Link } from "react-router-dom";

const Nav = (props) => {

    return (
        <nav className="nav">
            <h1>Menu Principal</h1>
            <ul className="ul" onMouseOut={props.Out}>
                <Link to={"/"} onMouseMove={props.logo}><li>Home</li></Link>
                <Link to={"/specs"} onMouseMove={props.logo01}><li>Especificações</li></Link>
                <Link to={"/images"} onMouseMove={props.logo02}><li>Fotos</li></Link>
                <Link to={"/multimidia"} onMouseMove={props.logo03}><li>Multimídia </li></Link>
                <Link to={"/contact"} onMouseMove={props.logo04}><li>Fale conosco</li></Link>
            </ul>
        </nav>
    );
}
export default Nav;