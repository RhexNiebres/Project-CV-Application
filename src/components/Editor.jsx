import EducationInput from './EducationInput';
import Form from './PersonalInput.jsx';
import PracticalFormInput from './PracticaInput.jsx';
import '../styles/editor.css'

export default function Editor({ formData, setFormData, handleChange, handleImageChange  }) {
  return (
    <section className='Editor'>
      <Form data={formData} setFormData={setFormData} handleChange = {handleChange} handleImageChange = {handleImageChange}/>
      <EducationInput formData={formData} setFormData={setFormData} handleChange = {handleChange}/>
      < PracticalFormInput formData={formData} setFormData={setFormData} handleChange = {handleChange}/>
    </section>
  );
}
