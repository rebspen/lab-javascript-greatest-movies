/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function calculateAverageMovieRate(someArray){
const sumValues = someArray.reduce((accumulator, value) => {
    return (accumulator + value.rate);
  }, 0);
return sumValues / someArray.length;
}
// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(someArray){
    const numberOfDramas = someArray.filter((value) => {
        if (value.genre.includes('Drama')) {
            return true;
          } else {
            return false;
          }
        });
    if (numberOfDramas.length > 0){
        return calculateAverageMovieRate(numberOfDramas);
    } else {
        return 0;
    }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByYear(someArray){
    someArray.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1) : -1 )
    return someArray;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies(someArray){
const numberOfSS = someArray.filter((value) => {
    if (value.director === 'Steven Spielberg' && value.genre.includes("Drama")) {
        return true;
      } else {
        return false;
      }
    });
    return numberOfSS.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(someArray){
    someArray.sort((a, b) => (a.title > b.title) ? 1 : -1);
    const onlyTitles = someArray.map((value) => {
  return value.title
});
    const top20 = onlyTitles.slice(0,20);
    return top20
    console.log(top20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(someArray){
    const transformMins = someArray.map((value) => {
    return {duration: value.duration.split(" ")};
});

   const calculateMins = transformMins.map((value) => {
    let totalmins = 0;
    for(i = 0; i < value.duration.length ; i++){
    if (value.duration[i].includes("h")){
        totalmins += parseInt(value.duration[i])*60;
    } else {
        totalmins += parseInt(value.duration[i]);
    }
}
return {
  ...someArray,
  duration: totalmins
};

});
console.log(calculateMins);
return calculateMins;
}

turnHoursToMinutes(MOVIES);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

