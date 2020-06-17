import React from "react";
import Calculator from "./Calculator";
import {connect} from "react-redux";
import {addTaskFood, removeData} from "../Redux/action";
import {Link} from "react-router-dom";
import styles from "../css/dashboard.module.css";


class Dashboard extends React.Component{
    state = {
        type:"Choose..",
        name:"",
        cal:"",
        data:true
    }

    handleClick= (key) => {
        const {type, name, cal} = this.state
        this.props.addTaskFood([type, name, cal])
        // alert(`${this.state.name} is added to the list!`)
    }

    render(){
        var {calorieNeed, log, logged_user, task, food, task_cal, food_cal, addTaskFood, removeData} = this.props
        var d = new Date()

        if(log){
            if((calorieNeed) == 0 ){
            return(
                <div className={styles.bac}>
                    <div key="here" className="container-fluid">
                        <div className="row bg-light justify-content-end">
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div style={{padding:"0px 0px 90px 0px"}} className="row mt-3">
                            <div className="col-12">
                                <h3 className="font-italic text-dark text-center mb-5">Check Your BMR before heading froward</h3>
                                <Calculator/>
                            </div>
                        </div>

                    </div>
                </div>
                
                )
            }
            else if(calorieNeed > 0){
                var total = 0

                food_cal.forEach((a,b)=>{
                    if(b != 0){
                        total += parseInt(a)
                    }
                })

                task_cal.forEach((a,b)=>{
                    if(b != 0){
                        total -= parseInt(a)
                    }
                })

                console.log(total)
                return(
                    <div className={styles.bac}>
                        <div className="container-fluid" key="dash_here">

                            <div className="row bg-light justify-content-end">
                                <ul class="nav justify-content-end">
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    {/* <li class="nav-item">
                                        <Link className="nav-link" to="/calculator">BMR</Link>
                                    </li> */}
                                </ul>
                            </div>

                            <div className="row">
                                <div className="offset-3 col-6 text-center">
                                    <h3 className={styles.font}>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</h3>
                                </div>
                            </div>


                            <div className="row text-center my-5 ">
                                <div className="mx-auto col-7 col-md-6 offset-lg-3 col-lg-2">
                                    <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                                        <div class="card-header">Calorie Need/Day</div>
                                        <div class="card-body">
                                            <h1 class="card-title">{calorieNeed}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-auto col-7 col-md-6 col-lg-2">
                                    <div class="card text-white bg-success mb-3" style={{maxWidth: "18rem"}}>
                                        <div class="card-header">Calorie Consumed</div>
                                        <div class="card-body">
                                            <h1 class="card-title">{total}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-auto col-7 col-md-6 col-lg-2">
                                    <div class="card text-white bg-warning mb-3" style={{maxWidth: "18rem"}}>
                                        <div class="card-header">Calorie Needed</div>
                                        <div class="card-body">
                                            <h1 class="card-title">{calorieNeed - total}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mx-5 mt-5 py-4 rounded-lg">

                                <h2 className="offset-1 col-11 mb-3 font-weight-lighter">Add Your Calorie!</h2>

                                <div className="col-12 col-md-6 offset-lg-1 col-lg-3">
                                    <label>Type</label>
                                    <select value={this.state.type} onChange={(event)=>this.setState({type: event.target.value})} className="custom-select mr-sm-2">
                                        <option selected>Choose...</option>
                                        <option value="food">Food</option>
                                        <option value="exercise">Exercise</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-6 col-lg-3">
                                    <label >Name</label>
                                    <input onChange={
                                        event=> this.setState({name:event.target.value})} 
                                        className="form-control"/>
                                </div>

                                <div className="col-6 col-md-6 col-lg-3">
                                <label >Cal</label>
                                    <input onChange={
                                        event=> this.setState({cal:event.target.value})} 
                                        className="form-control"/>
                                </div>

                                <div className="col-1">
                                    <br/>
                                    <button onClick={()=>this.handleClick()} className="btn btn-outline-dark">Add</button>
                                </div>

                            </div>

                            <div className="row mt-5 px-5">

                            <h2 className="offset-1 col-11 mb-3 font-weight-lighter">Progress!</h2>

                                    <div className="col-12 col-md-6 offset-lg-2 col-lg-4 text-center mx-auto">
                                        <table class="table table-sm rounded">
                                            <tr>
                                            <th class="table-dark">Food</th>
                                            <th class="table-dark">Calorie</th> 
                                            <th class="table-dark">Remove</th>
                                            </tr>
                                            {food_cal.filter((a,b)=> b!= 0).map((a,b)=>(
                                                <tr>
                                                    <td class="table-success">{food[b+1]}</td>
                                                    <td class="table-warning">{a}</td>
                                                    <td class="table-secondary"><button onClick={()=>removeData(["food",b+1])} className="btn btn-sm btn-outline-danger">Delete</button></td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-4 text-center mx-auto">
                                        <table class="table table-sm rounded">
                                            <tr>
                                            <th class="table-dark">Exercise</th>
                                            <th class="table-dark">Calorie</th> 
                                            <th class="table-dark">Remove</th>
                                            </tr>
                                            {task_cal.filter((a,b)=> b!= 0).map((a,b)=>(
                                                <tr>
                                                    <td class="table-primary">{task[b+1]}</td>
                                                    <td class="table-danger">{a}</td>
                                                    <td class="table-secondary"><button onClick={()=>removeData(["exercise",b+1])} className="btn btn-sm btn-outline-danger">Delete</button></td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                            </div>

                        </div>
                    </div>
                )
            }
        }
        else{
            return(
                <div>
                    {this.props.history.push("/login")}
                </div>
                
            )
            
        }
    }
}

const mapStateToProps = state => {
    return{
        calorieNeed: state.calorieNeed,
        log: state.log,
        logged_user: state.logged_user,
        task: state.task,
        food: state.food,
        task_cal: state.task_cal,
        food_cal: state.food_cal
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTaskFood: payload => dispatch(addTaskFood(payload)),
        removeData: payload => dispatch(removeData(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)