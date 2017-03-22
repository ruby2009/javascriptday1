favoriteMovies = []

favoriteMovies.push(
  {
  title: "Friday Night Lights",
  directorList: ["Peter Berg"],
  genre: "Action",
  year: "2004",
  actorList: ["Billy Bob Thornton", "Lucas Black", "Garrett Hedlund"],
  stars: "7.3",
  meta: "70"
  }
)

favoriteMovies.push(
  {
  title: "Black Hawk Down",
  directorList: ["Ridley Scott"],
  genre: "Drama",
  year: "2001",
  actorList: ["Josh Hartnett", "Ewan McGregor", "Tom Sizemore"],
  stars: "7.7",
  meta: "74"
  }
)

favoriteMovies.push(
  {
  title: "300",
  directorList: ["Zack Snyder"],
  genre: "Action",
  year: "2006",
  actorList: ["Gerard Butler", "Lena Headey", "Dominic West"],
  stars: "7.7",
  meta: "52"
  }
)

favoriteMovies.push(
  {
  title: "Happy Gilmore",
  directorList: ["Dennis Dugan"],
  genre: "Comedy",
  year: "1996",
  actorList: ["Adam Sandler ", "Christopher McDonald", "Julie Bowen"],
  stars: "7.0",
  meta: "31"
  }
)

favoriteMovies.push(
  {
  title: "Good Will Hunting",
  directorList: ["Gus Van Sant"],
  genre: "Drama",
  year: "1997",
  actorList: ["Matt Damon", "Robin Williams", "Ben Affleck"],
  stars: "8.3",
  meta: "70"
  }
)

//alphabetic
favoriteMovies.sort(function(a, b) {
  var titleA = a.title.toUpperCase(); // ignore upper and lowercase
  var titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
})

console.log(favoriteMovies)

console.log(JSON.stringify(favoriteMovies))

var cols = ['title', 'directorList', 'genre', 'year', 'actorList', 'stars', 'meta']

for (var i = 0; i < favoriteMovies.length; i++) {
  $('table').append('<tr></tr>');
  for (var j = 0; j < cols.length; j++) {
    $('table tr:last-child').append('<td>' + favoriteMovies[i][cols[j]] + '</td>');
  }
}

element = document.getElementById('moarjabbascript')

element.innerHTML += "<div id=\"threehundred\"><h2>300</h2><ul></ul></div>"

list = document.querySelector("#threehundred ul")

fetch("http://www.omdbapi.com/?t=300")
.then(function(response){
  return response.json()
}).then(function(data){
  data.results.forEach(function(film){
    list.innerHTML += "<li>" + film.Runtime + "</li>"
  })
})
