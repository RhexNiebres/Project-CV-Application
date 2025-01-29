import InputField from './InputField.jsx';
import '../styles/practicalinput.css';

export default function PracticalFormInput({ formData, handleChange}) {
  const { companyName, position, startDate, endDate } = formData;

  return (
    <div className="input">
      <h2>Practical Experience</h2>
      <InputField id="companyName" label="CompanyName" value={companyName} onChange={handleChange} />
      <br />
      <InputField id="position" label="Position" value={position} onChange={handleChange} />
      <br />
      <InputField id="startDate" label="Start Date" type='date' value={startDate} onChange={handleChange} />
      <br />
      <InputField id="endDate" label="End Date" type='date' value={endDate} onChange={handleChange} />
      <hr />
    </div>
  );
}

