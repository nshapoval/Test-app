import React, { PureComponent } from 'react';
import ProfileForm from './components/profileForm';
import './style.scss';

class ProfilePageBody extends PureComponent {
    componentDidMount() {

    }
    render() {
        return (
            <div className="Profile">
                <h1>Profile</h1>
                <ProfileForm />
            </div>
        );
    }
}

export default ProfilePageBody;
