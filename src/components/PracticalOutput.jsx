import '../styles/educationoutput.css'
export default function PracticalFormOutput({ formData }) {
    const { companyName, position, startDate, endDate } = formData;

    const handlePrint = () => {
      window.print();
    };
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
          Date: From <b>{startDate} To {endDate}</b>
        </p>
        <button className="print" onClick={handlePrint}>Print CV</button>
      </div>
    );
  }
  