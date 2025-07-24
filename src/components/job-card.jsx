import {Badge} from "../components/ui/badge"
import { Bookmark, BookmarkCheck } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

const JobCard = ({job}) => {

  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="w-[300px] min-h-[250px] bg-white shadow-md border border-gray-400 rounded-xl p-6">

      {/* Logo and company name */}
        <div className="flex w-full items-center gap-3">
          <img src={job.company_logo} alt={job.company} className="w-[60px] text-xs" />

          <div className="space-y-2">
            <p2 className="font-semibold">{job.position}</p2>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span>Tokari</span>
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <span>Abraham Bishop</span>
            </div>
          </div>
        </div>

      {/* Badges - Job tags */}
        <div className="my-2 space-x-2">
          {
            job.tags.slice(0, 3).map((tag, index) => <Badge 
            key={index}
            className="bg-gradient-to-r from-blue-600 to-blue-800">
              {tag}
            </Badge>)
          }
        </div>

        {/* Job desc */}
        <p className="text-xs">
          {
            "We are looking for a Senior Software Engineer to join our team. You will be responsible for developing high-quality software solutions, collaborating with cross-functional teams, and mentoring junior developers. If you have a passion for coding and problem-solving, we want to hear from you!".substring(0, 100) + "..."
          }
        </p>

        {/* time and applicants */}
        <div className="my-3 flex justify-between">
          <div className="flex items-center gap-1 text-xs">
            <p className="text-gray-500">2 Days ago</p>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <p className="font-semibold">40 Applicants</p>
          </div>

          <div onClick={() => setIsBookmarked(prevState => !prevState)}>
            {isBookmarked ? <BookmarkCheck /> : <Bookmark />}
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-5 mt-3">
          <Button className="btn">Apply</Button>
          <Button className="btn">View Details</Button>
        </div>

    </div>

  )
}

export default JobCard