import Logo from '@/assets/logo.png'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
export default function Footer () {
    return (
        <footer className="flex flex-col gap-6 px-16 py-6 border-t border-gray-300 bg-blue-800 text-white">
            <img src={Logo} alt="CIEEC logo" className="size-12"/>
            <p>CIEEC - CENTRO INFANTIL & EXTERNATO CANTINHO DO CÉU</p>
            <hr />
            <div className='flex justify-between gap-8'>
                <p>Matola J, Av.Samora Machel nr 12,326 +258 82 3769220</p>
                <ul className='flex gap-2'>
                    <li className='flex items-center justify-center text-blue-800 bg-white rounded-full p-2'>
                        <a href='https://www.instagram.com/cieec.matola/'>
                            <Instagram />
                        </a>
                    </li>
                    <li className='flex items-center justify-center text-blue-800 bg-white rounded-full p-2'>
                        <a href='https://www.linkedin.com/company/cieec/'>
                            <Linkedin />
                        </a>
                    </li>
                    <li className='flex items-center justify-center text-blue-800 bg-white rounded-full p-2'>
                        <a href='https://www.facebook.com/cieec.matola'>
                            <Facebook />
                        </a>
                    </li>
                </ul>
            </div>
            <p className='text-xs italic'>Made by Célio Joaquim Cumba</p>
        </footer>
    )
}