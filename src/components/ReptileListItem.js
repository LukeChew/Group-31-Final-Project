import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReptilesDetails from './ReptilesDetails'

const GQL_API = `https://esoo-graphql.herokuapp.com/`;
const GQL_QUERY = `
query($id: ID!) {
    reptile (id: $id) {
        name
        species
        location
        status
        date
        photo
    }
    }
`;

function ReptileListItem({ id, name }) {
    const [details, setDetails] = useState(null);
    const [count, setCount] = useState(0);
    function handleLoadDetails() {
        setCount(prevCount => prevCount + 1);
        if(!(count%2 == 0)) {
            setDetails(null);
        }
        else {
        const variables = { id: id };
        fetch(GQL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: GQL_QUERY,
                variables,
            }),
        })
            .then(response => response.json())
            .then((result) => setDetails(result.data.reptile));
        }
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
