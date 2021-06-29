import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AmphibiansDetails from './AmphibiansDetails'

function AmphibianListItem({ id, name }) {
    const [details, setDetails] = useState(null);
    function handleLoadDetails() { 
        fetch(
        `https://esoo-rest-api.herokuapp.com/api/v1/amphibians/${id}`
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
                    <AmphibiansDetails 
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

AmphibianListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default AmphibianListItem;
