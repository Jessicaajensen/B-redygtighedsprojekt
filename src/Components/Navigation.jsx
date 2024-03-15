import {Navlink} from "react-router-dom"
export default function Navigation ({navn}) {

    return (
        <nav>
            <Navlink to="/"Forside> Forside </Navlink>
            <Navlink to="/"Kontakt> Kontakt </Navlink>
            <Navlink to="/"Omos> Om os </Navlink>
            <Navlink to="/"Produkt> Produkt </Navlink>
            
        </nav>

    )
}