import { Form } from 'semantic-ui-react';
import React, { PureComponent } from 'react';
import actions from '../actions';
import {connect} from 'react-redux';
import {selectProfile} from '../selectors';
import { stat } from 'fs';

class ProfileForm extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount(){
    this.props.fetchUser({
      firstName: 'John',
      lastName: 'Doe',
      department: 'Web-Dev'
    });
  }

  handleSubmit = () => {
    const user = {
      ...this.props.user,
      ...this.state.user,
    }
    this.props.saveUser(user);
  }

  handleChange = (e, { name, value }) => this.setState({ 
    user: {
      ...this.state.user,
      [name]: value.trim() ? value : '',
    } 
  })

  render() {
    const {isLoading, user: propsUser} = this.props;
    const {user: stateUser} = this.state;
    const user = {
      ...propsUser,
      ...stateUser,
    }
      return (
        <Form loading={isLoading} className = "profileForm" onSubmit={this.handleSubmit}> 
          <Form.Input inline label="First Name" name='firstName' value={user.firstName} onChange={this.handleChange} />
          <Form.Input inline label="Last Name" name='lastName' value={user.lastName} onChange={this.handleChange} />
          <Form.Input inline label="Company" name='company' value={user.company} onChange={this.handleChange} />
          <Form.Input inline label="Department" name='department' value={user.department} onChange={this.handleChange} />
          <Form.Input inline label="Position" name='position' value={user.position} onChange={this.handleChange} />
          <Form.Input inline label="Email" name='email' value={user.email} onChange={this.handleChange} />
          <Form.Button content='Save' />
        </Form>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    ...selectProfile(state),
  }
}

const mapDispatchToProps = {
  fetchUser: actions.fetchUserSuccess,
  saveUser: actions.saveUserSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);