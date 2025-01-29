import '../styles/educationoutput.css'
export default function EducationFormOutput({ formData }) {
    const { schoolName, degree, date } = formData;
  
    return (
      <div className="output">
        <h3>Education</h3>
        <p>
          School Name: <b>{schoolName}</b>
        </p>
        <p>
          Degree: <b>{degree}</b>
        </p>
        <p>
          Date: <b>{date}</b>
        </p>
      </div>
    );
  }
  