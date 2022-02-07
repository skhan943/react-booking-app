import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactForm = props => {

    // using 1 useState hook to read most form values
    const [inputText, setInputText] = useState({
        firstName: "",
        lastName: "",
        email: "",
        hours: 0,
    });
    
    // hook to read date
    const [startDate, setStartDate] = useState(new Date());

    // since the text boxes are now controlled components, we need to have this function which allows us to update/type in them
    const onChange = e =>{
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    };

    // function that handles the submission of the form
    const handleSubmit = e =>{

        e.preventDefault();    // keeps the page from refreshing

        const d = new Date(e.target.dateAndTime.value);   // gets the date and stores it

        if ((d.getDay() !== 0) && (d.getDay() !== 6)){
            props.updatePrice("Price / Le Prix: $" + inputText.hours*100);      // show the price, weekday pricing
        }
        else{
            props.updatePrice("Price / Le Prix: $" + inputText.hours*150);      // show the price, weekend pricing
        }
        setInputText({
            firstName: "",
            lastName: "",     // reset text fields
            email: "",
            hours: 0,
        })
    }

    // form component
    return(
        <form onSubmit={handleSubmit}>
            First Name / Prénom:
            <br/>
            <input type="text" className="input-text" value={inputText.firstName} name="firstName" onChange={onChange}/>
            <br/>
            Last Name / Nom de famille:
            <br/>
            <input type="text" className="input-text" value={inputText.lastName} name="lastName" onChange={onChange}/>
            <br/>
            Email: 
            <br/>
            <input type="text" className="input-text" value={inputText.email} name="email" onChange={onChange}/>
            <br/>
            How Many Hours / Combien d'heures?
            <br/>
            <input type="text" className="input-text" value={inputText.hours} name="hours" onChange={onChange}/>
            <br/>
            Select A Date:
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}        // see react-datepicker for more information
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                name="dateAndTime"
                className="date-selector"
            />
            <button className="input-submit">Get Quote<br/>Obtenir un devis</button>
        </form>
    )

}

export default ContactForm;