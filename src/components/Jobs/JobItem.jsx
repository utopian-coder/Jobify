const JobItem = ({ jobDetails }) => {
  const { logo, name, time, description, title, location, pay } = jobDetails;
  return (
    <article>
      <div>
        <img src={logo} alt='company logo' />
        <span>{name}</span>
      </div>
      <details>
        <summary>Job Description</summary>
        <p>{description}</p>
      </details>
      <div>
        <div>{title}</div>
        <div>{location}</div>
        <div>{pay} per month</div>
      </div>
    </article>
  );
};

export default JobItem;
