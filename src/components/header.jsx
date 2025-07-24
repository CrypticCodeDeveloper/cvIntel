import { Briefcase } from "lucide-react"
const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 '>
        <div className="flex items-center gap-3">
            <Briefcase className="text-blue-700 size-8" />
            <h1 className="text-2xl font-bold text-blue-700">cvIntel</h1>
        </div>

        <div className="flex justify-between items-center gap-5">
                <a href="/" className="text-gray-700 hover:text-blue-500">Jobs</a>
                <a href="/about" className="text-gray-700 hover:text-blue-500">Optimize</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>

        <div>
            <p className="text-gray-600">Your personal CV intelligence platform</p>
        </div>
    </div>
  )
}

export default Header