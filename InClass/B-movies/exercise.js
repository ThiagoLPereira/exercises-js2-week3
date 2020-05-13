/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function

function showMovies() {
  var allMoviesDiv = document.querySelector("#all-movies");
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var pElement = document.createElement("p");
    pElement.innerText = movie.title + "by" + movie.director;
    allMoviesDiv.appendChild(pElement);
  }
}
setTimeout(showMovies, 1000);

// create a new movie object for your favorite movie

var movie1 = {
  title: "The Silence of the Lambs",
  director: "Jonathan Demme",
  type: "thriller",
  haveWatched: true,
};
var movie2 = {
  title: "Fight Club",
  director: "David Fincher",
  type: "drama/thriller",
  haveWatched: true,
};

// create addMovies function

function addMovie(newMovie) {
  movies.push(newMovie);
}

//

setTimeout(function () {
  addMovie(movie2);
  showMovies();
}, 2000);

//

var saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", saveMovie);

function saveMovie(event) {
  console.log("Save movie");
  var movieTitleInput = document.querySelector("#movieTitle");
  var movieTitle = movieTitleInput.value;

  var movieDirectorInput = document.querySelector("#movieDirector");
  var movieDirector = movieDirectorinput.value;

  var movieTypeInput = document.querySelector("#movieDirector");
  var movieDirector = movieDirectorInput.value;

  var movieTypeInput = document.querySelector("#movieType");
  var movieType = movieTypeInput.value;

  var movieWatchedInput = document.querySelector("#movieWatched");
  var movieWatched = movieWatchedInput.checked;

  if (movieTitle && movieDirector && movieType) {
    var movie = {
      title: movieTitle,
      director: movieDirector,
      type: movieType,
      haveWatched: movieWatched,
    };
    console.log(movie);

    addMovie(movie);
    showMovies();
  }
  event.preventDefault();
}
