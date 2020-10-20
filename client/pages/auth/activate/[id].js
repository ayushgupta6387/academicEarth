import {useState, useEffect} from 'react'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { showErrorMessage, showSuccessMessage } from '../../../helpers/alerts';
import { API } from '../../../config';


// by writing this we get the link which is sent to user by email, on separate page when user click on that link
import { withRouter } from 'next/router';

const ActivateAccount = ({router}) => {
    const [state, setState]= useState({
        name: '',
        token: '',
        buttonText: 'Activate Account',
        success: '',
        error: ''

    })
    return <div>{JSON.stringify(router)}</div>
};

export default withRouter(ActivateAccount);