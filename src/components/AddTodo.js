import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title :''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});
  render() {
    return (
      <div>
      <form style={{display: 'flex'}}  onSubmit={this.onSubmit}>
       <input type="text" name="title" style={inputStyle} placeholder="Add todos.." value={this.state.title} onChange={this.onChange}/>

       <button type="submit" value="+" className="btnSubmit" style={subStyle} />
      </form>
      </div>
    );
  }
}
const inputStyle = {
  marginTop: '10px',
  marginBottom: '10px',
  flex: '11',
  padding: '5px',
  borderBottomRightRadius: '25px',
  borderTopRightRadius: '25px',
  borderTopLeftRadius: '25px',
  borderBottomLeftRadius: '25px',
}

const subStyle = {
  marginTop: '10px',
  marginBottom: '10px',
  flex: '0.5',
  padding: '5px',
  borderRadius: '50px',
  color: '#fff',
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
