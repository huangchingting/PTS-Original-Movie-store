class Movie
{
    title: string;
    recommended: boolean;
    publishedDate: Date;
  
    constructor(title: string, recommended: boolean, publishedDate: Date) 
    {
        this.title = title;
        this.recommended = recommended;
        this.publishedDate = publishedDate;
    }
  }
  
class PTS_MovieStore 
{
    allMovies: Movie[];
    constructor()
    {
        const movie1 = new Movie('movie 1', true, new Date('2021-01-01'));
        const movie2 = new Movie('movie 2', false, new Date('2021-09-17'));
        this.allMovies = [movie1, movie2];
    }
  
    public showHomePage(userLanguage: string) 
    {
        const movies = [...this.allMovies];
        if (userLanguage == 'en') 
        {
            movies.sort((movieA, _) => 
            {
                return movieA.recommended ? 1 : -1;
            })
        } 
        else if (userLanguage == 'zh') 
        {
            movies.sort((movieA, movieB) => 
            {
            return movieA.publishedDate > movieB.publishedDate ? 1 : -1;
            })
        }
    console.log(movies);
    }
}
  
const movieStore = new PTS_MovieStore()
console.log('zh')
movieStore.showHomePage('zh')
console.log('en')
movieStore.showHomePage('en')