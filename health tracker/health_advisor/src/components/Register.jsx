import React from "react";
import { connect } from "react-redux";
import {fetchReg, changeRegType} from "../Redux/action";
import {Link} from "react-router-dom";
import styles from "../css/register.module.css"

class Register extends React.Component{
    state = {
        f_name: "",
        l_name: "",
        email: "",
        password: "",
        mobile: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.props.fetchReg(this.state)

    }

    render(){
        const {fetchReg, reg_data, reg_type, changeRegType} = this.props
        console.log(reg_data)

        if(reg_type == "User Added!"){
            alert(`${this.state.f_name} you are registered. Try Logging in!`)
            changeRegType()
        }

        return(
            <div>
                <div className="row bg-light justify-content-end">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <Link className="nav-link mr-2" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link mr-3" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.bac} style={{padding:"90px 0px 90px 0px"}}>
                    <div className="mt-5 container-fluid">
                        <h1 className="mb-5 font-italic text-dark offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4">Register!</h1>
                        <input name="f_name" value={this.state.name} onChange={this.handleChange} className="mt-1 form-control offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4" placeholder="Enter First Name" /><br/>
                        <input name="l_name" value={this.state.name} onChange={this.handleChange} className="mt-1 form-control offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4" placeholder="Enter Last Name" /><br/>
                        <input name="email" value={this.state.email} onChange={this.handleChange} className="mt-1 form-control offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-46" placeholder="Enter Email" /><br/>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="mt-1 form-control offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4" placeholder="Enter Password" /><br/>
                        <input name="mobile" value={this.state.mobile} onChange={this.handleChange} className="mt-1 form-control offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4" placeholder="Enter Mobile" /><br/>
                        <button onClick={this.handleClick} className="offset-4 col-4 offset-sm-5 col-sm-2 offset-lg-5 col-lg-2 btn btn-success">Register</button>
                        <img src="doodle.png" style={{maxWidth: "10rem"}} className="offset-6 col-6 img-fluid" alt="arrow"/>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        reg_data: state.reg_data,
        reg_type: state.reg_type
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchReg: payload => dispatch(fetchReg(payload)),
        changeRegType: payload => dispatch(changeRegType(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)