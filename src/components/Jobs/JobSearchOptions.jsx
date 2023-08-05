import { CiSearch } from "react-icons/ci";

const JobSearchOptions = () => {
  return (
    <div>
      <div>
        <input type='text' placeholder='Search' name='job' />
        <CiSearch />
      </div>
      <button>sort by time</button>
      <button>country</button>
    </div>
  );
};

export default JobSearchOptions;
