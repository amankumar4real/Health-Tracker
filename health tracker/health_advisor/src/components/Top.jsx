import React from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {logOut, updateUser} from "../Redux/action"

class Top extends React.Component{
    constructor(props){
        super(props)

        this.state={
            "id": this.props.logged_id,
            "food_task": this.props.food_task,
            "cal": this.props.calorieNeed
        }
    }

    handleLogout = () => {
        this.props.logOut()
        console.log(this.props.calorieNeed)

        this.props.updateUser({
            id: this.props.logged_id,
            food: this.props.food.join("|"),
            task: this.props.task.join("|"),
            food_cal: this.props.food_cal.join("|"),
            task_cal: this.props.task_cal.join("|"),
            cal: this.props.calorieNeed
        })
        // this.props.history.push("/")
    }

    
    render(){
        const {log} = this.props
        console.log(log)
        if(!log){
            return(
            <div className="container-fluid">
                <div className="row bg-dark rounded">
                    <div  className="col-6 my-auto">
                        <table>
                            <tr>
                                <td rowSpan="2">
                                    <img className="img-fluid mr-3" style={{maxWidth: "5rem"}} src="png-file-name-health-600.png" alt="logo"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 style={{fontWeight:"bolder", fontSize:"25px", fontFamily:"italic", color:"white"}}>Health Tracker</h2>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className="col-6 my-auto text-right">
                        <Link to="/register"><button className="mr-1 mb-1 btn btn-sm btn-outline-success">Sign Up</button></Link>
                        <Link to="/login"><button className="mr-1 mb-1 btn btn-sm btn-primary">Sign In</button></Link>
                    </div>

                    
                    
                </div>
                    
            </div>
        )
        }
        else{
            
            const {logOut} = this.props

            if(!log){
                this.props.match.push("/")
            }

            return(
                <div className="container-fluid">
                    <div className="row bg-dark rounded">
                    <div  className="col-6 my-auto">
                        <table>
                            <tr>
                                <td rowSpan="2">
                                    <img className="img-fluid mr-3" style={{maxWidth: "5rem"}} src="png-file-name-health-600.png" alt="logo"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 style={{fontWeight:"bolder", fontSize:"25px", fontFamily:"italic", color:"white"}}>Health Tracker</h2>
                                </td>
                            </tr>
                        </table>
                    </div>
    
                        <div className="col-6 my-auto text-right">
                            <button onClick={this.handleLogout} className="btn btn-sm btn-danger mr-2">Logout</button>
                            <button className="btn btn-sm btn-outline-warning"><Link to="/dashboard">Hi {this.props.logged_user["f_name"]} !</Link></button>
                        </div>
                        
                    </div>
                        
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return{
        log: state.log,
        logged_id: state.logged_id,
        task: state.task,
        food: state.food,
        task_cal: state.task_cal,
        food_cal: state.food_cal,
        calorieNeed: state.calorieNeed,
        logged_user: state.logged_user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logOut: payload => dispatch(logOut(payload)),
        updateUser: payload => dispatch(updateUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)