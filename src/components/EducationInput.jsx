import InputField from "./InputField";
import "../styles/educationinput.css";

export default function EducationForm({ formData, handleChange }) {
  const { schoolName, degree, date } = formData;

  return (
    <div className="input">
      <h2>Education</h2>
      <InputField
        id="schoolName"
        label="School Name"
        value={schoolName}
        onChange={handleChange}
      />

      <br />
      <InputField
        id="degree"
        label="Degree"
        value={degree}
        onChange={handleChange}
      />
      <br />
      <InputField
        id="date"
        label="Date"
        type="date"
        value={date}
        onChange={handleChange}
      />
      <hr />
    </div>
  );
}
