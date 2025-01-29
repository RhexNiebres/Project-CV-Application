import '../styles/educationoutput.css'
export default function PracticalFormOutput({ formData }) {
    const { companyName, position, startDate, endDate } = formData;
  
    return (
      <div className="output">
        <h3>Practical Experience</h3>
        <p>
          Company Name: <b>{companyName}</b>
        </p>
        <p>
          Position: <b>{position}</b>
        </p>
        <p>
          Start Date: <b>{startDate}</b>
        </p>
        <p>
          End Date: <b>{endDate}</b>
        </p>
      </div>
    );
  }
  