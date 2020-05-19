import React from "react";
import ContactForm from "./ContactForm";

export const Contact= () =>{
    const styleh={
        height:'1000px',
        backgroundColor:'rgb(222,222,222,0.1)',
        color:'white',
        fontSize:'20px',
        fontFamily:'Railway,San-Serif'

    };

    return(
        <div style={styleh}>
            This is Contact Container
            <ContactForm/>
        </div>

    );
};