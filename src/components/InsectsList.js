import React, { Component } from 'react';
import InsectListItem from './InsectListItem';


export default class InsectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            insects: [],
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:4000/api/v1/insects"
        )
        .then((response) => response.json())
        .then((result) => this.setState({ insects: result }));
    }
    renderInsects() {
        return this.state.insects.map((insect) =>( 
        <InsectListItem key={insect.id} id= {insect.id} name={insect.name} />
        ));
    }
    render() {
        return (
        <>
            <h2>insects List</h2>
            {this.renderInsects()}
        </>
        )
    }
}
