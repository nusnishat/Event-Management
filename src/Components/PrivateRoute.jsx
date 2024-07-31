import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading)
    {
        return <span className='loading'></span>
    }
    if(user)
    {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
    
};

export default PrivateRoute;