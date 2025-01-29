import '../styles/Preview.css';
import EducationFormOutput from './EducationOutput.jsx'
import  PersonalDetailsSection from './PersonalOutput.jsx'
import PracticalFormOutput from './PracticalOutput.jsx';


export default function Preview ({ formData }){
    return(
        <section className='Preview'>
            <PersonalDetailsSection formData={formData}/>
            <hr />
            <EducationFormOutput formData={formData}/>
            <hr />
            <PracticalFormOutput formData={formData}/>
            <hr />
        </section>
    )
}