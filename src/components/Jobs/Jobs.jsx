import { useState } from "react";
import JobSearchOptions from "./JobSearchOptions";
import JobItem from "./JobItem";

const Jobs = ({ demoJobs }) => {
  const [selectedDate, setSelectedDate] = useState("any-date");
  const [selectedCountry, setSelectedCountry] = useState("any-country");
  const [jobType, setJobType] = useState("any-time");
  const [searchInput, setSearchInput] = useState("");
  const filterJobsByDate = (jobs) => {
    const currentDate = new Date();

    switch (selectedDate) {
      case "any-date":
        return jobs;
      case "past-month":
        return jobs.filter(
          (job) =>
            job.datePosted >= new Date(currentDate - 30 * 24 * 60 * 60 * 1000)
        );
      case "past-week":
        return jobs.filter(
          (job) =>
            job.datePosted >= new Date(currentDate - 7 * 24 * 60 * 60 * 1000)
        );
      case "past-24-hours":
        return jobs.filter(
          (job) => job.datePosted >= new Date(currentDate - 24 * 60 * 60 * 1000)
        );
      default:
        return jobs;
    }
  };
  const filterJobsByTitle = (jobs) => {
    if (!searchInput || searchInput.trim() === "") {
      return jobs;
    } else {
      const searchTerm = searchInput.toLowerCase().trim();
      return jobs.filter((job) => job.title.toLowerCase().includes(searchTerm));
    }
  };
  const filterJobsByCountry = (jobs) => {
    if (selectedCountry === "any-country") {
      return jobs;
    } else {
      return jobs.filter((job) => job.location === selectedCountry);
    }
  };

  const filterJobsByType = (jobs) => {
    if (jobType === "any-time") {
      return jobs;
    } else {
      return jobs.filter((job) => job.type === jobType);
    }
  };
  const filteredByDate = filterJobsByDate(demoJobs);
  const filteredByCountry = filterJobsByCountry(filteredByDate);
  const filteredByJobTitle = filterJobsByTitle(filteredByCountry);
  const filteredAndSorted = filterJobsByType(filteredByJobTitle);

  return (
    <section>
      <h2>Recent Jobs</h2>
      <JobSearchOptions
        onSelectDate={setSelectedDate}
        onSelectCountry={setSelectedCountry}
        onJobType={setJobType}
        onsetSearchInput={setSearchInput}
      />
      {filteredAndSorted.map((job) => (
        <JobItem key={job.id} jobDetails={job} />
      ))}
    </section>
  );
};

export default Jobs;
