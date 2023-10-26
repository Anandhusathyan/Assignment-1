import React,{useContext} from 'react'
import { Formdatacontext } from '../components/step-form'

function usevalidateForm(step,details) {

    let errors = "";

    switch (step) {
      case 1:
        if (details.firstName === "" || details.lastName === "" || details.email === "") {
          errors = "All Fields Are Required";
        }

        else if(/\d/.test(details.firstName) || /\d/.test(details.lastName)  ){
          
          errors = "Name Should Contain Only Alphabets";
        }

        else if(!/@.+\.com$/.test(details.email)){
          errors = "Enter a valid email"
        }
        
        break;
      case 2:
        if (details.street === "" || details.city === "" || details.zipCode === "") {
          errors = "All Fields Are Required";
        }

        else if(details.zipCode.length !== 6 ){
            errors = "Enter a valid Pincode"
        }

        
        break;
      case 3:
        if (details.creditCard === "" && details.expiration === "" && details.cvv === "" ) {
          errors = "All Fields Are Required";
        }

        else if(details.creditCard.length !== 16){
          errors = "Enter a valid card number"
        }
        
        else if(details.cvv.length !== 3){
          errors = "Enter a valid cvv"
        }
        break;
      default:
        break;
    }
   
  return errors
}

export default usevalidateForm
