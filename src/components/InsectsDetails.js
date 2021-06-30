import React from 'react';
const InsectsDetails = ({ species, location, status, date, photo }) => {
     return (
        <>
            <h5>Species: {species}</h5>
            <h5>Location: {location}</h5>
            <h5>Status: {status}</h5> 
            <h5>Date added to the Species at Risk in Ontario List: {date}</h5> 
            <h5><img src={photo} width="200" /></h5>
        </>
    ); 
};
export default InsectsDetails;
