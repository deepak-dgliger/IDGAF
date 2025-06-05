import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

const DaynamicForm: React.FC = () => {

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const jsonData: any = [
    { label: "FirstName", type: "text", validation: true },
    { label: "LastName", type: "text", validation: true },
    { label: "PhoneNumber", type: "text", validation: true , regex: /^[0-9]{10}$/},
    { label: "Email", type: "text", validation: true ,  regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
  ]

  const handleOnChange = (e) => {
    let { id, value } = e?.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  }

  const validation=()=>{
    let error ={ };
    jsonData?.forEach(({ label, validation, regex})=>{
      if(validation && (!formData[label] || formData[label]?.trim()=='')){
        error[label]=`${label} is required`;
      }else if (regex && !regex.test(formData[label])) {
        error[label] = `${label} is invalid`;
      }
    })

    setErrors(error);
    return Object.keys(error).length === 0;
  }

  const handleSubmit=()=>{
    if(validation()){
      console.log('form Submitted Successfully',formData)
    }else{
      alert('Error')
    }
  }

  return (
    <>
      <div className="form-Container">
        <div className='daynamic-form'>
          {jsonData?.map(({ label, type, validation }) => (<>
            <input placeholder={label} id={label} type={type} onChange={handleOnChange} name={validation} />
            {errors[label] && (
              <div style={{ color: "red", fontSize: "12px" }}>{errors[label]}</div>
            )}
          </>))}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default DaynamicForm