import React, { Component } from 'react';
import { connect } from "react-redux";
import "../public/css/Stats.css"

class Stats extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : '0'
        }
    }
    listItemDone(){
        const listItemDone = this.props.items.filter(item => item.isCompleted === false);
        return listItemDone.length
    }
    listItemActive(){
        const listItemActive = this.props.items.filter(item => item.isCompleted === true);
        return listItemActive.length
    }
    render() {
        console.log(this.props.items);
        return (
            <div className="stats">
                <h3>Active tasks : 
                   {this.listItemDone()}
                 </h3>
                <h3>Completed tasks :
                {this.listItemActive()} </h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};
export default connect(mapStateToProps)(Stats);
