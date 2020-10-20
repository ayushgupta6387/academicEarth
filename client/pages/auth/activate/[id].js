import {useState, useEffect} from 'react'
import jwt from 'jsonwebtoken';

// by writing this we get the link which is sent to user by email, on separate page when user click on that link
import { withRouter } from 'next/router';

const ActivateAccount = ({router}) => {
    return <div>{JSON.stringify(router)}</div>
};

export default withRouter(ActivateAccount);