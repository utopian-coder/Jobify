import "./Jobitem.css";

import { useState, useEffect } from "react";

const getRelativeDate = (datePosted) => {
  const now = new Date();
  const difference = now - datePosted;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneMonth = 30 * oneDay;
  const oneYear = 365 * oneDay;

  if (difference < oneDay) {
    return "Today";
  } else if (difference < oneMonth) {
    const daysAgo = Math.floor(difference / oneDay);
    return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  } else if (difference < oneYear) {
    const monthsAgo = Math.floor(difference / oneMonth);
    return `${monthsAgo} month${monthsAgo === 1 ? "" : "s"} ago`;
  } else {
    const yearsAgo = Math.floor(difference / oneYear);
    return `${yearsAgo} year${yearsAgo === 1 ? "" : "s"} ago`;
  }
};

const JobItem = ({ jobDetails }) => {
  const [relativeDate, setRelativeDate] = useState("");

  useEffect(() => {
    const datePosted = new Date(jobDetails.datePosted);
    const relativeDateStr = getRelativeDate(datePosted);
    setRelativeDate(relativeDateStr);
  }, [jobDetails.datePosted]);

  return (
    <article className="job-item">
      <div className="company-info">
        <div className="company-logo-name">
          <img
            className="company-logo"
            src={jobDetails.logo}
            alt="company logo"
          />
          <span className="company-name">{jobDetails.name}</span>
        </div>
        <p className="job-date">🕑 {relativeDate}</p>{" "}
      </div>

      <details className="job-details">
        <summary className="job-description-header">Job Description</summary>
        <p className="job-description-text">{jobDetails.description}</p>
      </details>
      <hr />
      <div className="job-info">
        <div className="job-title">{jobDetails.positionTitle}</div>

        <div className="job-location">📍 {jobDetails.location}</div>
        <div className="job-pay">💲{jobDetails.pay} month</div>
        <div className="job-type">⌛ {jobDetails.type}</div>
      </div>
    </article>
  );
};

export default JobItem;
