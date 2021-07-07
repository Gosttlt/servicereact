import s from './s.module.css'
import RepairTime from './repairTime';
import LeftBlockHead from './leftBlockHead';
import AdvantagesItems from "./advantagesItems";

export default function LeftBlock({ h1Target, city, advantagesItems }) {
    return (
        <div className={s.topLeftBlock}>
            <LeftBlockHead h1Target={h1Target} city={city} />
            <RepairTime text="Починим при Вас за 20 минут" />
            <AdvantagesItems advantagesItems={advantagesItems} />
        </div>
    )
}





