const movies = require('./data/movies.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so
//  they will pop up multiple times in the array of directors. 
//  How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (allMovies) => {
  const uniqueDirectors = [];

  allMovies.map(movie => {
    if (uniqueDirectors.indexOf(movie.director) === -1) {
      uniqueDirectors.push(movie.director)
    }
  })

  return `${uniqueDirectors.length} directors`
};

// console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (allMovies) => {
  const filteredMovies = allMovies.filter((movie) => movie.director === 'Steven Spielberg');
  console.log(`Steven Spielberg has directed ${filteredMovies.length} drama movies!`);
}

// console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (allMovies) => {
  const rates = allMovies.map(movie => movie.rate);
  const ratesAverage = rates.reduce((a, b) => a + b / rates.length, 0);
  return `The rating average of all movies is ${ratesAverage.toFixed(2)}`
}
// console.log(ratesAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (allMovies) => {
  const dramaMovies = allMovies.filter((movie) => movie.genre.includes('Drama'));
  const ratings = dramaMovies.map((movie) => movie.rate);
  
  const ratingAverage = ratings.reduce((a, b) => a + b / ratings.length, 0);
  return `Drama movies rating average is ${ratingAverage.toFixed(2)}`
}

// console.log(dramaMoviesRate(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (allMovies) => allMovies.sort((a, b) => a.year - b.year);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (allMovies) => {
  const movies = allMovies.slice(0, 20);
  const alphabeticalTitles = movies.sort((a, b) => a.title.localeCompare(b.title));
  return alphabeticalTitles
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (allMovies) => {
  const duration = allMovies.map(movie => {
    let srt = movie.duration.split(' ');

    const hrs = srt[0].slice(0,1);
    const mins = srt[1];

    mins === undefined ? '' : movie.duration = `${(hrs * 60) + parseInt(mins.slice(0, -3)) } mins`;
    
    return  movie;
    
  });

  return duration
  
}

// console.log(turnHoursToMinutes(movies));


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const average = (moviesArray) => moviesArray.reduce((a, b) => a + b , 0)/ moviesArray.length;

const ratingsByYear =  (year, movieArray) => {
  return movieArray.filter((movie) => movie.year === year)
    .map(movie => movie.rate)
}

const yearsMapper = (moviesArray) => {
  return moviesArray.map(movie => {
    const res = { year: `${movie.year}`, ratings : ratingsByYear(movie.year, moviesArray) }
    return res;
  })
}

const moviesAvg = (movieArray) => { 
const uniqueArr = [];
const years = [];

  yearsMapper(movieArray).map(item => {
    if (!years.includes(item.year)) {
      years.push(item.year)
      uniqueArr.push({ 
        year: `${item.year}`, ratesAverage : Number(average(item.ratings).toFixed(2))
      })
    }
  })
    
  return uniqueArr
  
}

const winnerMovie = (moviesArr) => {
  const maxRate = moviesArr.reduce((prev, curr) => (prev.ratesAverage > curr.ratesAverage) ? prev : curr);
  return `The best year was ${maxRate.year} with a yearly rate average of ${maxRate.ratesAverage} !!`
}

console.log(winnerMovie(moviesAvg(movies)));

