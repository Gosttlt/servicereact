
import Footer from 'components/footer'
import Header from 'components/header'
import Navbar from 'components/navBar'
import Search from 'components/search'
import Container from 'components/shared/container'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <Container>
                <Header />
            </Container>
            <Navbar />
            <Search />
            <Component {...pageProps} />
            <Footer />
        </>
    )

}