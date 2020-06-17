import React from "react";
import {connect} from "react-redux";
import {findCal} from "../Redux/action";

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            gender: "None",
            weight: "-",
            height: "-",
            age: "-",
            exercise: "-",
        }
    }

    handleChangeGender= (event) =>{
        this.setState({gender: event.target.value});
      }

    handleChangeExercise= (event) =>{
        this.setState({exercise: event.target.value});
      }

    render(){
        const {data, findCal} = this.props
        const {gender, age, height, weight} =  this.state

        console.log(data)

        return(
            <div key="here_is_the_cals" className="container-fluid my-auto">

                <div className="row">
                    <div className="form-group offset-3 col-6">
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <label>Gender</label>
                                <select value={this.state.gender} onChange={this.handleChangeGender} className="custom-select mr-sm-2">
                                    <option selected>Choose...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="row">
                    <div className="form-group offset-3 col-6">
                        <label >Weight (Kg)</label>

                        <input onChange={
                    event=> this.setState({weight:event.target.value})
                    } className="form-control"/>
                    <small>Enter the weight in kg!</small> 
                    </div> 
                    
                </div>

                <div className="row">
                    <div className="form-group offset-3 col-6">
                        <label >Height</label>

                        <input onChange={
                    event=> this.setState({height:event.target.value})
                    } className="form-control"/>
                    <small>Enter the height in inches!</small> 
                    </div>  
                </div>

                <div className="row">
                    <div className="form-group offset-3 col-6">
                        <label >Age</label>

                        <input onChange={
                    event=> this.setState({age:event.target.value})
                    } className="form-control"/>
                        <small>Enter your age in years!</small> 
                    </div>  
                </div>

                <div className="row">
                <div className="form-group offset-3 col-6">
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <label>Exercise</label>
                                <select value={this.state.exercise} onChange={this.handleChangeExercise} className="custom-select mr-sm-2">
                                    <option selected>Choose...</option>
                                    <option value="ne">Little to no exercise</option>
                                    <option value="le">Light exercise (1–3 days per week)</option>
                                    <option value="me">Moderate exercise (3–5 days per week)</option>
                                    <option value="he">Heavy exercise (6–7 days per week)</option>
                                    <option value="vhe">Very heavy exercise (twice per day, extra heavy workouts)</option>
                                </select>
                            </div>
                        </div>
                        <small>Select one of the above!</small> 
                    </div> 
                </div>

                <div className="row">
                    <div className="form-group col text-center">
                        <button onClick={()=> findCal(this.state)} className="btn btn-danger">Calculate</button>
                    </div>  
                </div>

                <div className="row text-center ">
                    <div className="col-auto mt-5 mx-auto">
                        <h3 className="font-italic text-dark text-center">Your Results</h3>
                        <table class="table table-responsive align-self-center">
                            <thead>
                                <tr>
                                    <th className="table-dark" scope="col">Gender</th>
                                    <th className="table-dark" scope="col">Weight (Kg)</th>
                                    <th className="table-dark" scope="col">Height (in)</th>
                                    <th className="table-dark" scope="col">AGE (years)</th>
                                    <th className="table-dark" scope="col">Calorie Need/day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-danger">{gender}</td>
                                    <td className="table-warning">{weight}</td>
                                    <td className="table-primary">{height}</td>
                                    <td className="table-success">{age}</td>
                                    <td className="table-secondary">{data}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
                    
            </div>
                
        )
    }
}

const mapStateToProps = state => {
    return{
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        findCal : payload => dispatch(findCal(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
