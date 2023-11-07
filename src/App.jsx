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
   mahlzeit: '',
});

//sieht man das?

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
         <div>
         <div className='title-tisch'>
          <h2>Tischreservation
          <div className='underline-title'/></h2>
          
        </div>
         <br />
          <label className='input-title' required>Name *</label>
          <div className='underline-name'/>
          <div />
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
             className='input'
           />
          <br />

          <label className='input-title' required >Nachname *</label>
          <div className='underline-nachname'/>
          <div />
           <input
             type="text"
             name="nachname"
             value={formData.nachname}
             onChange={handleChange}
             className='input'
           />
           <br />
           <label className='input-title' required>E-Mail *</label>
           <div className='underline-email'/>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             className='input'
           />
           <br />
           <label className='input-title'>Telefonnummer </label>
          <div className='underline-tele'/>
           <input
             type="text"
             name="phone"
             value={formData.phone}
             onChange={handleChange}
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

         </div>
       );
     case 2:
       return (
         <>
          <h2>Tischreservation
          <div className='underline-title'/></h2>
          
          <br />
          <label className='input-title' required >Anzahl der Personen * </label>
          <div className='underline-anper'/>

           <input
             type="number"
             name="persons"
             value={formData.persons}
             onChange={handleChange}
             className='input2'
           />
          <br />
          <div className='date-time'>
            <label className='input-title' required >Datum *
            <div className='underline-date'/>
            </label>
            <label className='input-title-time' required >Uhrzeit *
            <div className='underline-fix'>
              <div className='underline-time'/>
            </div>
            </label>
          </div>

          <div className='date-time-input'>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className='input-date-time'
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className='input-date-time'
            />
          </div>
          <label className='input-title' required >Mahlzeit *</label>
          <div className='underline-mahlzeit'/>
          <select
            type='selct'
            name='mahlzeit'
            value={formData.mahlzeit}
            onChange={handleChange}
            className='input2'
          >
            <option>Frühstück</option>
            <option>Mittagessen</option>
            <option>Abendessen</option>
          </select>
            
           <br />
           <label className='input-title'> Persönliche Nachricht </label>
           <div className='underline-message'/>
           <textarea
             name="message"
             value={formData.message}
             onChange={handleChange}
             className='input-textarea'
           />
           <br />
           <div className='side-button'>
            <button type="button" className='button-pre' onClick={prevStep}>
              Previous
            </button>
            <button type="submit" className='button' onClick={handleSubmit}>
              Submit
            </button>
          </div>
           <div className='page'>
            <div className='subtract2'>
              <p>page 2</p>
            </div>
           </div>
         </>
       );

     default:
       return null;
   }
};

return (
  <div id='screen'>
    <div className='Frame'>
      <form onSubmit={handleSubmit}>
        {renderSwitch(currentStep)}
      </form>
    </div>
  </div>

);
};

export default MultiStepForm;