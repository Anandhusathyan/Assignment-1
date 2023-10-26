import React,{useContext} from 'react'
import { Formdatacontext } from './step-form'
import '../style/Personaldetails.css'

function Paymentdetails() {

    const {paymentDetails, setPaymentDetails,step,errors,setErrors} = useContext(Formdatacontext);

    let today = new Date().toISOString().split('T')[0];
    

  return (
    <div className='outbox'>
      {step === 3 && (
          <div className='border-box'>
            <h2>Step 3: Payment Details</h2>
            {errors && <div className='err'>{errors}</div>}
            <div>
              <input
                type='number'
                placeholder="Credit Card"
                value={paymentDetails.creditCard}
                name='creditcard-no'
                autoComplete='creditcard-no'
                onChange={(e) =>{
                setPaymentDetails({
                ...paymentDetails,
                creditCard: e.target.value,
                });setErrors("")}
                }
              />
              
            </div>
            <div>
              <input
                type='date'
                placeholder="Expiration Date"
                value={paymentDetails.expiration}
                name='expiration'
                autoComplete='expiration'
                onChange={(e) =>{
                  setPaymentDetails({
                    ...paymentDetails,
                    expiration: e.target.value,
                  });setErrors("")}
                }
                min={today}
              />
              
            </div>
            <div>
              <input
                type='number'
                placeholder="CVV"
                value={paymentDetails.cvv}
                name='cvv'
                autoComplete='cvv'
                onChange={(e) =>{
                  setPaymentDetails({
                    ...paymentDetails,
                    cvv: e.target.value,
                  });setErrors("")}
                }
              />
              
            </div>
          </div>
        )}
    </div>
  )
}

export default Paymentdetails
