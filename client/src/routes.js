import ApplePageContainer from 'pages/apple/appPageContainer'
import AuthPageContainer from 'pages/auth/authPageContainer'
import HomeContainer from 'pages/home/homeContainer'
import AccountContainer from 'pages/account/accountContainer'
import { APPLE_ROUTE, AUTH_ROUTE, HOME_ROUTE, LK_ROUTE } from 'utils/routeConstants'



export const publucRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomeContainer,
    },
    {
        path: APPLE_ROUTE,
        Component: ApplePageContainer,
    },
    {
        path: AUTH_ROUTE,
        Component: AuthPageContainer,
    },

]

export const privateRoutes = [
    {
        path: LK_ROUTE,
        Component: AccountContainer,
    },
    {
        path: HOME_ROUTE,
        Component: HomeContainer,
    },
    {
        path: APPLE_ROUTE,
        Component: ApplePageContainer,
    },
    {
        path: AUTH_ROUTE,
        Component: AccountContainer,
    },
]