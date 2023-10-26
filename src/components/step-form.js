import React, {useState,createContext} from "react" ;
import StepMultiStepForm from "./StepMultiStepForm";
import {BrowserRouter, Routes, Route, Link, NavLink, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
import Fulldetails from "./Fulldetails";

export const Formdatacontext = createContext();

function StepForm() {

  const [step, setStep] = useState(1);

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    creditCard: "",
    expiration: "",
    cvv: "",
  });

  const [errors, setErrors] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<StepMultiStepForm/>}/>
        <Route path="/summary" element={<Fulldetails/>}/>
      </>
      
    )
  )

  

  return (
    <Formdatacontext.Provider value={ {personalDetails , setPersonalDetails, step,setStep,address, setAddress,paymentDetails, setPaymentDetails,errors, setErrors} }>
        {/* <StepMultiStepForm/> */}
        <RouterProvider router={router}/>
    </Formdatacontext.Provider>
  )
}

export default StepForm