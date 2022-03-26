import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import './Contact.css'
import 'animate.css';
function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const [test, setTest] = useState(null);

  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));


//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//   };

  let reservation = JSON.parse(localStorage.getItem("reservations"));
  let found;
  let starting;
  let indx;

//   for (let i in reservation)
//     if (reservation[i].id == id) {
//       indx = i;
//       let starting1 = new Date(reservation[i].start)
//       let mid = starting1.getDate();
//       starting1.setDate(mid + 1);
//       let start = starting1.toISOString();
//       starting = start.substring(0, 10);
//       found = true;
//     }

  let today = new Date();
  const start = today.toISOString();
  const valueCut1 = start.substring(0, 10);
  const [valueCut, setValueCut] = useState(found ? starting : valueCut1);

  let minHour = found ? reservation[indx].hour : `${(today.getHours()+4).toString()}:00`

  const handleDateChange = (e) => {
    setValueCut(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let reservation = {
      firstName: e.target.fName.value,
      lastName: e.target.lName.value,
      email:e.target.email.value,
      tel: e.target.tel.value,
      start: valueCut,
      hour: e.target.hours.value,
    };

    setSubmitted(true);
    setTest(reservation);
  };

  return (
    <>
    
      <div className="car-form-container ">
      <h1>Call Reservation</h1><br/>
        <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="textsCont">
            <div className="texts" id="texts1">
              <input
            
                required
                placeholder="First Name"
                type="text"
                name="fName"
                id="fName"
              />
              {/* <input
            
                required
                placeholder="Last Name"
                type="text"
                name="lName"
                id="lName"
              /> */}
            </div>
            <div className="texts" id="texts2">
              {/* <input
                required
                placeholder="Email"
                onChange={() => {
                  return null;
                }}
                type="email"
                name="email"
                id="email"
              /> */}
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                placeholder="Mobile Number"
                name="tel"
                id="tel"
              />
            </div>
          </div>
          <div className="dates">
            <input
              onChange={(e) => handleDateChange(e)}
              value={valueCut}
              type="date"
              name="start"
              min={found ? starting : valueCut1}
            />
            <input required type="time" name="hours" min={minHour}  />
          </div>
          <div className="submit">
            <input type="submit" value="Book Now !" />
          </div>
        </form>

        {found && (
          <>
            <h2 className="register-label">
              You already have a reservation on {reservation[indx].start} at {reservation[indx].hour}
            </h2>
          </>
        )}
      </div>
      {submitted&&
      <Popup test={test} setSubmitted={setSubmitted} />}
    </>
  );
}

export default Contact;