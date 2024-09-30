
import Eating from '@/assets/eating.png'
import Transporting from '@/assets/transporting.png'
export default function ServicesSection () {
    return (
        <section className="flex flex-col gap-8 p-16 bg-white">
            <h3 className="text-4xl text-gray-600 font-bold">Serviços Complementares</h3>
            <p className="text-lg max-w-2xl">
                Oferecemos serviços que apoiam o desenvolvimento integral dos alunos. Nossa nutrição saudável garante refeições balanceadas, e o transporte seguro e confortável facilita o deslocamento entre casa e escola, promovendo um ambiente propício para o aprendizado.
            </p>
            <div className="flex flex-col gap-10">
                <article className="bg-blue-800 grid grid-cols-2 gap-8">
                    <img src={Eating} alt="" className='h-full object-cover' />
                    <div className="flex flex-col px-4 py-8">
                        <h5 className="text-3xl font-bold text-white">Nutrição</h5>
                        <p className='text-white'>Tendo em atenção as necessidades do nosso público-alvo, confeccionamos alimentos saudáveis e ricos em nutrientes essenciais para o bom desempenho académico dos nossos alunos. Nossa prioridade é oferecer refeições que contribuam para o desenvolvimento físico e cognitivo, promovendo o sucesso estudantil.</p>
                    </div>
                </article>

                <article className="bg-blue-800 grid grid-cols-2 gap-8">
                    <div className="flex flex-col px-4 py-8">
                        <h5 className="text-3xl font-bold text-white">Transporte</h5>
                        <p className='text-white'>Nossa missão é transportar os alunos com segurança e comodidade. Mais do que um serviço, somos uma extensão do ambiente escolar, reforçando a doutrina do "saber saber, saber ser e saber estar". Garantimos que o trajeto entre casa e escola seja seguro, confortável e alinhado com os valores que ensinamos em sala de aula.</p>
                    </div>
                    <img src={Transporting} alt="" className='h-full object-cover' />
                </article>

            </div>
        </section>
    )
}