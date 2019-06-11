import React, { Component } from 'react';
import store from '../store.js';
import { connect } from 'react-redux';

export class ColorInput extends Component {

    getColors = () => {
        store.dispatch({ type: "CHANGE_INPUT_COLOR", newColor: document.getElementsByName("color")[0].value });
        store.dispatch({ type: "CHANGE_MODE", newMode: document.getElementsByName("mode")[0].value });
        let url = 'http://www.thecolorapi.com/id?format=json&hex='+store.getState().newColor+'&mode='+store.getState().mode;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                store.dispatch({ type: "CHANGE_H", h: data.hsv.h });
                store.dispatch({ type: "CHANGE_S", s: data.hsv.s });
                store.dispatch({ type: "CHANGE_V", v: data.hsv.v });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <header>
                <input type="text" name="color" defaultValue={store.getState().newColor} />
                <select name="mode">
                    <option>Choose a color scheme type</option>
                    <option value="monochrome">Monochrome</option>
                    <option value="analogic">Analogic</option>
                    <option value="complement">Complement</option>
                </select>
                <div className="buttonWrap">
                    <button onClick={this.getColors}>Bring me that rainbow</button>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        newColor: state.newColor,
        mode: state.mode,
        newBaseColor: state.newBaseColor,
        data: state.schemeData,
        meaning: state.meaning,
    }
}

export default connect(
    mapStateToProps,
)(ColorInput);