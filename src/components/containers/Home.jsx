import React, { Component } from 'react';
import AllCharacters from '../characters/characters/AllCharacters';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the Home Page. All Characters in Hey Arnold exist here. Click an image to get details.</h2>
                <div className="characterItem">
                <AllCharacters/> 
                </div>
    
            </div>
        )
    }
}
