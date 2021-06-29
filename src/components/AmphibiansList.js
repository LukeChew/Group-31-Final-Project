import React, { Component } from 'react';
import AmphibianListItem from './AmphibianListItem';


export default class AmphibiansList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amphibians: [],
        };
    }

    componentDidMount() {
        fetch(
            "https://esoo-rest-api.herokuapp.com/api/v1/amphibians"
        )
        .then((response) => response.json())
        .then((result) => this.setState({ amphibians: result }));
    }
    renderAmphibians() {
        return this.state.amphibians.map((amphibian) =>( 
        <AmphibianListItem key={amphibian.id} id= {amphibian.id} name={amphibian.name} />
        ));
    }
    render() {
        return (
        <>
            <h2>amphibians List</h2>
            {this.renderAmphibians()}
        </>
        )
    }
}
