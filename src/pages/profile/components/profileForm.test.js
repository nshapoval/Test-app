import React from 'react'
import { shallow } from 'enzyme'
import { ProfileForm } from './profileForm'
import '../../../setupTets'

describe('ProfileForm component', () => {
  const props = { 
    user: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com'
    },
    isLoading: false,
    fetchUser: () => {},
    saveUser: () => {},
  }
  
  it('User data was loaded', ()=>{
    const wraper = shallow(<ProfileForm {...props} />);

    const firstName = wraper.find("input[name~='firstName']");
    expect(firstName).toHaveLength(1)
    expect(firstName.props().defaultValue).toEqual(props.user.firstName);

    const lastName = wraper.find("input[name~='lastName']")
    expect(lastName).toHaveLength(1)
    expect(lastName.props().defaultValue).toEqual(props.user.lastName);

    const email = wraper.find("input[name~='email']");
    expect(email).toHaveLength(1);
    expect(email.props().defaultValue).toEqual(props.user.email);

    const company = wraper.find("input[name~='company']");
    expect(company).toHaveLength(1);

    const department = wraper.find("input[name~='department']");
    expect(department).toHaveLength(1);

    const position = wraper.find("input[name~='position']");
    expect(position).toHaveLength(1);
  })
  
})