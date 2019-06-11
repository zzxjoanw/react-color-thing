import React, { Component } from 'react';
import store from '../store.js';
import { connect } from 'react-redux';

/*
monochrome: 5 colors based on the hsv value, at 0%, 25%, 50%, 75%, 100% value
analogic: hue shift +/-30
complement: hue shift 180
*/
export class ColorOutput extends Component {
    clamp(h) {
        if(h<0) { return h+360; }
        return h-360;
    }

    colorOutput() {
        let colorOutput=[];
        switch(store.getState().mode) {
            case "monochrome": for(let i=0; i<5; i++) {
                    colorOutput.push(<div>
                            <span key={'cb'+i} className="colorBox" style={
                                { backgroundColor:'hsl('+store.getState().h+', '+store.getState().s+'%, '+i*25+'%)' }
                            }></span>
                            <span>{store.getState().h}, {store.getState().s}%, {i*25
                            }%</span>
                    </div>);
                }
                break;
            case "analogic":
                for(let i=-1; i<2; i++) {
                    colorOutput.push(<div>
                        <span key={'cb'+i} className="colorBox" style={
                            {backgroundColor:'hsl('+store.getState().h+(i*30)+', '+store.getState().s+'%, '+store.getState().v+'%)'}
                        }></span>
                        <span>{store.getState().h+(i*30)}, {store.getState().s}%, {store.getState().v}%</span>
                    </div>);
                }
                break;
            case "complement":
                colorOutput.push(<div><span key="cb1" className="colorBox" style={
                    {backgroundColor:'hsl('+this.clamp(store.getState().h+180)+', '+store.getState().s+'%, '+store.getState().v+'%)'}
                }></span>
                <span>{this.clamp(store.getState().h+180)}, {store.getState().s}%, {store.getState().v}%</span>
                </div>);
                break;
            default: 
        }
        return colorOutput;
    }

    render() {
        return (
            <div id="colorOutput">
                <div>
                    <span className="colorBox" style={{backgroundColor:"#"+store.getState().newColor}}></span>
                    <span>#{store.getState().newColor}</span>
                </div>
                <hr />
                {this.colorOutput()}
            </div>
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
        h:state.h,
        s:state.s,
        v:state.v,
    }
}

export default connect(
    mapStateToProps,
)(ColorOutput);