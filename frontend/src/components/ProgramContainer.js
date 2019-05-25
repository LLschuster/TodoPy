import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    select,
    Label
  } from "reactstrap";
  import {dificulty} from "../constans/exercise";


export default class ProgramContainer extends Component 
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                {
                    <select name="typeExercise" onChange={this.props.handleChange} >
                    <option value="0">Select a workout plan</option>
                    {
                dificulty.map(item => ( 
                    <option value={item.value}>{item.name}</option>
                ))
                     }
                </select>
                }
                </React.Fragment>
        );
    }
}

