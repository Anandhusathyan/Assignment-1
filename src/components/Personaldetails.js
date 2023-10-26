import React,{useContext} from 'react';
import { Formdatacontext } from './step-form';
import '../style/Personaldetails.css'

function Personaldetails() {

    const {personalDetails,setPersonalDetails,step,errors,setErrors} = useContext(Formdatacontext)
  return (
    <div className='outbox'>
        {step === 1 && (
          <div className='border-box'>
            <h2>Step 1: Personal Details</h2>
            {errors && <div className='err'>{errors}</div>}
            <div >
              <input
                type="text"
                placeholder="First Name"
                value={personalDetails.firstName}
                autoComplete='given-name'
                name='given-name'
                onChange={(e) =>{
                  setPersonalDetails({
                    ...personalDetails,
                    firstName: e.target.value,
                  });setErrors("")}
                }
              />
              
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={personalDetails.lastName}
                autoComplete='last name'
                name = 'given-last name'
                onChange={(e) =>{
                  setPersonalDetails({
                    ...personalDetails,
                    lastName: e.target.value,
                  });setErrors("")}
                }
              />
    
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={personalDetails.email}
                autoComplete='email'
                name = 'email'
                onChange={(e) =>{
                  setPersonalDetails({
                    ...personalDetails,
                    email: e.target.value,
                  });setErrors("")}
                }
              />
            
            </div>
          </div>
        )}
    </div>
  )
}

export default Personaldetails
