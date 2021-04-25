import React from "react";
import axios from "axios";

class Movies extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            droplets: [],
            jwt:{}, 
            path:'',          
        }
    }
    
    // componentDidMount() {
    //     axios
    //         .post('https://activityfinder1.herokuapp.com/moviedata?movie=all', this.jwt)
    //         // .then(res => res.json())
    //         // .then(json => json.droplets)
    //         // .then(droplets => this.setState({ 'droplets': droplets }))
    // }
    async componentDidMount() {
        const jwt = localStorage.getItem('Token') || '';
        console.log(jwt);
        const auth = {
            jwt,
        };
        axios
            .post("https://activityfinder1.herokuapp.com/moviedata?movie=all",auth)
            .then(async (res) => {
                let results = res.data.data;
                this.setState({'droplets': results});
                console.log(this.state.droplets);
            });
        }    
    render() {
        return (   
            <div className="content">
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
                    {(this.state.droplets.length > 0) ? this.state.droplets.map((droplet, index) => {
                        return (
                            <tr key={index}>
                                <td>{droplet.id}</td>
                                <td>{droplet.original_title}</td>
                                <td className = "overview">{droplet.overview}</td>
                                <td>{droplet.vote_average}</td>
                                <td><img src={`https://image.tmdb.org/t/p/w500${droplet.poster_path}`} />
                                </td>
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