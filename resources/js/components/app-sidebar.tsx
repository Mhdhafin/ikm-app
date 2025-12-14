

export default function Appsidebar () {

// const router = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' },
// ]

return (
<>
    <nav className="flex flex-col bg-gray-800 p-4">
        <h1 className="text-white">Appsidebar</h1>
        <ul className="flex flex-col mt-4">
            <li className="py-2">
                <a href="" className="text-white">Home</a>
            </li>
            <li className="py-2">
                <a href="/about" className="text-white">About</a>
            </li>
            <li className="py-2">
                <a href="/contact" className="text-white">Contact</a>
            </li>
        </ul>
    </nav>
</>
)
}
