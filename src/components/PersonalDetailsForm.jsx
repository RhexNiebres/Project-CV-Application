import { useState } from 'react';

export default function Form() {
 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    jobRole: '',
    about: '',
  });

  const { firstName, lastName, email, phoneNumber, address, jobRole, about } = formData;

    function handleChange(event) {
    const { name, value } = event.target; 
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value, 
    }));
  }
  return (
    <>
      <h2>Let’s check you in</h2>
      <form>
        <label htmlFor="firstName">
          First name:{' '}
          <input
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Last name:{' '}
          <input
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:{' '}
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="phoneNumber">
          Phone Number:{' '}
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="address">
          Address:{' '}
          <input
            id="address"
            name="address"
            value={address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="jobRole">
          Job Role:{' '}
          <input
            id="jobRole"
            name="jobRole"
            value={jobRole}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="about">
          About:{' '}
          <textarea
            id="about"
            name="about"
            value={about}
            onChange={handleChange}
          />
        </label>
      </form>

      <h3>Summary</h3>
      <p>
        Full Name: <b>{firstName} {lastName}</b>
      </p>
      <p>
        Email: <b>{email}</b>
      </p>
      <p>
        Phone Number: <b>{phoneNumber}</b>
      </p>
      <p>
        Address: <b>{address}</b>
      </p>
      <p>
        Job Role: <b>{jobRole}</b>
      </p>
      <p>
        About: <b>{about}</b>
      </p>
    </>
  );
}