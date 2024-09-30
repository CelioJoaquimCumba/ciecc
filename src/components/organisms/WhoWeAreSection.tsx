import BoyStudying from '@/assets/boy-studying.png'
export default function WhoWeAreSection () {
    return (
        <section className="flex flex-col gap-8 p-16 bg-white">
            <div className="flex flex-col gap-3">
                <h3 className="text-4xl text-gray-600 font-bold">Quem somos?</h3>
                <p className="text-lg max-w-2xl">
                    Somos o Cantinho do Céu, uma comunidade educativa que valoriza a formação integral dos alunos, combinando ensino de qualidade com valores éticos e espirituais para formar cidadãos conscientes e transformadores.
                </p>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 gap-3'>
                <img  src={BoyStudying} alt="boy"/>
                <img src={BoyStudying} alt="boy" />
                <img src={BoyStudying} alt="boy"/>
            </div>
        </section>
    )
}