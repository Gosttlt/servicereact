import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRoutes, publucRoutes } from 'routes'
import { getIsAuth } from 'store/authReducer/selectors';
import { HOME_ROUTE } from 'utils/routeConstants';


const AppRouter = () => {
    const isAuth = useSelector(getIsAuth)
    return isAuth ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact />
            ))}
            <Redirect to={HOME_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publucRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact />
            ))}
            <Redirect to={HOME_ROUTE} />
        </Switch>
    )
}
export default AppRouter
