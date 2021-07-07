import HeaderTopBlockContainer from "./headerTopBlock/headerTopBlockContainer"
import Navbar from "./navBar"
import Search from "./search"


export default function Header() {
    return (
        <header className="header">
            <HeaderTopBlockContainer />
            <Navbar />
            <Search />
        </header>
    )
}

