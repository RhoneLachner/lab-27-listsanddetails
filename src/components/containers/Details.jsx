import React, { Component } from 'react';
import { getCharById } from '../characters/characters/heyArnoldApi';
import Character from '../characters/characters/Character';

export default class Details extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        getCharById(this.props.match.params.id)
        .then(character => this.setState({ character }));
    }


    render() {
console.log(this.state.character)
        return (
            <div>
                <Character {...this.state.character} />
            </div>
        )
    }
}
