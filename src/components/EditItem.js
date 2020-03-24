import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import bntEdit from "../public/images/edit.png";
import { connect } from "react-redux";
import { editItem } from "../actions/TodoAction";
import "../public/css/EditItem.css"
class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: this.props.title,
      description: this.props.description
    };

    this.toggle = this.toggle.bind(this);
    this.submit = this.submit.bind(this);
    // this.handleOnChange = this.handleOnChange.bind(this);
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  submit() {
    this.props.handleInput(this.state.title, this.state.description);
    // console.log(this.state.title, this.state.description)
    this.toggle();
  }

  // handleOnChange(input, value) {
  //   this.setState({
  //     [input]: value
  //   });
  // }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <Button color="white" onClick={this.toggle}>
          <img alt="btn-edit" src={bntEdit} className="img-bnt"></img>
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>EDIT TODO</ModalHeader>
          <ModalBody>
            <div style={{ margin: "20px 0" }}>
              <input
                name="title"
                ref="title"
                type="text"
                
               
                style={{ width: "100%", padding: 10 }}
              ></input>
            </div>
            <div style={{ margin: "20px 0" }}>
              <input
                name="description"
                ref="description"
                type="text"
               
                onChange={e =>
                  this.handleOnChange("description", e.target.value)
                }
                style={{ width: "100%", padding: 10 }}
              ></input>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.submit}>
              Save
            </Button>
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

const mapDispatchToprops = dispatch => {
  return {
    actionEditItem: id => {
      dispatch(editItem(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(EditItem);
