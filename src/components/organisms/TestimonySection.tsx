import WomanReading from '@/assets/woman-reading.png'
import TestimonyCard from "../molecules/TestimonyCard";

export default function TestimonySection () {
    return (
        <section className="flex flex-col gap-8 p-16 bg-white">
            <h3 className="text-4xl text-gray-600 font-bold">Testemunhos</h3>
            <p className="text-lg max-w-2xl">
                Na Cantinho do Céu, as histórias de nossos alunos e pais refletem o impacto positivo da nossa escola. Aqui, compartilhamos relatos inspiradores que destacam o aprendizado e as transformações que ocorrem em nosso ambiente acolhedor.
            </p>
            <div className="flex gap-8 overflow-x-auto">
                <TestimonyCard title="title" description="description" image={WomanReading} />
                <TestimonyCard title="title" description="description" image={WomanReading} />
                <TestimonyCard title="title" description="description" image={WomanReading} />
                <TestimonyCard title="title" description="description" image={WomanReading} />
            </div>
        </section>
    )
}