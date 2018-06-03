using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Brewery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public ICollection<Beer> Beers { get; set; }
    }   
}