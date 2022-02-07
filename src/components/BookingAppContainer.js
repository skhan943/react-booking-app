import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { BsFillCalendarCheckFill } from "react-icons/bs"

// function based
const BookingAppContainer = ()=>{

    const [price, setPrice] = useState("Price / Le Prix: $0");

    // this function will be passed down as a prop to the ContactForm
    const updatePrice = (price) =>{
        setPrice(price);
    }

    return(
        <div className="container">
            <header>
                <h1 className="title">Booking App <BsFillCalendarCheckFill/></h1>
            </header>
            <ContactForm updatePrice={updatePrice}/>
            <h1 className="price-display">
                {price}
            </h1>
        </div>
    )

}

export default BookingAppContainer;
