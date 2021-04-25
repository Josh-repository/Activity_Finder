import React from "react";
import axios from "axios";

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            droplets: [],
            jwt: {},
            message: '',
            success:'',
        }
    }

    async componentDidMount() {
        const jwt = localStorage.getItem('Token') || '';
        console.log(jwt);
        const auth = {
            jwt,
        };
        axios
            .post("https://activityfinder1.herokuapp.com/recommendation", auth)
            .then(async (res) => {
                let results = res.data.data;
                this.setState({ 'success': res.data.success});
                this.setState({ 'message': res.data.message });
                this.setState({ 'droplets': results });
                console.log(this.state.success);
            });
    }
    render() {
        return (
            <div className="content">
                <h3>{this.state.message}</h3>
               {(() =>{
                if(this.state.success === false) {
                return (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Movie_Name</th>
                            <th>Overview</th>
                            <th>Rating</th>
                            <th>Poster</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.droplets.length > 8) ? this.state.droplets.map((droplet, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{droplet.id}</td>
                                    <td>{droplet.original_title}</td>
                                    <td className="overview">{droplet.overview}</td>
                                    <td>{droplet.vote_average}</td>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${droplet.poster_path}`} />
                                    </td>
                                </tr>
                            )
                        }) : <tr><td colSpan="5">Loading...</td></tr>}
                    </tbody>
                </table>)}})()}
                {(() => {
                    if (this.state.success === true) {
                        return (<table>
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
                        </table>)
                    }
                })()}
            </div>
        );
    }
}
export default Movies;