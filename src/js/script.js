'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == 'null' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

let personalMovieDB = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememderMyFilms() {
    for (let i = 0; i < 2; i++) {
        const j = prompt('Один из последних просмотренных фильмов?', ''),
            k = prompt('На сколько оцените его?', '');
        personalMovieDB.movies[j] = k;
        if (j.length === 0 || j.length > 50 || j === false || k === false) {
            i--;
        }
    }
}

// rememderMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.const < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.const < 31 && personalMovieDB.const > 10) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.const > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

// writeYourGenres();
