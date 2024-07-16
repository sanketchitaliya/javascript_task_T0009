// const movies = [
//     { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
//     { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
// ]

// function getMovies(){
// setTimeout(() => {
//     movies.forEach((movie, index) => {
//         console.log(movie.title)
//     })
// }, 1000);
// }

// function createMovies(movie){
// setTimeout(() => {
//     movies.push(movie)
// }, 2000);
// }

// getMovies();


// createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.` });


const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie, sanket){
setTimeout(() => {
    movies.push(movie);
    sanket();
}, 2000);
}


createMovies({ title: `Return of the Jedi`, 
            body:`Luke Skywalker attempts to bring his father back to the light side of the Force. 
            At the same time, the rebels hatch a plan to destroy the second Death Star.` }, getMovies);