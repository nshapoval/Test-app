import React from 'react';
import { shallow } from 'enzyme';
import { ProfileForm } from './index';
import '../../../../setupTets';

describe('Index component', () => {
  const props = { 
    user: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com'
    },
    isLoading: false,
    fetchUser: () => {},
    saveUser: () => {},
  };
  it('Should have 6 inputs and button', ()=>{
    const wraper = shallow(<ProfileForm {...{...props, user: {}}} />);

    const firstName = wraper.find("input[name~='firstName']");
    expect(firstName).toHaveLength(1);

    const lastName = wraper.find("input[name~='lastName']");
    expect(lastName).toHaveLength(1);

    const email = wraper.find("input[name~='email']");
    expect(email).toHaveLength(1);

    const company = wraper.find("input[name~='company']");
    expect(company).toHaveLength(1);

    const department = wraper.find("input[name~='department']");
    expect(department).toHaveLength(1);

    const position = wraper.find("input[name~='position']");
    expect(position).toHaveLength(1);
  });

  it('Should have inputs with user data as defaultValue', ()=>{
    const wraper = shallow(<ProfileForm {...props} />);

    const firstName = wraper.find("input[name~='firstName']");
    expect(firstName.props().defaultValue).toEqual(props.user.firstName);

    const lastName = wraper.find("input[name~='lastName']");
    expect(lastName.props().defaultValue).toEqual(props.user.lastName);

    const email = wraper.find("input[name~='email']");
    expect(email.props().defaultValue).toEqual(props.user.email);
  })
});