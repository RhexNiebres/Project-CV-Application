import '../styles/personaldetails.css'
import InputField from './InputField.jsx';

export default function Form({ data, handleChange, handleImageChange }) {
  const { firstName, lastName, email, phoneNumber, address, jobRole, about, } = data;
  return (
    <div className="personal-details">
      <h1>CV Builder</h1>
      <hr />
      <h2>Personal Details</h2>
      <hr />
      <form id="personal-details-form">
        <InputField id ="firstName" label="firstName" value={firstName} onChange={handleChange}/>
        <br />
        <InputField id="lastName" label="Last name" value={lastName} onChange={handleChange} />
        <br />
        <InputField id="email" label="Email" type="email" value={email} onChange={handleChange} />
        <br />
        <InputField id="phoneNumber" label="Phone Number" type="tel" value={phoneNumber} onChange={handleChange} />
        <br />
        <InputField id="address" label="Address" value={address} onChange={handleChange} />
        <br />
        <InputField id="jobRole" label="Job Role" value={jobRole} onChange={handleChange} />
        <br />
        <InputField id="about" label="about" type='textarea'  rows = {4} value={about} onChange={handleChange} />
        <br />
         <InputField id="profile-picture" label="profile-picture" type='file' onChange={handleImageChange} />
      </form>
      <hr />
     </div>
  );
}
