import { useDispatch, useSelector } from "react-redux"
import ModelBlock from "."
import { setLoadServices } from 'store/productReducer/productReducer'
import { getActivityWatcher, getModels } from "store/productReducer/selectors"




export default function ModelBlockContainer({ head }) {

    const dispatch = useDispatch()
    const models = useSelector(getModels)
    const activityWatcher = useSelector(getActivityWatcher)

    const setLoadServicesHandler = (md) => {
        dispatch(setLoadServices(md))
    }
    return (
        <ModelBlock
            models={models}
            head={head}
            activityWatcher={activityWatcher}
            setLoadServices={setLoadServicesHandler} />)

}

