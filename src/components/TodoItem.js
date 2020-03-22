import React, { Component } from 'react';
import '../public/css/TodoItem.css';
import { connect } from "react-redux";
import btnDetele from "../public/images/delete.png";
import btnEdit from "../public/images/edit.png";
import { completeItem, deleteItem } from "../actions/TodoAction";
import EditItem from './EditItem';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };
    this.completeItem = this.completeItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  };
  //<--filter-->
  // handleChange(event) {
  //   let val = event.target.value;
  //   const { items } = this.state;
  //   let filterTodo = items.map(item => {
  //     if (val === 'true' || val === "false")
  //       return item.isCompleted === JSON.parse(val.toLowerCase())
  //     else
  //       return item
  //   })
  //   this.setState({
  //     items: filterTodo
  //   })
  // }
  //<--Action Store-->
  onDeleteItem(id) {
    this.props.actionDeleteItem(id);
  }
  completeItem(id) {
    this.props.actionCompleteItem(id);
  }
    // onDeleteItem(id) {
    //   const {items} = this.state;
    //   let deleteItem = items.filter(item => item.id !== id)
    // }
    // completeItem(id) {
    //   const {items} = this.state;

    //   let isCompletedItem = items.map(item =>
    //     item.id === id ?
    //       { ...item, isComplete: !item.isComplete } :
    //       item
    //   )
    //   this.setState({
    //     items: isCompletedItem
    //   })
    // }
  render() {
    const { items } = this.props;
    return (
      <div className="row">
        <div className="col-6 col-md-1 "></div>
        <div className="col-6 col-md-11 ">
        {/* </div><select id="todo" value={this.state.isComplete} onChange={this.handleChange}> */}
          {/* <select id="todo" value={this.state.isComplete} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="true">true</option>
            <option value="false">false</option>
          </select> */}
          {items.map((item, key) => (
            <div className="row">
              <div className="col-md-2">
                <p className="todo-item" onClick={() => this.completeItem(key)}
                  className={item.isCompleted ? "todo-item-Completed" : "todo-item"}>
                  {item.title}
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={btnDetele}
                  alt="btn-delete"
                  className="img-btn btn-delete"
                  onClick={() => this.onDeleteItem(key)}
                ></img>
              </div>
              <div className="btn-item col-md-2">
                <EditItem></EditItem>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actionCompleteItem: id => {
      dispatch(completeItem(id));
    },
    actionDeleteItem: id => {
      dispatch(deleteItem(id));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);