import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Password: '',
            Email:'',
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { Name, Password, Email } = this.state;

        const auth = {
            Name,
            Password,
            Email,
        };

        axios
            .post('http://localhost:8004/sign-up', auth)
            .then(() => console.log('Registered successfully'))
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
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" name="Name" placeholder="First name" onChange={this.handleInputChange} />
                </div>
                
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="Email" placeholder="Enter email" onChange={this.handleInputChange} />
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="Password" placeholder="Enter password" onChange={this.handleInputChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-center">
                    Already registered <a href="/">sign in?</a>
                </p>
            </form>
                </div>
            </div>
        </div>
        );
    }
}