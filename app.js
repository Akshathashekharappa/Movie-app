

const api = 'https://www.omdbapi.com/?apikey=7c258846&t='

let found = document.getElementById('found');
let notfound = document.getElementById('notfound');

function searchMovie(){
    let input = document.getElementById('moviename');
    let query = api + input.value;
    
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        if(data.Error){
            
            notfound.classList.remove('d-none');
            found.classList.add('d-none');
            document.getElementById('namemovie').innerText = input.value;
        }else{
            
            notfound.classList.add('d-none');
            found.classList.remove('d-none');
        
       document.getElementById('title').innerText = data.Title;
       document.getElementById('plot').innerText = data.Plot;
        document.getElementById('release').innerText = data.Released;
        document.getElementById('rated').innerText = data.Rated;
        document.getElementById('genre').innerText = data.Genre;
        document.getElementById('director').innerText = data.Director;
        document.getElementById('actors').innerText = data.Actors;
        document.getElementById('language').innerText = data.Language;
        document.getElementById('boxoffice').innerText = data.BoxOffice;
        document.getElementById('myposter').src = data.Poster;
    }
    })
}
