import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AmphibiansDetails from './AmphibiansDetails'

const GQL_API = `https://esoo-graphql.herokuapp.com/`;
const GQL_QUERY = `
query($id: ID!) {
    amphibian (id: $id) {
        name
        species
        location
        status
        date
        photo
    }
    }
`;

function AmphibianListItem({ id, name }) {
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
            .then((result) => setDetails(result.data.amphibian));
        }
    }
    return (
        <div>
            <a href='#' onClick={handleLoadDetails}>
                {name}
                {
                    details && (
                        <AmphibiansDetails
                            species={details.species}
                            location={details.location}
                            status={details.status}
                            date={details.date}
                            photo={details.photo}
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
