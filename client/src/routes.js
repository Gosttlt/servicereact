import { APPLE_ROUTE, AUTH_ROUTE, HOME_ROUTE, LK_ROUTE } from 'utils/routeConstants'
import { lazy } from 'react'

const Home = lazy(() => import('pages/home/homeContainer'))
const Apple = lazy(() => import('pages/apple/appPageContainer'))
const Auth = lazy(() => import('pages/auth/authPageContainer'))
const Account = lazy(() => import('pages/account/accountContainer'))


export const publucRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: APPLE_ROUTE,
        Component: Apple,
    },
    {
        path: AUTH_ROUTE,
        Component: Auth,
    },

]

export const privateRoutes = [
    {
        path: LK_ROUTE,
        Component: Account,
    },
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: APPLE_ROUTE,
        Component: Apple,
    },
    {
        path: AUTH_ROUTE,
        Component: Account,
    },
]