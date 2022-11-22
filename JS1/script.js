"use strict";
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');  
    } 
}
start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false

};

// const a =prompt("Один из последних просмотреных фильмов?", ''),
//       b =prompt("на сколько оцените его?", ''),
//       c =prompt("Один из последних просмотреных фильмов?", ''),
//       d =prompt("на сколько оцените его?", '');
// personalMovieDB.movies [a]=b;
// personalMovieDB.movies [c]=d;

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a =prompt("Один из последних просмотреных фильмов?", ''),
              b =prompt("на сколько оцените его?", '');
    
        if (a!= null && b != null && a!= '' && b!= '' && a.length < 50){
           personalMovieDB.movies [a]=b;
           console.log ('done');
        } else {
            console.log('error');
            i--;
        }
    } 
    
}
rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ('Watched quite a few films');
        
    }else if (personalMovieDB.count >10 && personalMovieDB.count < 30){
        console.log('You are a classic ');
    } else if (personalMovieDB.count >=30) {
        console.log('You are a cinephile ');
    } else {
        console.log('error');
    }
}

detectPersonalLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i =1; i<=3; i++) {
        personalMovieDB.genres [i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres ();
