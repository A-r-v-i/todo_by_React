import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

 styleText = () => {
   return {
     background: '#f4f4f4',
     padding: '10px',
     borderBottom: '1px #ccc dotted',
     textDecoration: this.props.todo.completed ? 'line-through' : 'none'

   }
 }



  render() {
    const {id,title} = this.props.todo
    return(
      <div style={this.styleText()}>
      <h3>
      <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
      {title}
      <button style={delBtn} onClick={ this.props.delTodo.bind(this,id) }>x</button>
      </h3>
      </div>

    );
  }
}
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const delBtn = {
  background: '#ff0000',
  color:'#fff',
  padding: '5px 9px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
