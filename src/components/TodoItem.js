import React, { Component } from "react";
import "../public/css/TodoItem.css";
import { connect } from "react-redux";
import btnDetele from "../public/images/delete.png";
import { completeItem, deleteItem } from "../actions/TodoAction";
import EditItem from "./EditItem"
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      value: "all"
    };
    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onDeleteItem(id) {
    this.props.actionDeleteItem(id);
  }
  onCompleteItem(id, item) {
    const boolean = item.isCompleted ? true : false;
    this.props.actionCompleteItem(id, boolean);
  }
  handleChange() {
    const { items } = this.props;
    const { value } = this.state;
    if (value === "all") {
      return items.listActive.concat(items.listDone).map((item, key) => (
        <div className="row">
          <div className="col-md-8">
            <p
              className="todo-item"
              onClick={() => this.onCompleteItem(item.id, item)}
              className={item.isCompleted ? "todo-item-Completed" : "todo-item"}
            >
              {item.title}
            </p>
          </div>
          <div className="col-md-2">
            <img
              src={btnDetele}
              alt="btn-delete"
              className="img-btn btn-delete"
              onClick={() => this.onDeleteItem(item.id)}
            ></img>
          </div>
          <div className="btn-item col-md-2">{<EditItem></EditItem> }</div>
        </div>
      ));
    }
    if (value === "true") {
      return items.listDone.map((item, key) => (
        <div className="row">
          <div className="col-md-8">
            <p
              className="todo-item"
              onClick={() => this.onCompleteItem(item.id, item)}
              className={item.isCompleted ? "todo-item-Completed" : "todo-item"}
            >
              {item.title}
            </p>
          </div>
          <div className="col-md-2">
            <img
              src={btnDetele}
              alt="btn-delete"
              className="img-btn btn-delete"
              onClick={() => this.onDeleteItem(item.id)}
            ></img>
          </div>
          <div className="btn-item col-md-2"><EditItem></EditItem></div>
        </div>
      ));
    }
    if (value === "false") {
      return items.listActive.map((item, key) => (
        <div className="row">
          <div className="col-md-8">
            <p
              className="todo-item"
              onClick={() => this.onCompleteItem(item.id, item)}
              className={item.isCompleted ? "todo-item-Completed" : "todo-item"}
            >
              {item.title}
            </p>
          </div>
          <div className="col-md-2">
            <img
              src={btnDetele}
              alt="btn-delete"
              className="img-btn btn-delete "
              onClick={() => this.onDeleteItem(item.id)}
            ></img>
          </div>
          <div className="btn-item col-md-2">{ <EditItem></EditItem> }</div>
        </div>
      ));
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-6 col-md-1 "></div>
        <div className="col-6 col-md-11 ">
          <div>
            <select
              id="todo"
              onChange={event => this.setState({ value: event.target.value })}
            >
              <option value="all">All</option>
              <option value="true">List Done</option>
              <option value="false">List Active</option>
            </select>
          </div>
          {this.handleChange()}
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
    actionCompleteItem: (id, boolean) => {
      dispatch(completeItem(id, boolean));
    },
    actionDeleteItem: id => {
      dispatch(deleteItem(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
