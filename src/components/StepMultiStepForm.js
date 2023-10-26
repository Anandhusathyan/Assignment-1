import React,{useContext,useEffect} from 'react';
import { Formdatacontext } from './step-form'
import usevalidateForm from '../hooks/usevalidateForm';
import Personaldetails from './Personaldetails';
import Adressdetails from './Adressdetails';
import Paymentdetails from './Paymentdetails';
import '../style/StepMultiStepForm.css'
import { useNavigate } from 'react-router-dom';

function StepMultiStepForm() {

    const {personalDetails , setPersonalDetails, step,setStep,address, setAddress,paymentDetails, setPaymentDetails,errors, setErrors} = useContext(Formdatacontext);

   const navigate = useNavigate()
    const nextStep = () =>{
        if(step == 1 && !usevalidateForm(step,personalDetails)){

            setStep(step + 1);
        }

        else if(step == 2 && !usevalidateForm(step,address)){
            setStep(step + 1);
        }
        else{
            if(step == 1){
                console.log(usevalidateForm(step,personalDetails));
                setErrors(usevalidateForm(step,personalDetails));
            }
            else if(step == 2){
                console.log(usevalidateForm(step,address));
                setErrors(usevalidateForm(step,address));
            }
            
        }
    }
    
    
      const prevStep = () => {
        setStep(step - 1);
      };
    
    
      const handleSubmit = () => {

        if( usevalidateForm(step,paymentDetails) ){
            setErrors(usevalidateForm(step,paymentDetails));
            return 
        }
        
        console.log("Submitted Data:", {
          personalDetails,
          address,
          paymentDetails,
        });
        setErrors("");
        navigate('/summary')
      };

  return (
    <div className='outbox1'>
      <Personaldetails/>
      <Adressdetails/>
      <Paymentdetails/>
      <div id='butt-coll'>
          {step > 1 && (
            <button type='button' onClick={prevStep}>Previous</button>
          )}
          {step < 3 ? (
            <button type='button' onClick={nextStep}>Next</button>
          ) : (
            <button type='button' onClick={handleSubmit}>Submit</button>
          )}
        </div>
    </div>
  )
}

export default StepMultiStepForm
