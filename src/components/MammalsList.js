import React, { Component } from 'react';
import MammalListItem from './MammalListItem';


export default class MammalsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mammals: [],
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:4000/api/v1/mammals"
        )
        .then((response) => response.json())
        .then((result) => this.setState({ mammals: result }));
    }
    renderMammals() {
        return this.state.mammals.map((mammal) =>( 
        <MammalListItem key={mammal.id} id= {mammal.id} name={mammal.name} />
        ));
    }
    render() {
        return (
        <>
            <h2>Mammals List</h2>
            {this.renderMammals()}
        </>
        )
    }
}
