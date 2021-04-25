import React from "react";
import axios from "axios";

class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            food: [],
            jwt: {},
        }
    }

    async componentDidMount() {
        const jwt = localStorage.getItem('Token') || '';
        console.log(jwt);
        const temp = [];
        const auth = {
            jwt,
        };
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
        axios
            .post("https://activityfinder1.herokuapp.com/restaurantdata", auth, {
                headers: headers
            })
            .then(async (res) => {
                var results = await res.data.data;
                // this.setState({ 'food': results });
                for (var key in results) {
                    temp.push({
                        restaurant: key,
                        rating: (results[key] * 10).toFixed(2)
                    });
                } this.setState({ 'food': temp });
            });
    }
    render() {
        return (
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>Restaurant_Name</th>                            
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.food.length > 0) ? this.state.food.map((droplet, index) => {
                            return (
                                <tr key={index}>
                                    <td>{droplet.restaurant}</td>
                                    <td>{droplet.rating}</td>
                                </tr>
                            )
                        }) : <tr><td colSpan="5">Loading...</td></tr>}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Restaurants;