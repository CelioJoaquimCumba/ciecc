import EducationCard from "../molecules/EducationCard";
import Children from '@/assets/children.png'

export default function EducationSection () {
    return (
        <section className="flex flex-col gap-8 p-16 bg-white">
            <h3 className="text-4xl text-gray-600 font-bold">Nosso Ensino</h3>
            <p className="text-lg max-w-2xl">
                Acompanhamos o seu filho desde os primeiros passos até a adolescência, oferecendo suporte em cada fase de sua jornada, para que ele cresça com confiança, valores e habilidades para enfrentar o futuro.
            </p>
            <div className="grid grid-cols-3 gap-8">
                <EducationCard title="title" description="description" image={Children} />
                <EducationCard title="title" description="description" image={Children} />
                <EducationCard title="title" description="description" image={Children} />
            </div>
        </section>
    )
}