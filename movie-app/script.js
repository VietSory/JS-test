
function getClassByRate(vote){
    if (vote>=8){
        return "green";
    } else if (vote>=5){
        return "orange";
    } else {
        return "red";
    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm){
        getMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});