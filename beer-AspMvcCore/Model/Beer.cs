using Newtonsoft.Json;

namespace Model
{
    public class Beer
    {
        public int Id { get; set; }
        public string Name { get; set; }
         public string Type { get; set; }
         public string Description { get; set; }
        public string AlcoholPercentage { get; set; }
        public Brewery Brewery { get; set; }
        // public int BreweryId {get;set;}
    }
}