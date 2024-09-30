import { Play } from "lucide-react"
import { Button } from "../atoms/button"

export default function TestimonyCard(props: {
    title: string,
    description: string,
    image: string
}) {
    const { title, description, image } = props
    return (
        <div className="flex flex-col justify-end gap-3 p-4 aspect-[3/4] min-w-80 object-cover bg-center bg-cover text-white items-center" style={{ backgroundImage: `url(${image})` }}>
            <h4 className="text-xl font-bold">{title}</h4>
            <p>{description}</p>
            <Button variant={'secondary'} className="rounded-none w-fit">
                <Play />
                <p>Play Video</p>
            </Button>
        </div>
    )
}