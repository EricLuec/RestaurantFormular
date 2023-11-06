import React, { useState } from 'react';
import './App.css';

const MultiStepForm = () => {
const [formData, setFormData] = useState({
   name: '',
   nachname: '',
   email: '',
   phone: '',
   date: '',
   time: '',
   persons: '',
   message: '',
});

const [currentStep, setCurrentStep] = useState(1);

const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
};

const nextStep = () => {
   setCurrentStep(currentStep + 1);
};

const prevStep = () => {
   setCurrentStep(currentStep - 1);
};

const handleSubmit = (e) => {
   e.preventDefault();
   console.log(formData);
};

const renderSwitch = (param) => {
   switch (param) {
     case 1:
       return (
         <>
         <div className='title-tisch'>
          <h2>Tischreservation</h2>
          <div className='underline-title'/>
        </div>
         <br />
          <label className='input-title'>Name:</label>
          <div className='underline-name'/>
          <div />
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
             placeholder="Your Name"
             className='input'
           />
          <br />

          <label className='input-title'>Nachname:</label>
          <div className='underline-nachname'/>
          <div />
           <input
             type="text"
             name="nachname"
             value={formData.nachname}
             onChange={handleChange}
             placeholder="Dein Nachname"
             className='input'
           />
           <br />
           <label className='input-title'>E-Mail:</label>
           <div className='underline-email'/>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             placeholder="Your Email"
             className='input'
           />
           <br />
           <label className='input-title'>Telefonnummer: </label>
          <div className='underline-tele'/>
           <input
             type="text"
             name="phone"
             value={formData.phone}
             onChange={handleChange}
             placeholder="Your Phone"
             className='input'
           />
           <br />
           <div className='right-button'>
            <button type="button"  className='button' onClick={nextStep}>
              Next
            </button>
           </div>
           <div className='page'>
            <div className='subtract'>
              <p>page 1</p>
            </div>
           </div>

         </>
       );
     case 2:
       return (
         <>
          <h2>Tischreservation</h2>
          <br />
          <label className='input-title'>Anzahl der Personen: </label>
           <br />
           <input
             type="number"
             name="persons"
             value={formData.persons}
             onChange={handleChange}
             placeholder="Number of Persons"
             className='input'
           />
          <br />
          <label >Datum:</label>
          <br />
           <input
             type="date"
             name="date"
             value={formData.date}
             onChange={handleChange}
             className='input'
           />
           <br />
           <label>Zeit:</label>
           <br />
           <input
             type="time"
             name="time"
             value={formData.time}
             onChange={handleChange}
             className='input'
           />

           <br />
           <label className='input-title'> Persönliche nachricht:</label>
           <br />
           <textarea
             name="message"
             value={formData.message}
             onChange={handleChange}
             placeholder="Your Message"
             className='input'
           />
           <br />
           <button type="button" className='button' onClick={prevStep}>
             Previous
           </button>
           <button type="submit" className='button' onClick={handleSubmit}>
             Submit
           </button>
         </>
       );

     default:
       return null;
   }
};

return (
  <div className='Frame'>
    <form onSubmit={handleSubmit}>
      {renderSwitch(currentStep)}
    </form>
  </div>
);
};

export default MultiStepForm;