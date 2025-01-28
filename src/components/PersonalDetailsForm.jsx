import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [JobRole, setJobeRole] = useState('');
  const [About, setAbout] = useState('');

  const fullName = firstName + ' ' + lastName;
  const email = Email;
  const phoneNumber = PhoneNumber;
  const address= Address;
  const jobRole= JobRole;
  const about = About;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }
  function handleJobRoleChange(e) {
    setJobeRole(e.target.value);
  }
  function handleAboutChange(e) {
    setAbout(e.target.value);
  }
  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:{' '}
        <input
          value={Email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Phone NUmber:{' '}
        <input
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <label>
        Address:{' '}
        <input
          value={address}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Job Role:{' '}
        <input
          value={jobRole}
          onChange={handleJobRoleChange}
        />
      </label>
      <label>
        About:{' '}
        <input
          value={about}
          onChange={handleAboutChange}
        />
      </label>
      <p>
        Full Name: <b>{fullName}</b>
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
        JobRole: <b>{jobRole}</b>
      </p>
      <p>
        About: <b>{about}</b>
      </p>
    </>
  );
}
