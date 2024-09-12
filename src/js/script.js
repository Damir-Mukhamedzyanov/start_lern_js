'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.const < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.const < 31 && personalMovieDB.const > 10) {
    alert('Вы классический зритель');
} else if (personalMovieDB.const > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i = 1; i <= 2; i++) {
    const j = prompt('Один из последних просмотренных фильмов?', ''),
        k = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[j] = k;
    if (j.length === 0 || j.length > 50 || j === false || k === false) {
        i = 1;
    }
}

console.log(personalMovieDB);