"use strict";
const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');
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

if (personalMovieDB.count < 10) {
    console.log ('Watched quite a few films');
    
}else if (personalMovieDB.count >10 && personalMovieDB.count < 30){
    console.log('You are a classic ');
} else if (personalMovieDB.count >=30) {
    console.log('You are a cinephile ');
} else {
    console.log('error');
}

console.log (personalMovieDB);