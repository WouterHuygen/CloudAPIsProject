
using System.Linq;

namespace Model
{
    public class DBIntitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();
            if (!context.Beers.Any())
            {
                //Breweries
                var abInBev = new Brewery()
                {
                    Name = "Anheuser–Busch InBev",
                    Country = "Belgium - Brasil"
                };
                context.Breweries.Add(abInBev);

                var duvelMoortgat = new Brewery()
                {
                    Name = "Duvel Moortgat",
                    Country = "Belgium"
                };
                context.Breweries.Add(duvelMoortgat);

                //Beers
                var beer = new Beer()
                {
                    Name = "Stella Artois",
                    Type =  "Pale lager - Pilsner",
                    Description = "Stella Artois is a Belgian pilsner of 5.2% which was first brewed by Brouwerij Artois (the Artois Brewery) in Leuven, Belgium, in 1926. Since 2008, a 4% ABV version is also sold in Britain, Ireland, Canada and New Zealand.",
                    AlcoholPercentage = "5.2",
                    Brewery = abInBev
                };
                context.Beers.Add(beer);

                beer = new Beer()
                {
                    Name = "Duvel",
                    Type =  "Pale ale - Blonde",
                    Description = "Duvel is a blonde Belgian special beer of 8,5% which was first brewed by Brouwerij Duvel Moortgat in Breendonk, Belgium, in 1923.",
                    AlcoholPercentage = "8.5",
                    Brewery = duvelMoortgat
                };
                context.Beers.Add(beer);
                context.SaveChanges();
            }
        }
    }
}


                

                