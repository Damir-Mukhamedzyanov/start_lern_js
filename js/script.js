'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let ownMovieFilm = prompt('Один из последних просмотренных фильмов?', '');
let ownЕstimation = prompt('На сколько оцените его?', '');

let twoMovieFilm = prompt('Один из последних просмотренных фильмов?', '');
let twoЕstimation = prompt('На сколько оцените его?', '');

personalMovieDB.movies[ownMovieFilm] = ownЕstimation;
personalMovieDB.movies[twoMovieFilm] = twoЕstimation;

console.log(personalMovieDB);