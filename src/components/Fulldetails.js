import React,{useContext} from 'react';
import { Formdatacontext } from './step-form';
import '../style/Fulldetails.css'
function Fulldetails() {

    const {personalDetails,address,paymentDetails} = useContext(Formdatacontext);

  return (
    <div id='summary'>


        <div className='heading'>Profile</div>
        <div className='container'>
            <label>FirstName:</label>
            
            <span>{personalDetails.firstName}</span>
        </div>
        <div className='container'>
            <label>LastName:</label>
            
            <span>{personalDetails.lastName}</span>
        </div>
        <div className='container'>
            <label>Email:</label>
            
            <span>{personalDetails.email}</span>
        </div>


        <div className='heading'>ADDRESS</div>
        <div className='container'>
            <label>Street:</label>
            
            <span>{address.street}</span>
        </div>
        <div className='container'>
            <label>City:</label>
            
            <span>{address.city}</span>
        </div>
        <div className='container'>
            <label>ZipCode:</label>
            
            <span>{address.zipCode}</span>
        </div>


        <div className='heading'>Payment Details</div>
        <div className='container'>
            <label>Creditcard:</label>
            
            <span>{paymentDetails.creditCard}</span>
        </div>
        <div className='container'>
            <label>Expiration:</label>
            
            <span>{paymentDetails.expiration}</span>
        </div>
        <div className='container'>
            <label>CVV:</label>
            
            <span>{paymentDetails.cvv}</span>
        </div>
    </div>
  )
}

export default Fulldetails
