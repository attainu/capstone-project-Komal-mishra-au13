Project Documentation


-> Online Video Streaming App(Theat-play)

step 1: git clone <repo_url>
step 2: cd <repo_name>
step 3: git checkout dev
step 4: open folder in your code editor

----------------------------------------Technologies used for Frontend--------------------------------
@chakra-ui/react: ^1.6.4
@emotion/react: ^11.4.0
@emotion/styled: ^11.3.0
@material-ui/core: ^4.11.4
@material-ui/icons: ^4.11.2
@material-ui/lab: ^4.0.0-alpha.58
@testing-library/jest-dom: ^5.11.4
@testing-library/react:^11.1.0
@testing-library/user-event: 12.1.10
axios: ^0.21.1
framer-motion: ^4.1.17
react: ^17.0.2
react-alice-carousel: ^2.5.1
react-dom: ^17.0.2
react-router-dom: ^5.2.0
react-scripts: ^4.0.3
web-vitals: ^2.0.1

-------------------------------Technologies used for Backend---------------------------------------------------
bcryptjs: ^2.4.3
colors: ^1.4.0
concurrently: 6.2.0
dotenv: ^10.0.0
express: ^4.17.1
express-async-handler: ^1.1.4
jsonwebtoken: ^8.5.1
mongoose: ^5.12.14
nodemon: ^2.0.7

=> HOW TO START -------

-> open code in code editor 
npm i               // to install and update all the dependencies in main folder

-> cd client
npm i               // to install all the dependency in client side

-> cd ..            // to go back to main folder

-> npm run dev     // it will run  backend and frontend concurrently

-> Open browser and type in url-
localhost:3000 



**********************************USER ROUTE *****************************************************
1.Route for signup
localhost:3000/auth
User can signup by giving detail like name , emailid, password and confirm password.It will redirect to profile page. 

2.Route for login
localhost:3000/auth
After signup , user can login by giving registered emailid and password.

3.Route for profile
localhost:3000/profile
After signup , it will go to Home page . In that user can select the option of video - Trending , Movies and series .

4.Route for Trending
localhost:3000/Trending
In profile page user can select according to their choice . 

5.Route for Movies
localhost:3000/Movies
In profile user can select movies and when user click on movie , information about movie will open with the cast name. To watch the trailer , user have to click on "watch the trailer". It will open in youtube.

6.Route for  Series
localhost:3000/Series
In series , user can check series.

7. Route for Search
localhost:3000/search
In search page , user can either seach Movies or Series. 

If user want to logout , just have to click the logout button given on the right - bottom in his profile. 
It will redirect to the home page . 

FOR API KEY  ---
 The movie database  api key- 
   link - https://www.themoviedb.org/

Project Deployment link- 
backend -https://vedio-play.herokuapp.com/
frontend- https://theat-play-app.netlify.app/





************************************************************************************************************************************************





