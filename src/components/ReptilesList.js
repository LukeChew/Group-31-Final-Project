import React, { Component } from 'react';
import ReptileListItem from './ReptileListItem';


export default class ReptilesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reptiles: [],
        };
    }

    componentDidMount() {
        fetch(
            "https://esoo-rest-api.herokuapp.com/api/v1/reptiles"
        )
        .then((response) => response.json())
        .then((result) => this.setState({ reptiles: result }));
    }
    renderReptiles() {
        return this.state.reptiles.map((reptile) =>( 
        <ReptileListItem key={reptile.id} id= {reptile.id} name={reptile.name} />
        ));
    }
    render() {
        return (
        <>
            <h2>reptiles List</h2>
            {this.renderReptiles()}
        </>
        )
    }
}
