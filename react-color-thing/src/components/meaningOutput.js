import React, { Component } from 'react';
import store from '../store.js';
import { connect } from 'react-redux';
import colors from './meanings.json';

export class MeaningOutput extends Component {
    render() {
        if(store.getState().mode !== "unset") {
            console.log(store.getState().h, store.getState().s, store.getState().v);
            let newBaseColor="";
            if(store.getState().v <=5) {
                newBaseColor="black";
                store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "black"});
            }
            else if(store.getState().s<=5) {
                if(store.getState().v>=95) {
                    newBaseColor="white";
                    store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "white"});
                }

                if(store.getState().v<=95)
                {
                    newBaseColor="grey";
                    store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "grey"});
                }
            }
            else if(store.getState().h>=345 || store.getState().h<=30) {
                newBaseColor="red";
                store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "red"});
            }
            else if(store.getState().h<=60) {
                if(store.getState().v<=50) {
                    newBaseColor="brown";
                    store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "brown"});
                }
                else {
                    newBaseColor="orange";
                    store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "orange"});
                }
            }
            else if(store.getState().h<=75) {
                newBaseColor="yellow";
                store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "yellow"});
            }
            else if(store.getState().h<=165) {
                newBaseColor="green";
                store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "green"});
            }
            else if(store.getState().h<=255) {
                newBaseColor="blue";
                store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "blue"});
                console.log("blue");
            }
            else if(store.getState().h<=330) {
                newBaseColor="purple";
                store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "purple"});
            }
            else if(store.getState().h<=345) {
                newBaseColor="pink";
                store.dispatch({type:"CHANGE_BASE_COLOR", newBaseColor: "pink"});
            }

            return (
                <div id="meaningOutput">
                <h1 style={{color: newBaseColor}}>{store.getState().newBaseColor}</h1>
                <span><b>{colors[newBaseColor].description}</b></span>
                <span><b>Wavelength:</b> 590-560nm</span>
                <span><b>Emotion:</b> {colors[newBaseColor].emotions}</span>
                <span><b>Used To/For:</b> {colors[newBaseColor].uses}</span>
                <span><b>Industry:</b> {colors[newBaseColor].industries}</span>
                <span><a href={colors[newBaseColor].source}>source</a></span>
                </div>
            );
        }

        return (<div>No color selected yet.</div>);
    }
}

function mapStateToProps(state) {
    return {
        newColor: state.newColor,
        mode: state.mode,
        newBaseColor: state.newBaseColor,
        data: state.schemeData,
        meaning: state.meaning,
        h: state.h,
        s: state.s,
        v: state.v,
    }
}

export default connect(
    mapStateToProps,
)(MeaningOutput);