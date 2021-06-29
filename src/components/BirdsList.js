import React, { Component } from 'react';
import BirdListItem from './BirdListItem';


export default class BirdsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birds: [],
        };
    }

    componentDidMount() {
        fetch(
            "https://esoo-react.herokuapp.com/api/v1/birds"
        )
        .then((response) => response.json())
        .then((result) => this.setState({ birds: result }));
    }
    renderBirds() {
        return this.state.birds.map((bird) =>( 
        <BirdListItem key={bird.id} id= {bird.id} name={bird.name} />
        ));
    }
    render() {
        return (
        <>
            <h2>birds List</h2>
            {this.renderBirds()}
        </>
        )
    }
}
