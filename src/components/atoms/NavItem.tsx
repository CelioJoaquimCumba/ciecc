export default function NavItem (props: {
    label: string,
    selected?: boolean
}) {
    const { label, selected = false } = props
    return (
        <li className={`flex items-center justify-center px-8 py-4 whitespace-nowrap ${selected ? 'bg-blue-800 text-white cursor-not-allowed' : 'hover:bg-slate-200 cursor-pointer'}`}>{label}</li>
    )
}