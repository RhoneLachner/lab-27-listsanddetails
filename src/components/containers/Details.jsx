import React, { Component } from 'react';
import { getCharById } from '../characters/characters/heyArnoldApi';
import Character from '../characters/characters/Character';
import { Link } from 'react-router-dom';
import '../../app/App.css';


export default class Details extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        getCharById(this.props.match.params.id)
        .then(character => this.setState({ character }));
    }
    
    render() {

        return (
            <>
            <div className="backHome">
                <Link to={'/'}>Back to Home</Link>
            </div>
            <div>
                <Character {...this.state.character} />
            </div>
            </>
        )
    }
}
