import s from './s.module.css'
import ItemNav from './ItemNav'
import React from 'react'
import Container from 'components/shared/container'

const itemNavBar = [
    { url: '/', nameMenu: 'home', classN: 'material-icons', metaName: 'Home' },
    { url: '/apple', nameMenu: 'Ремотн Apple' },
    { url: '/', nameMenu: 'Ремонт телефонов' },
    { url: '/', nameMenu: 'Ремонт ноутбуков и ПК' },
    { url: '/', nameMenu: 'Ремонт планшетов' },
    { url: '/', nameMenu: 'Контакты' },
]


export default React.memo(function Navbar() {
    const navItems = itemNavBar.map(i => <ItemNav url={i.url} key={i.nameMenu} nameMenu={i.nameMenu} classN={i.classN} metaName={i.metaName} />)
    console.log('navbar');
    return (
        <nav className={s.navBar}>
            <Container>
                <ul className={s.navBox}>
                    {navItems}
                </ul>
            </Container>
        </nav >
    )
})