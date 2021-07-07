import { connect } from "react-redux";
import TablePrice from ".";


let mstp = (state) => ({
    rows: state.productPeducer.rows,
    isLoadingService: state.productPeducer.isLoadingService
})

export default connect(mstp, {})(TablePrice);