import React,{useContext} from 'react'
import { Formdatacontext } from './step-form'
import '../style/Personaldetails.css'

function Adressdetails() {

    const {address, setAddress,step,errors,setErrors} = useContext(Formdatacontext)
  return (
    <div className='outbox'>
    {step === 2 && (
        <div className='border-box'>
          <h2>Step 2: Address</h2>
          {errors && <div className='err'>{errors}</div>}
          <div>
            <input
              type="text"
              placeholder="Street"
              value={address.street}
              name='street'
              autoComplete='street'
              onChange={(e) =>{
                setAddress({
                  ...address,
                  street: e.target.value,
                });setErrors("")}
              }
            />
            
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              value={address.city}
              name = 'city'
              autoComplete='city'
              onChange={(e) =>{
                setAddress({
                  ...address,
                  city: e.target.value,
                });setErrors("")}
              }
            />
            
          </div>
          <div>
            <input
              type='number'
              placeholder="Zip Code"
              name='pin-code'
              autoComplete='pin-code'
              value={address.zipCode}
              onChange={(e) =>{
                setAddress({
                  ...address,
                  zipCode: e.target.value,
                });setErrors("")}
              }
            />
            
          </div>
        </div>
      )}
      </div>
  )
}

export default Adressdetails
