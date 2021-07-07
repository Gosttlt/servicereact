import { useSelector } from 'react-redux'
import { setAuthLogin, setAuthRegister } from 'store/authReducer/actions'
import { getIsAuth, getIsErrorAuth } from 'store/authReducer/selectors'
import AuthPage from '.'



const AuthPageContainer = () => {


    const isAuth = useSelector(getIsAuth)
    const isErrorAuth = useSelector(getIsErrorAuth)


    return (
        <AuthPage
            isAuth={isAuth}
            isErrorAuth={isErrorAuth}
            setAuthLogin={setAuthLogin}
            setAuthRegister={setAuthRegister} />
    )
}


export default AuthPageContainer