import { Mail } from "lucide-react";
import { Button } from "../atoms/button";
import NavItem from "../atoms/NavItem";
import Logo from '@/assets/logo.png'

export default function Navbar () {
    return (
        <nav className="flex justify-between px-16 py-6 bg-white w-full border border-gray-300 items-center">
            <div className="flex gap-3 items-center">
                <img src={Logo} alt="CIEEC logo" className="size-12"/>
                <p className="text-base">CENTRO INFANTIL & EXTERNATO CANTINHO DO CÉU</p>
            </div>
            <ul className="flex items-center">
                <NavItem label="Início" selected/>
                <NavItem label="Sobre nós"/>
                <NavItem label="ALUMNI"/>
                <NavItem label="Notícias"/>
                <NavItem label="Contacto"/>
            </ul>
            <Button className="rounded-none">
                <Mail />
                Contacte-nos
            </Button>
        </nav>
    )
}