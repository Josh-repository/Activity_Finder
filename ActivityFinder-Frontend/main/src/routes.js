import Chatbot from "./views/chatbot/chatbot.view.js";
import Movies from "./views/movies.view.js";
import Places from "./views/places.view.js";
import Restaurants from "./views/restaurants.view.js";
import Recommendation from "./views/weekend.recommendation.view.js";
import Weather from "./views/weather.view.js";

var routes = [
    {
        path: "/weather",
        name: "Live Weather",
        component: Weather,
        layout: "/home",
        requiresAuth: true,
    },
    {
        path: "/chatbot",
        name: "Chatbot",
        component: Chatbot,
        layout: "/home",
        requiresAuth: true,
    },
    {
        path: "/movies",
        name: "Movies",
        component: Movies,
        layout: "/home",
        requiresAuth: true,
    },
    {
        path: "/restaurants",
        name: "Restaurants",
        component: Restaurants,
        layout: "/home",
        requiresAuth: true,
    },
    {
        path: "/places",
        name: "Places",
        component: Places,
        layout: "/home",
        requiresAuth: true,
    },
    {
        path: "/recommendation",
        name: "Recommendation",
        component: Recommendation,
        layout: "/home",
        requiresAuth: true,
    },
];
export default routes;
