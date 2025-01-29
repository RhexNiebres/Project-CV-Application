import { useState } from 'react';
import Preview from './components/Preview';
import spongeImage from './assets/sponge.jpg';
import './App.css'
import Editor from './components/Editor';

export default function App({ initialData }) {
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || 'SpongeBob',
    lastName: initialData?.lastName || 'SquarePants',
    email: initialData?.email || 'SpongeBob@1234.com',
    phoneNumber: initialData?.phoneNumber || '+123 456 789',
    address: initialData?.address || '124 Conch St., Bikini Bottom. ',
    jobRole: initialData?.jobRole || 'Fry Cook',
    about: initialData?.about || 'SpongeBob SquarePants is a cheerful, energetic, and optimistic sea sponge who lives in a pineapple under the sea in Bikini Bottom. Known for his infectious enthusiasm and childlike innocence, he works as a fry cook at the Krusty Krab, always striving to do his best and make others happy.',
    profilePicture: initialData?.profilePicture || spongeImage,
    schoolName:initialData?.schoolName || `Mrs. Puff's Boating School `,
    degree:initialData?.degree||`Mrs. Puff's Boating School (currently)`,
    date: initialData?.date|| '',
    company: initialData?.company|| '',
    position: initialData?.position|| '',
    startDate: initialData?.startDate|| '',
    endDate: initialData?.endDate|| ''
  });

  return (
    <div className='App'>
      <Editor formData={formData} setFormData={setFormData} />
      <Preview formData={formData} />
    </div>
  );
}
