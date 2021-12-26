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
  
// Strategy is the common interface for different algorithms.
interface Strategy 
{
    sortMovies(movies: Movie[])
}
  
class EnglishStrategy implements Strategy 
{
    public sortMovies(movies: Movie[]) 
    {
        movies.sort((movieA, _) => 
        {
            return movieA.recommended ? 1 : -1;
        })
    }
}
  
class ChineseStrategy implements Strategy 
{
    public sortMovies(movies: Movie[]) 
    {
        movies.sort((movieA, movieB) => 
        {
            return movieA.publishedDate > movieB.publishedDate ? 1 : -1;
        })
    }
}
//
class TaiwaneseHokkienStrategy implements Strategy  //台語 
{
    public sortMovies(movies: Movie[]) 
    {
        movies.sort((movieA, _) => 
        {
            
        })
    }
}
//
class DefaultStrategy implements Strategy 
{
    public sortMovies(movies: Movie[]) {}
}
  
// Context is the object to be used by the client (BookStore).
class Context
{
    strategy: Strategy;
    constructor(strategy: Strategy) 
    {
        this.strategy = strategy;
    }
  
    public setStrategy(strategy: Strategy) 
    {
        this.strategy = strategy;
    }
  
    public homePageMovies(allMovies: Movie[]): Movie[] 
    {
        const newOrder = [...allMovies];
        this.strategy.sortMovies(newOrder);
        return newOrder;
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
        let context: Context;
        if (userLanguage == 'en') 
        {
            context = new Context(new EnglishStrategy());
        }
        else if (userLanguage == 'zh')
        {
            context = new Context(new ChineseStrategy());
        }
        else 
        {
            context = new Context(new DefaultStrategy());
        }
        console.log(context.homePageMovies(this.allMovies));
    }
}
  
const movieStore = new PTS_MovieStore()
console.log('zh')
movieStore.showHomePage('zh')
console.log('en')
movieStore.showHomePage('en')