import EducationInput from './EducationInput';
import Form from './PersonalDetailsForm';
import PracticalFormInput from './PracticaInput.jsx';
import '../styles/editor.css'
export default function Editor({ formData, setFormData }) {
  return (
    <section className='Editor'>
      <Form data={formData} setFormData={setFormData} />
      <EducationInput formData={formData} setFormData={setFormData} />
      < PracticalFormInput formData={formData} setFormData={setFormData}/>
    </section>
  );
}
