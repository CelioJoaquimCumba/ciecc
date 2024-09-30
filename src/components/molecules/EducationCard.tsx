import { Phone } from "lucide-react"
import { Button } from "../atoms/button"

export default function EducationCard(props: {
    title: string,
    description: string,
    image: string
}) {
    const { title, description, image } = props
    return (
        <div className="flex flex-col border border-gray-300">
            <img src={image} alt="image" className="aspect-square w-full" />
            <div className="flex flex-col gap-3 p-4">
                <h4 className="text-xl font-bold">{title}</h4>
                <p>{description}</p>
                <Button variant={'outline'} className="rounded-none w-fit">
                    <Phone />
                    <p>Contacte-nos</p>
                </Button>
            </div>
        </div>
    )
}