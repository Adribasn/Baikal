import React from 'react';
import { useHistory } from 'react-router';

export const SignupPageRedirection = () => {
    const history = useHistory()
    history.push('/home')

    return (
        <div>
            
        </div>
    )
}