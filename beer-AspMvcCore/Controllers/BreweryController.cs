using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/breweries")]
public class BreweryController : Controller
{
    private readonly LibraryContext context;

    public BreweryController(LibraryContext context)
    {
        this.context = context;
    }

    [HttpGet]         // api/v1/beers
    public List<Brewery> GetAllBreweries()
    {
        return context.Breweries.ToList();
    }

    [Route("{id}")]   // api/v1/beers/2
    [HttpGet]
    public IActionResult GetBrewery(int id)
    {
        var brewery = context.Breweries.Find(id);
        if (brewery == null)
            return NotFound();

        return Ok(brewery);
    }

    [Route("{id}/beers")]   // api/v1/beers/2
    [HttpGet]
    public IActionResult GetBeersForBrewery(int id)
    {
        var brewery = context.Breweries
                .Include(d => d.Beers)
                .SingleOrDefault(d => d.Id == id);

        if (brewery == null)
            return NotFound();

        return Ok(brewery.Beers);
    }

    [HttpPost]
    public IActionResult CreateBrewery([FromBody] Brewery newBrewery)
    {
        context.Breweries.Add(newBrewery);
        context.SaveChanges();
        return Created("", newBrewery);
    }

    [HttpPut]
    public IActionResult UpdateBrewery([FromBody] Brewery updateBrewery)
    {
        var orgBrewery = context.Breweries.Find(updateBrewery.Id);
        if (orgBrewery == null)
            return NotFound();

        orgBrewery.Name = updateBrewery.Name;
        orgBrewery.Country = updateBrewery.Country;
        
        
        context.SaveChanges();
        return Ok(orgBrewery);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteBrewery(int id)
    {
        var brewery = context.Breweries.Find(id);
        if (brewery == null)
            return NotFound();

        context.Breweries.Remove(brewery);
        context.SaveChanges();
        return NoContent();
    }
}