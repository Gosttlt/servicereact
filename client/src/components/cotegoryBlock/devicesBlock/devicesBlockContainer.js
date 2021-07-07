import { connect } from "react-redux"
import { setActiveDevice } from "store/productReducer/productReducer"
import DevicesBlock from "."

let mstp = (state) => ({
    device: state.productPeducer.rowsDevice,
    activityWatcher: state.productPeducer.activityWatcher,
})


export default connect(mstp, { setActiveDevice })(DevicesBlock)