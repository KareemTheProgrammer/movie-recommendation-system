var movieList = [];

function addMovie(){

var name = document.getElementById("movieName").value;
var genre = document.getElementById("genre").value;
var rating = document.getElementById("rating").value;

if(name=="" || genre=="" || rating==""){
alert("Please fill all fields");
return;
}

if(rating<1 || rating>10){
alert("Rating must be between 1 and 10");
return;
}

var movie={
name:name,
genre:genre,
rating:rating
};

movieList.push(movie);

displayMovies(movieList);

updateCount();

clearInputs();

}

function displayMovies(list){

var temp="";

if(list.length==0){

temp=`<tr><td colspan="4">No movies added yet</td></tr>`;

}

else{

for(var i=0;i<list.length;i++){

temp+=`

<tr>

<td>${list[i].name}</td>
<td>${list[i].genre}</td>
<td>${createStars(list[i].rating)}</td>

<td>

<button onclick="deleteMovie(${i})">

Delete

</button>

</td>

</tr>

`;

}

}

document.getElementById("tableBody").innerHTML=temp;

}

function deleteMovie(index){

movieList.splice(index,1);

displayMovies(movieList);

updateCount();

}

function updateCount(){

document.getElementById("movieCount").innerText=movieList.length;

}

function clearInputs(){

document.getElementById("movieName").value="";
document.getElementById("genre").value="";
document.getElementById("rating").value="";

}

function searchMovies(){

var search=document.getElementById("searchInput").value.toLowerCase();

var filtered=[];

for(var i=0;i<movieList.length;i++){

if(movieList[i].name.toLowerCase().includes(search)){

filtered.push(movieList[i]);

}

}

displayMovies(filtered);

}

function recommendMovies(){

var genre=document.getElementById("recommendGenre").value;

var result="";

for(var i=0;i<movieList.length;i++){

if(movieList[i].genre==genre){

result+=`

<div class="movieCard">

<h3>${movieList[i].name}</h3>

<p>Genre: ${movieList[i].genre}</p>

<p>Rating: ${movieList[i].rating}</p>

</div>

`;

}

}

if(result==""){

result="No recommendations yet.";

}

document.getElementById("recommendResult").innerHTML=result;

}

function createStars(rating){

var stars="";

for(var i=0;i<rating;i++){

stars+="⭐";

}

return stars;

}