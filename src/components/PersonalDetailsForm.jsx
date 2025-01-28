import './personaldetails.css'
export default function Form({ data, setFormData }) {
  const { firstName, lastName, email, phoneNumber, address, jobRole, about, } = data;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: imageUrl,
      }));
    }
  }

  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <form id="personal-details-form">
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
            rows={4}
            value={about}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="profile-picture">
          Picture:{' '}
          <input 
          type="file"
            id="profile-picture"
            name="about"
            onChange={handleImageChange}
          />
        </label>
      </form>
    </div>
  );
}
