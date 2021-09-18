import Preloader from 'components/common/preloader'
import TableItem from './tableItem'
import s from './s.module.css'
import { useMemo } from 'react'

export default function TablePrice({ rows, isLoadingService }) {

    let itemsRow = useMemo(() => rows.map(i => <TableItem key={i._id} service={i.service} time={i.timeRepair} price={i.price}
        present={i.present} discountContent={i.discountContent} oldPrice={i.oldPrice} />), [rows])

    return (
        <div className="container">
            <div className={s.tablePriceBlock}>
                <ul className={s.tableHead}>
                    <li>Услуга</li><li>Время ремонта</li><li>Цена под ключ ( работа + запчасть )</li>
                </ul>
                <div className={s.servicesBox}>
                    {isLoadingService ?
                        <Preloader /> :
                        itemsRow
                    }
                </div>
            </div>
        </div>
    )
}