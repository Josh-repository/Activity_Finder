# Activity_Finder
An adaptive application to suggest list of activities to the end user to do during weekend. Such adaptiveness was achieved through a personalized chatbot. 

# Aim:
The aim of this project is to create an adaptive application that provides suggested activities to users who are looking for something to do during their spare time. These activities include restaurants, movies and tourist attractions. The project uses implicit and explicit methods of gathering user data through interactions with our web application and chatbot. The web application will serve as the user interface where users can browse the ranked activities, and the chatbot enables explicit interaction and data collection in an engaging way. This chatbot will be initiated at the beginning of each user journey to gain an initial understanding of the user’s preferences, thus reducing the effects of the cold start problem. 

# Recommendation System Approaches:
As our Chatbot and Web application requires the system to be able to produce recommendations of restaurants and movies, various approaches have been identified and implemented to provide relevant suggestions when a user requests them. The following subsections highlight the processes involved.

## Content-Based Approach
Our implementation of a Content-Based Recommendation Engine is also of the item-based categorisation. Features about the item, in our case movie or restaurant, are extracted and manipulated to become a meaningful feature in our recommendation system. Our approach uses TF-IDF to extract tokens of importance in the movie overview and restaurant review corpora and based on the user preferences and cosine similarity scores of the keywords in the chatbot input, suitable suggestions are identified

## Collaborative Filtering Approach
Collaborative Filtering allows for recommendations based on what other similar users have liked. The final recommendation engine uses Singular Value Decomposition (SVD) which looks to reduce the feature space, where the process factorises the data matrices formed from the ratings dataset [2]. This algorithm was chosen after much experimentation. We found the dataset to be quite sparse (the number of users * the ratings they’ve given) and accuracy was greatly improved when we introduced this dimension reducing process. SVD groups users together based on the numeric rating each user has assigned to the movie. As we were using a pre-existing dataset, the ratings were already included for each user and we did not have to manually generate this data. This worked to our advantage as the recommendations being suggested made sense and were not random. This approach suffers greatly from the cold start problem as, without enough user ratings, groupings that are generated with SVD have very little significance. 

##  Location-Based Approach:
This type of recommendation incorporates users current location or user preferred location into algorithms to provide more relevant recommendations to the user [3]. In this project, we made use of the Euclidean distance-based algorithm to recommend tourist attraction places and to provide live weather updates to the end-users.   

## Chatbot: Dialogue Flow
Many of the features that will serve to make recommendations are taken from the user’s history. However, people are not static and their needs, and goals and interests are expected to vary over time. For this reason, the chatbot engages with clients to learn about their goals by determining what field (movies, restaurants, tourist attractions) they are interested in at any given point. The custom chatbot interacts with the user through a regular conversation and when the intent recogniser understands that the user is searching for a movie, it sends the user’s message to the “movie-parser/chatbot” server. The latter’s purpose is to, firstly, find a movie that the user liked that the suggestion should be similar to, and secondly, to find genres that the user is more interested in. It gets those features by asking direct questions to the user. Those scripted “movie-related” chatbot answers are sent back to the Central Server component and then to the front-end to replace the custom chatbot answers whenever the user’s intent was a movie suggestion. The movie chatbot flask app loads the Movielens CSV dataset using the pandas library to get all movie names. When the user is prompted to enter a similar movie’s name, the words of the string the user enters are matched to a movie name from the dataset through pattern matching via the regex library. This has to be done since users cannot be expected to remember the exact name and date of a movie. For instance, if a user enters “toy story”, the app matches it to “Toy Story (1995)”. When the user is asked about movie genres they are interested in, the system uses the nltk library to do some processing (allow different variations of lowercase, uppercase, singular etc.) and tries to find a match from a list of genres. 

Generally, the app receives two variables:
A user message (string).
A state (integer). This “state” determines which functions the program will call, and therefore, which scripted answer it will send back. 

The app sends back four variables to the Node.js component: 
The chatbot’s reply (string).
The state (integer). Incremented by one every time.
A similar movie name (string).
The list of genres (string list).

## Script for Restaurant Happy path
User: 	Hi Bot, <br />
Bot: 	Hi Aditya, What would you like to do today? Movie or Restaurant!!!!<br />
User: 	I am hungry.<br />
Bot: 	Hi Aditya, What kind of food you want?<br />
User:	I want sushi.<br />
Bot:	These are some of the best restaurants with ratings I would recommend for sushi: Blue Ginger Asian Fusion Bistro with rating 4.35, Mr Sushi with rating 5.95, Ronin Sushi with rating 5.29, Sushi.com with rating 5.95, Yoshi's Japanese Restaurant with rating 4.64.<br />
User: 	Cool thanks.<br />
Bot:	You are always welcome, Aditya.<br />
User:	Bye.<br />
Bot:	Bye Bye Aditya, See you soon.<br />

## Script for Movie Happy path
User: 	Hi Bot,<br />
Bot: 	Hi Aditya, What would you like to do today? Movie or Restaurant!!!!<br />
User: 	Suggest me some movies.<br />
Bot:	Give me the title of a movie the suggestion should be similar to, if you wish.<br />
User: 	Toy Story.<br />
Bot: 	Are there genres that you would be more interested in? We have action, horror, drama, romance, comedy, thriller, documentary, adventure, fantasy, history, sci-fi.<br />
User: 	Comedy.<br />
Bot: These are the movies you might like: Toy Story 2 (1999), A Bug's Life (1998), Monsters, Inc. (2001), Foul Hunting (1947), The Fox and the Hound 2 (2006), Finding Nemo (2003), Lilo & Stitch 2: Stitch has a Glitch (2005), Big Hero 6 (2014), Ice Age (2002), Minions (2015), Brother Bear 2 (2006).
User: Cool thanks.<br />
Bot:  You are always welcome, Aditya.<br />

# Demo:

[![Demo](https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZSUyMHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)](https://youtu.be/R7uk9QRloEQ "Click to Watch!")
# Conclusion:
Upon the completion of this project, our team successfully implemented each of the proposed functionalities for the creation of the Activity Finder adaptive application. The project uses various datasets, namely the Open Weather API, the MovieLens dataset, the Yelp dataset and the Tourist Places dataset for the development of the recommendation engine. The chatbot component serves as a unique point of information gathering in our application through engaging with the user and asking relevant questions for better adaptations. The recommendation approaches implemented are: a Content-Based Approach which uses TF-IDF to analyse the dataset and extract keywords from items, and Collaborative Filtering Approach which is based on what other similar users have liked which uses Singular Value Decomposition (SVD). In addition, we collected the geographical location of the logged-in users, through which we recommended tourist attractions nearby to visit depending on the weather. The architecture of our application includes: the front-end which uses the React framework, the Central Server which is based on Node.js and Heroku with the express framework, and the Chatbot and Recommendation Engines, both using Flask. This architecture allows for diverse features which provide users with a good experience for finding activities and restaurants in Dublin. 
