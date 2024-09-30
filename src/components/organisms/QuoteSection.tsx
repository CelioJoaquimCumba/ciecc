import Guy from '@/assets/guy.png'
export default function QuoteSection () {
    return (
        <section className="flex flex-col items-center justify-center px-16 py-40 bg-white">
            <img src={Guy} alt='Guy' className="size-24 rounded-full object-cover"/>
            <p className='text-lg text-gray-600'>John Doe</p>
            <p className="text-lg text-gray-600 text-center">"Aprender com excelência é cultivar o conhecimento que floresce em cada coração."</p>
        </section>
    )
}