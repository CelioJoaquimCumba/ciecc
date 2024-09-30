import HeroBg from '@/assets/hero-bg.png'
import {Mail} from 'lucide-react'
import { Button } from '../atoms/button'
export default function HeroSection () {
    return (
        <section className='flex flex-col items-center justify-center h-screen bg-cover bg-center gap-3' style={{ backgroundImage: `url(${HeroBg})` }}>
            <h3 className='text-5xl text-white font-bold text-center'>Bem-vindo ao Centro Infantil e Externato Cantinho do Céu</h3>
            <p className='text-2xl text-white'>Onde cada sonho começa a tomar forma.</p>
            <Button variant={'outline'} className='rounded-none'>
                <Mail/>
                Contacte-nos
            </Button>
        </section>
    )
}