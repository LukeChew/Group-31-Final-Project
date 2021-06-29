import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReptilesDetails from './ReptilesDetails'

function ReptileListItem({ id, name }) {
    const [details, setDetails] = useState(null);
    function handleLoadDetails() { 
        fetch(
        `http://localhost:4000/api/v1/reptiles/${id}`
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
                    <ReptilesDetails 
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

ReptileListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default ReptileListItem;
