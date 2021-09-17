import { useDispatch, useSelector } from "react-redux";
import { setAuthLogout } from "store/authReducer/actions";
import { getIsAuth, getUserEmail, getUserName } from "store/authReducer/selectors";
import HeaderTopBlock from ".";


const HeaderTopBlockContainer = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)
    const userName = useSelector(getUserName)
    const userEmail = useSelector(getUserEmail)

    return <HeaderTopBlock isAuth={isAuth} userName={userName} userEmail={userEmail} setAuthLogout={() => dispatch(setAuthLogout())} />
}

export default HeaderTopBlockContainer