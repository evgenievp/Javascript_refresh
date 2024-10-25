function moviesParser(input) {

    function addMovie(name) {
        movies.push({ name });
    }
    function addDirector(name, director) {
        let movie = movies.find((m) => m.name === name);
        if (movie) {
            movie.director = director;
        }
    }   
    function addDate(name, date) {
        let movie = movies.find((m) => m.name === name);
        if (movie) {
            movie.date = date;
        }
    } 
    let movies = [];
    for (const line of input) {
        let commandTokens = line.split(' ');
        if (line.includes('addMovie')) {
            let movieName = commandTokens.slice(1).join(" ");
            addMovie(movieName);
        }
        else if (line.includes('directedBy')) {
            let indexOfCommand = commandTokens.indexOf('directedBy');
            let movieName = commandTokens.slice(0, indexOfCommand).join(" ");
            let director = commandTokens.slice(indexOfCommand + 1).join(" ");
            addDirector(movieName, director);
        }
        else {
            let indexOfCommand = commandTokens.indexOf('onDate');
            let movieName = commandTokens.slice(0, indexOfCommand).join(" ");
            let date = commandTokens.slice(indexOfCommand + 1).join(" ");
            addDate(movieName, date);
        }
    }



    for (let movie of movies) {
        if (movie.hasOwnProperty('director') && movie.hasOwnProperty('name') && movie.hasOwnProperty('date'))
            console.log(JSON.stringify(movie));
        }

}
