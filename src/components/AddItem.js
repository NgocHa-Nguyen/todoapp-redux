import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Add from "../public/images/plus.png";
import "../public/css/AddItem.css";
import {addItem} from "../actions/TodoAction";
import {connect} from "react-redux";

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          title: "", 
          description: "" 
        };
        this.toggle = this.toggle.bind(this);
        this.submit = this.submit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
      };
    
      toggle() {
        const { modal } = this.state;
        this.setState({
          modal: !modal
        });
      };
    
      submit() {
        //<-- this.props.handleInput(this.state.title, this.state.description);-->
        this.props.actionAddItem(this.state.title, this.state.description);
        this.toggle();
      }
    
      handleOnChange(input, value) {
        this.setState({
          [input]: value
        }); 
      }
    
      render() { 
        const { modal } = this.state;
        return (
          <div className="add-button">
            <Button color="white" onClick={this.toggle}>
              <img alt="add-item" src={Add} className="img-add" />
            </Button>
            <Modal isOpen={modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>ADD TODO</ModalHeader>
              <ModalBody>
                <input
                  name="title"
                  ref="title"
                  type="text"
                  placeholder="Todo..."
                  onChange={e => this.handleOnChange("title", e.target.value)}
                />
              </ModalBody>
              <ModalBody>
                <input
                  name="description"
                  ref="description" 
                  type="text"
                  placeholder="Description..."
                  onChange={e => this.handleOnChange("description", e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.submit}>
                  Save
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }
    const mapStateToProps = state => {
      return {};
    };
    
    const mapDispatchToProps = dispatch => {
      return {
        actionAddItem: (title, description) => {
          dispatch(addItem({title, description}));
        }
      };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(AddItem);