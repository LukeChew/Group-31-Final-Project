import React, { Component } from 'react';
import FishListItem from './FishListItem';


export default class FishesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fishes: [],
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:4000/api/v1/fishes"
        )
        .then((response) => response.json())
        .then((result) => this.setState({ fishes: result }));
    }
    renderFishes() {
        return this.state.fishes.map((fish) =>( 
        <FishListItem key={fish.id} id= {fish.id} name={fish.name} />
        ));
    }
    render() {
        return (
        <>
            <h2>fishes List</h2>
            {this.renderFishes()}
        </>
        )
    }
}