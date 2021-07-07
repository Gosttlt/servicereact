import s from './s.module.css'
import ItemNav from './itemNav'
import itemNavBar from 'utils/navBarItems'

export default function Navbar() {

    const navItems = itemNavBar.map(i => <ItemNav url={i.url} key={i.nameMenu} nameMenu={i.nameMenu} classN={i.classN} metaName={i.metaName} />)

    return (
        <nav className={s.navBar}>
            <ul className={`container ${s.navBox}`}>
                {navItems}
            </ul>
        </nav>
    )
}