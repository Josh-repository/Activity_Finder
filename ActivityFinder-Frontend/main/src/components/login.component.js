import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
localStorage.setItem('token', '');
export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Password: '',
            rememberMe:'',
            token:'',
            userName:'',
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { Name, Password, rememberMe} = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('Name', rememberMe ? Name : '');

        const auth = {
            Name,
            Password,
        };

        axios
            .post('https://activityfinder1.herokuapp.com/login', auth)
            .then(res => {
            console.log(res.data);
            const Response = res.data;
            const Success = Response['success'];
            const Token = Response['Token'];
            const userName = Response['object']['UserName'];
            if (Success === true) {
                this.props.history.push("/home/weather");
                localStorage.setItem('Token', Token);
                localStorage.setItem('userName', userName);
                }
            else{
                alert("Please enter a valid user name and password!")
                }
                }
        )
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Activity_Finder</Link>
                </div>
            </nav>
        <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" name="Name" placeholder="Enter name" onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="Password" placeholder="Enter password" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="rememberMe" id="customCheck1" onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-center">
                    Not having account.Please<Link className="nav-link" to={"/sign-up"}>Sign up.</Link> 
                </p>
            </form>
                </div>
            </div>
        </div>
        );
        
    }
}