import "./Jobitem.css";
import moment from "moment";

const JobItem = ({ jobDetails }) => {
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
        <p className="job-date">🕑 {moment(jobDetails.created_at).fromNow()}</p>{" "}
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
