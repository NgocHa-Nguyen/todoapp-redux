import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Edit from "../public/images/edit.png";
import "../public/css/EditItem.css";
import {editItem} from "../actions/TodoAction";
import {connect} from "react-redux";
import items from "../reducers/TodoReducer";

class EditItem extends Component {
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
        this.props.actionEddItem(this.state.title, this.state.description);
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
          <div className="edit-button">
            <Button color="white" onClick={this.toggle}>
              <img alt="edit-item" src={Edit} className="img-edit" />
            </Button>
            <Modal isOpen={modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>ADD TODO</ModalHeader>
              <ModalBody>
                <input
                  name="title"
                  ref="title"
                  type="text"
                  placeholder={items.title}
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
        actionEditItem: (title, description) => {
          dispatch(editItem({title, description}));
        }
      };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(EditItem);