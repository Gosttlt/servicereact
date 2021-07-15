import { connect } from "react-redux";
import PersonalAccount from ".";

let mstp = (state) => ({
    userEmail: state.authReducer.userEmail
})

export default connect(mstp, {})(PersonalAccount)