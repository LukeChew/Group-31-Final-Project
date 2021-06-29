import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BirdsDetails from './BirdsDetails'

function BirdListItem({ id, name }) {
    const [details, setDetails] = useState(null);
    function handleLoadDetails() { 
        fetch(
        `https://esoo-react.herokuapp.com/api/v1/birds/${id}`
    )
        .then(response => response.json())
        .then(response => setDetails(response));
    }
    return ( 
        <div>
            <a href='#' onClick={handleLoadDetails}>
                {name}
            {
                details && (
                    <BirdsDetails 
                    species = {details.species}
                    location = {details.location}
                    status = {details.status}
                    date = {details.date}
                    photo = {details.photo}
                    />
                )
            }
            </a> 
        </div>
    ); 
}

BirdListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default BirdListItem;
