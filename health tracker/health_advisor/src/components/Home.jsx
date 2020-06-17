import React, { useState } from "react";
import {Link, Route} from "react-router-dom";
import Calculator from "./Calculator";
import {fetchHealthNews} from "../Redux/action";
import {connect} from "react-redux";
import axios from "axios";
import styles from "../css/home.module.css";

class Home extends React.Component{

    state = {
        data:[]
    }

    componentDidMount(){
        axios.get("http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=53ce110ee804432a81c99d695a20883d")
        .then(res=>{
            this.setState({
                data:res.data.articles,
            })
        })
    }

    render(){
        const {news_data, fetchHealthNews} = this.props
        const {data} = this.state
        console.log(data)
        if(data.length > 0){
            var data_a = data.slice(0,4)
            return(
                <div className={styles.bak}>
                    <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <a href="https://www.webmd.com/diet/ss/slideshow-what-to-eat-when"><img className="img-fluid mt-3 rounded border" src="food.png" alt="banner"/></a>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="offset-1 col-10">
                                This Calorie Calculator is based on several equations, 
                                and the results of the calculator are based on an estimated average. 
                                The Harris-Benedict Equation was one of the earliest equations used to 
                                calculate basal metabolic rate (BMR), which is the amount of energy expended per 
                                day at rest. It was revised in 1984 to be more accurate and was used up until 1990, when the Mifflin-St Jeor 
                                Equation was introduced. The Mifflin-St Jeor Equation also calculates BMR, and has been shown to be more accurate 
                                than the revised Harris-Benedict Equation. 
                            </div>

                            <div className="col-12 mt-5">
                                <h1 className="font-italic text-dark text-center ">Check Your Calorie Needs!</h1>
                                <Calculator/>
                            </div>
                            
                        </div>

                        <div style={{borderLeft:"solid gray 1px"}} className="col-6 col-md-4 col-lg-3 mx-auto">
                            <h2 className="font-italic text-dark">News!</h2>
                            {data_a.map(a=>(
                                <div class="card mb-2 bg-light">
                                    <img class="card-img-top" src={a["urlToImage"]} alt="Card image cap"/>
                                    <div class="card-body">
                                        <a href={a["url"]}><p class="card-text">{a["title"]}</p></a>
                                    </div>
                            </div>
                            ))}
                        </div>
                    </div>
            </div>
                </div>
            
        )
        }
        else{
            return(
                <div className="container-fluid">

                <div className="row mt-5">
                    <div className=" offset-1 col-10">
                    This Calorie Calculator is based on several equations, 
                    and the results of the calculator are based on an estimated average. 
                    The Harris-Benedict Equation was one of the earliest equations used to 
                    calculate basal metabolic rate (BMR), which is the amount of energy expended per 
                    day at rest. It was revised in 1984 to be more accurate and was used up until 1990, when the Mifflin-St Jeor 
                    Equation was introduced. The Mifflin-St Jeor Equation also calculates BMR, and has been shown to be more accurate 
                    than the revised Harris-Benedict Equation. 
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-6 text-center">
                        <Calculator/>
                    </div>
                </div>
            </div>          
            )
            
        }
        
    }
}

const mapStateToProps = state => {
    return{
        news_data: state.news_data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchHealthNews: payload => dispatch(fetchHealthNews(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)