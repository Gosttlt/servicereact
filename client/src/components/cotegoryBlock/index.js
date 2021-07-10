


import CotegoryHead from './cotegoryHead'
import CotegoryItems from './cotegoryItems/cotegoryItems'

export default function CotegoryBlock({ cotegory, activityWatcher, setActive, head, name, wh }) {

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
