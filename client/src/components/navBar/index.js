import s from './s.module.css'
import ItemNav from './ItemNav'
import React from 'react'
import Container from 'components/shared/container'

const itemNavBar = [
    { url: '/', nameMenu: 'Home', classN: 'material-icons', metaName: 'home' },
    { url: '/apple', nameMenu: 'Ремотн Apple' },
    { url: '/1', nameMenu: 'Ремонт телефонов' },
    { url: '/2', nameMenu: 'Ремонт ноутбуков и ПК' },
    { url: '/3', nameMenu: 'Ремонт планшетов' },
    { url: '/4', nameMenu: 'Контакты' },
]


export default React.memo(function Navbar() {
    const navItems = itemNavBar.map(i => (
        <ItemNav
            url={i.url}
            key={i.nameMenu}
            nameMenu={i.nameMenu}
            classN={i.classN}
            metaName={i.metaName} />
    ))
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