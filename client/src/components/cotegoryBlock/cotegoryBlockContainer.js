import { connect } from 'react-redux'
import { setActiveCompany } from 'store/productReducer/productReducer'
import CotegoryBlock from '.'
const mstp = (state) => ({
    company: state.productPeducer.company,
    activityWatcher: state.productPeducer.activityWatcher,
    rowsDevice: state.productPeducer.rowsDevice
})

export default connect(mstp, { setActiveCompany })(CotegoryBlock)
