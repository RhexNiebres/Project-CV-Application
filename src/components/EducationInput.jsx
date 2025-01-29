
import '../styles/educationinput.css';

export default function EducationForm({ formData, setFormData }) {
  const { schoolName, degree, date } = formData;

  // Handle updates to the inputs
  function handleSchoolNameChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      schoolName: e.target.value,
    }));
  }

  function handleDegreeChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      degree: e.target.value,
    }));
  }

  function handleDateChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      date: e.target.value,
    }));
  }

  return (
    <div className="input">
      <h2>Education</h2>
      <label>
        School Name <br />
        <input
          value={schoolName}
          onChange={handleSchoolNameChange}
        />
      </label>
      <br />
      <label>
        Degree <br />
        <input
          value={degree}
          onChange={handleDegreeChange}
        />
      </label>
      <br />
      <label>
        Date <br />
        <input
        type='date'
          value={date}
          onChange={handleDateChange}
        />
      </label>
      <hr />
    </div>
  );
}
