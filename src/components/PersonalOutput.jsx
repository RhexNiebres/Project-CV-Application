
export default function PersonalDetailsSection({ formData }) {
  const { firstName, lastName, email, phoneNumber, address, jobRole, about, profilePicture,} = formData;
  const profilePictureToDisplay = profilePicture || './assets/sponge.jpg';

  return (
    <div className='PersonalOutput'>
      {profilePicture && (
        <div>
          <img src={profilePictureToDisplay} alt="Profile" style={{ width: '150px', height: 'auto' }} />
        </div>
      )}
      <p>
        Full Name: <b>{firstName} {lastName}</b>
      </p>
      <p>
        About: <b>{about}</b>
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
    </div>
  );
}


