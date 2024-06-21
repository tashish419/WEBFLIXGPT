# WEBFLIXGPT
 - create react app
 - config tailwind
 - Header
 - Routing
 - Login/SignUp form
 - Toggle
 - Form validations
 - useRef() Hook
 - firebase setup
 - Deploying app to production
 - create sign up user account
 - implement sign in user API from firebase(manage user)
 - created redux store with userSlice
 - navigate to browse page after sign in 
 - implemented sign out by calling signOut API in header component
 - called updateProfile() API in login component from firebase to update user with name and photo
 - Bugfix: signUp user with displayName and photoURL
 - Bugfix: if user is not signed in redirect to /browse to login page and if user is signed in redirect to "/" to browse page.
 - unsubscribed to the onAuthStateChanged callback when Header component unmounts
 - Add hard coded values to the constants file
 - registered tmdb API and created an app over there and get "access token"
 - Got data from TMDB Now Playing Movies list API
 - created MovieSlice and updated the store with movies data
 - created main Container which conatins videoBackground and VideoTitle
 - Subscribed to the store to extract movie data to pass that data as props to videoTitle
 - added classes to Main container and its children component
 - fetched movie videos by calling videos API
 - filtered the video data and got trailer video 
 - Added addmovieTrailer action in movieSlice.reducer and updated the store with trailer data 
 - subscribed to the store.movie.movietrailer to extract data from the store
 - created custom Hook movieTrailerVideo for API call and logic
 - debug movieid = undefined 
 - added css to video background
 - brought secondary container just below main container 
 - added css to secondary container 
 - called TopRateMovies API , UpcomingMovies API, PopularMovies APIs inside custom hooks 
 - created GPT search page with gptsearch button inside header
 - using redux store build toggle functionality for GPTSearchPage - if showGPtSearch is true, only then load GPTSearchPage otherwise load MainContainer and Secondary container.
 - created GPTSearchBar with Form having input and a search button.
 - added css to GPTSearchBar and placed Background Image behind Search Bar
 

 # features
 - Login/Sign up
   - sign in/ sign up form
   - redirect to browse page
 - Browse(after login)
   - Header
   - Main Movie container
     - videoTitle 
     - videoDiscription
   - Movies Suggestions container
    - Movieslist * N(Horizontal scrolloing)

 - WebflixGPt
   - search bar
   - movie suggestions

 # Codingfeatures
  - Toggle : signIn/signUp