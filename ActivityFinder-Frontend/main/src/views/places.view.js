import React from "react";
import axios from "axios";
import cla from "../assets/img/cla.PNG"
import jos from "../assets/img/jos.PNG"
import adi from "../assets/img/adi.PNG"

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            droplets: [],
            jwt: {},
            path: '',
            userName:'',
        }
    }

    async componentDidMount() {
        const jwt = localStorage.getItem('Token') || '';
        this.state.userName = localStorage.getItem('userName') || '';
        console.log(jwt);
        console.log(this.state.userName)
        const auth = {
            jwt,
        };
        axios
            .post("https://activityfinder1.herokuapp.com/locationdata", auth)
            .then(async (res) => {
                let results = res.data.data;
                this.setState({ 'droplets': results });
                console.log(this.state.droplets);
            });
    }
    render() {
        let image = '';
        if (this.state.userName === 'Joshua'){
            image = <img src={jos} alt="Location" />;
        }
        if (this.state.userName === 'Claire') {
            image = <img src={cla} alt="Location" />;
        }
        if (this.state.userName === 'Aditya') {
            image = <img src={adi} alt="Location" />;
        }
        return (
            <div className="content">
                <div className = "img_Container">
                    <h1>Your here!</h1>
                    {image}
                </div>

                
                <table>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Activity</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.droplets.length > 0) ? this.state.droplets.map((droplet, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{droplet.Name}</td>
                                    <td>{droplet.AddressLocality}</td>
                                    <td className="overview">{droplet.Tags}</td>
                                    <td><a href={droplet.Url}>Read More</a></td>
                                </tr>
                            )
                        }) : <tr><td colSpan="5">Loading...</td></tr>}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Movies;