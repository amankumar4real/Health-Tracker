import React from "react";
import {connect} from "react-redux"
import {fetchLog, changeLoginType} from "../Redux/action"
import styles from "../css/login.module.css"
import {Link} from "react-router-dom"

class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            email:"",
            password:"",
        }
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        this.props.fetchLog(this.state)
    }

    render(){
        if(this.props.log){
            this.props.history.push("/dashboard")
        }
        const {log, fetchLog, login_type, changeLoginType} = this.props
        
        if(login_type=="email or password is wrong!"){
                alert("Check Id or Password Again!")
                changeLoginType()
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
                        <h1 className="mb-5 font-italic text-dark offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4">Login!</h1>
                        <input name="email" value={this.state.name} onChange={this.handleChange} className="mt-1 form-control offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4" placeholder="Email id" /><br/>
                        <input type="password" name="password" value={this.state.name} onChange={this.handleChange} className="mt-1 form-control offset-3 col-6 offset-sm-4 col-sm-4 offset-lg-4 col-lg-4" placeholder="Password" /><br/>
                        <button onClick={this.handleLogin} className="offset-4 col-4 offset-sm-5 col-sm-2 offset-lg-5 col-lg-2 btn btn-success">Login</button><br/><br/><br/>
                        <img src="unnamed.png" style={{maxWidth: "10rem"}} className="offset-6 col-6 img-fluid" alt="arrow"/>
                    </div> 
                </div>
            </div>
            
            
        )
    }
}

const mapStateToProps = state => {
    return{
        log: state.log,
        logged_user: state.logged_user,
        login_type: state.login_type
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchLog: payload => dispatch(fetchLog(payload)),
        changeLoginType: payload => dispatch(changeLoginType(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)