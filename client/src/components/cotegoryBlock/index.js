import CotegoryHead from './CotegoryHead'
import CotegoryItems from './cotegoryItems/cotegoryItems'

export default function CotegoryBlock({ cotegory, activityWatcher, setActive, head, name, wh }) {
    console.log('render cotegory block');
    return (
        <div className="container">
            <CotegoryHead head={head} />
            <CotegoryItems
                cotegory={cotegory}
                active={activityWatcher}
                setActive={setActive}
                wh={wh}
                name={name} />
        </div>
    )
}
