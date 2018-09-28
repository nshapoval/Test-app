import { Form, Label } from 'semantic-ui-react';
import React, { PureComponent } from 'react';
import actions from '../actions';
import {connect} from 'react-redux';
import {selectProfile} from '../selectors';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class ProfileForm extends PureComponent {
  constructor(props){
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.company = React.createRef();
    this.department = React.createRef();
    this.position = React.createRef();
    this.email = React.createRef();
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
      firstName: this.firstName.current.value.trim(),
      lastName: this.lastName.current.value.trim(),
      company: this.company.current.value.trim(),
      department: this.department.current.value.trim(),
      position: this.position.current.value.trim(),
      email: this.email.current.value.trim(),
    };
    this.props.saveUser(user);
  };

  render() {
      const {isLoading, user} = this.props;

      return (
        <Form loading={isLoading} className="profileForm" onSubmit={this.handleSubmit}>
          <Form.Field inline >
            <Label>
              First Name
            </Label>
            <input
              name='firstName'
              ref={this.firstName}
              defaultValue={user.firstName}
            />
          </Form.Field>
          <Form.Field inline >
            <Label>
              Last Name
            </Label>
            <input
              name='lastName'
              ref={this.lastName}
              defaultValue={user.lastName}
            />
          </Form.Field>
          <Form.Field inline >
            <Label>
              Company
            </Label>
            <input
              name='company'
              ref={this.company}
              defaultValue={user.company}
            />
          </Form.Field>
          <Form.Field inline >
            <Label>
              Department
            </Label>
            <input
              name='department'
              ref={this.department}
              defaultValue={user.department}
            />
          </Form.Field>
          <Form.Field inline >
            <Label>
              Position
            </Label>
            <input
              name='position'
              ref={this.position}
              defaultValue={user.position}
            />
          </Form.Field>
          <Form.Field inline >
            <Label>
              Email
            </Label>
            <input
              name='email'
              type="email"
              ref={this.email}
              defaultValue={user.email}
            />
          </Form.Field>
          <Form.Button content='Save' />
        </Form>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    ...selectProfile(state),
    users:state.firestore.data.users,
  }
};

const mapDispatchToProps = {
  fetchUser: actions.fetchUserSuccess,
  saveUser: actions.saveUserSuccess,
};

export default compose (
  firestoreConnect(props => [
    {
      collection: 'users',
      storeAs: 'users'
    }
  ]),
  connect(mapStateToProps, mapDispatchToProps)
 )(ProfileForm)
