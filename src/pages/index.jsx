import Header from "../components/header";
import SelectInput from "../components/select-input";
import { SearchIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import JobCard from "../components/job-card";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getJobs } from "../services/api";


const Index = () => {

  const { data: jobs } = useSuspenseQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
    select: (data) => data.slice(1,11)
  }) 

  console.log(jobs);

  return (
    <main className="bg-gray-200 min-h-screen">
      <section className="bg-white pb-5">
        <Header />

        {/* Banner */}
        <div className="px-5">
          <div
            className="w-full h-52 bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg
       flex justify-between items-center"
          >
            <div className="ml-12 text-white space-y-2">
              <h2 className="text-4xl font-semibold">
                Looking for a new opportunity?
              </h2>
              <p className="text-gray-200">
                Browse Job Entries and optimize your CV with cvIntel
              </p>
            </div>

            <div>
              <img src="/resumes.svg" alt="" className="h-[150px] w-[300px]" />
            </div>
          </div>
        </div>

        {/* Search Filter */}
        <div className="flex items-center gap-4 mt-6 justify-center">
          <div className="flex items-center gap-3 border-2 border-blue-500 p-2">
            <SearchIcon className="text-gray-500 size-6" />
            <input
              placeholder="search for job"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>
          <SelectInput
            placeholder="Job location"
            label="Location"
            options={[
              { value: "us", label: "United States" },
              { value: "canada", label: "Canada" },
              { value: "france", label: "France" },
            ]}
          />
          <SelectInput
            placeholder="Job type"
            label="type"
            options={[
              { value: "remote", label: "Remote" },
              { value: "onsite", label: "Onsite" },
              { value: "hybrid", label: "Hybrid" },
            ]}
          />
          <SelectInput
            placeholder="Experience level"
            label="experience"
            options={[
              { value: "fresher", label: "Fresher" },
              { value: "intermediate", label: "Intermediate" },
              { value: "expert", label: "Expert" },
            ]}
          />

          <Button className="rounded-none px-4">Filter</Button>
        </div>
      </section>

      {/* Jobs Display */}
      <section className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          jobs.map((job) => 
          <JobCard 
            job={job}
            key={job.id}
          />
        )
        }
      </section>
    </main>
  );
};

export default Index;
