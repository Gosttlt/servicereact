import CotegoryHead from '../CotegoryHead'
import ItemsModel from './itemsModel'


export default function ModelBlock({ models, activityWatcher, setLoadServices, head }) {

    return (
        <div>
            <div className="container">
                <CotegoryHead head={head} />
                <ItemsModel models={models}
                    activityWatcher={activityWatcher}
                    setLoadServices={setLoadServices} />
            </div>
        </div>
    )
}

