import Container from 'components/shared/container';
import CotegoryHead from './cotegoryHead'
import CotegoryItems from './cotegoryItems/cotegoryItems'

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

const company = [{ key: 'apple', name: 'Apple', img: 'apple/apple.jpeg' }]
const device = [{ key: 'iphone', name: 'iPhone', img: 'apple/iphone.jpg', keyCompany: 'apple' }]
const models = [{ key: 'iphone5s', name: 'iPhone 5s', deviceKey: 'iphone', typeDevice: 'mob' }]

export default function CotegoryBlock({ activityWatcher, setActive, name, wh }) {
    console.log('render cotegory block');
    return (
        <Container>
            <div>
                <CotegoryHead head="Выбирите фирму" />
                <CotegoryItems
                    cotegory={company}
                    active={activityWatcher}
                    setActive={setActive}
                    wh="100"
                    name="company" />
            </div>
            <div>
                <CotegoryHead head="Выбирите device" />
                <CotegoryItems
                    cotegory={device}
                    active={activityWatcher}
                    setActive={setActive}
                    wh="100"
                    name="device" />
            </div>
        </Container >
    )
}
