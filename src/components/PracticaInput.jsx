
import '../styles/practicalinput.css';

export default function PracticalFormInput({ formData, setFormData }) {
  const { companyName, position, startDate, endDate } = formData;

  // Handle updates to the inputs
  function handleCompanyNameChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      companyName: e.target.value,
    }));
  }

  function handlePositionChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      position: e.target.value,
    }));
  }

  function handleStartDateChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      startdate: e.target.value,
    }));
  }

  function handleEndDateChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      endDate: e.target.value,
    }));
  }

  return (
    <div className="input">
      <h2>Practical Experience</h2>
      <label>
        Company Name <br />
        <input
          value={companyName}
          onChange={handleCompanyNameChange}
        />
      </label>
      <br />
      <label>
        Position <br />
        <input
          value={position}
          onChange={handlePositionChange}
        />
      </label>
      <br />
      <label>
        date From <br />
        <input
        type='date'
          value={startDate}
          onChange={handleStartDateChange}
        />
      </label>
      <br />
      <label>
        to <br />
        <input
        type='date'
          value={endDate}
          onChange={handleEndDateChange}
        />
      </label>
      <hr />
    </div>
  );
}

