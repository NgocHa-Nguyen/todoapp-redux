import React, { Component } from "react";
import { Button } from "reactstrap";
import "../public/css/TodoList.css";

import { connect } from "react-redux";
import { getData } from "../actions/TodoAction";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.actionGetData} className="btn_api">
          Click me
        </Button>
        <TodoItem></TodoItem>
        <AddItem></AddItem>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    actionGetData: () => {
      dispatch(getData());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
