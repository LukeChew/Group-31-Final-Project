import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FishesDetails from './FishesDetails'

function FishListItem({ id, name }) {
    const [details, setDetails] = useState(null);
    function handleLoadDetails() { 
        fetch(
        `https://esoo-rest-api.herokuapp.com/api/v1/fishes/${id}`
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
                    <FishesDetails 
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

FishListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default FishListItem;
