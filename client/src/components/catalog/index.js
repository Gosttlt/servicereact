import Container from 'components/shared/container';
import { useMemo, useState } from 'react';
import CotegoryHead from './cotegoryHead'
import CotegoryItems from './cotegoryItems'
import ItemsModel from './modelBlock/index';
import TablePrice from './tablePrice';

const rows = [
    {
        _id: 3,
        model: 'iphone5s',
        service: 'Замена аккумулятора (Original)',
        present: 'glass',
        timeRepair: '15 мин',
        price: '2 090 р.',
        oldPrice: '4 090 р.',
        discountContent: 'акция до 3 мая'
    }
]
const company = [
    { key: "apple", name: "Apple", img: "apple/apple.jpeg" },
    { key: "samsung", img: "samsung/samsung.jpg", name: "Samsung" },
    { key: "xiaomi", name: "Xiaomi", img: "xiaomi/xiaomi.jpg" },
]
const device = [
    { key: "iphone", name: "iPhone", img: "apple/iphone.jpg", keyCompany: "apple" },
    { key: "samphone", name: "Смартфоны", img: "samsung/phone.jpg", keyCompany: "samsung" },
    { key: "ipad", name: "iPad", img: "apple/ipad.jpeg", keyCompany: "apple" },
    { key: "mackbook", img: "apple/macbook.jpeg", keyCompany: "apple", name: "MackBook" },
    { key: "samtablet", name: "Планшеты", img: "samsung/tablet.jpg", keyCompany: "samsung" },
]
const models = [
    { key: "iphone5s", name: "iPhone 5s", deviceKey: "iphone", typeDevice: "mob" },
    { key: "iphone10ProMax", name: "iPhone 10 Pro Max", deviceKey: "iphone", typeDevice: "mob" },
    { key: "iphone8", name: "iPhone 10 Pro Max", deviceKey: "iphone", typeDevice: "mob" },
    { key: "ipadpro", name: "iPad Pro", deviceKey: "ipad", typeDevice: "tab" },
    { key: "mackbookpro", name: "MackBook Pro", deviceKey: "mackbook", typeDevice: "book" },
    { key: "galaxya20", name: "Galaxy A20", deviceKey: "samphone", typeDevice: "mob" },
    { key: "galaxyatab", name: "Galaxy Tab", deviceKey: "samtablet", typeDevice: "tab" },

]



export default function CotegoryBlock() {
    const [activeCompany, setActiveCompany] = useState(company[0].key)
    const [activeDevice, setActiveDevice] = useState(device[0].key)
    const [activeModel, setActiveModel] = useState(models[0].key)

    const deviceFilter = useMemo(() => device.filter(el => el.keyCompany === activeCompany), [activeCompany])
    const modelFilter = useMemo(() => models.filter(el => el.deviceKey === activeDevice), [activeDevice])

    console.log('CotegoryBlock');

    return (
        <Container>
            <div>
                <CotegoryHead head="Выбирите фирму" />
                <CotegoryItems
                    data={company}
                    active={activeCompany}
                    setActive={setActiveCompany}
                    wh="100"
                    cotegory="company" />
            </div>
            <div>
                <CotegoryHead head="Выбирите устройство" />
                <CotegoryItems
                    data={deviceFilter}
                    active={activeDevice}
                    setActive={setActiveDevice}
                    wh="70"
                    cotegory="device" />
            </div>
            <div>
                <CotegoryHead head="Выбирите модель" />
                <ItemsModel
                    data={modelFilter}
                    active={activeModel}
                    setActive={setActiveModel} />
            </div>
            <div>
                <TablePrice rows={rows} />
            </div>
        </Container >
    )
}
