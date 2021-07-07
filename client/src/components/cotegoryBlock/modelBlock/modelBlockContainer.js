import { connect } from "react-redux"
import ModelBlock from "."
import { setLoadServices } from 'store/productReducer/productReducer'

let mstp = (state) => ({
    models: state.productPeducer.rowsModels,
    activityWatcher: state.productPeducer.activityWatcher
})


export default connect(mstp, { setLoadServices })(ModelBlock)