import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import JobDescriptionPreview from "./job-desc-preview";

const JobDetailsModal = ({ job }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="btn">View Details</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[80%] max-h-[90vh] overflow-y-auto rounded-none">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={job.company_logo}
              alt={job.company}
              className="w-[90px] text-xs"
            />
            <DialogTitle>{job.position}</DialogTitle>
          </div>

          {/* buttons */}
          <div className="mb-3">
            <Button
              className="btn mr-2"
              onClick={() => window.open(job.url, "_blank")}
            >
              Visit Company
            </Button>
            <Button
              className="btn"
              onClick={() => window.open(job.apply_url, "_blank")}
            >
              Apply Now
            </Button>
          </div>

          <DialogDescription>
            <JobDescriptionPreview description={job.description} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal;
