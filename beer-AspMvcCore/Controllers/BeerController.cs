using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/beers")]
public class BeerController : Controller
{
    private readonly LibraryContext context;

    public BeerController(LibraryContext context)
    {
        this.context = context;
    }

    [HttpGet]         // api/v1/beers
    public List<Beer> GetAllBeers(string type, string name, int? page, string sort, int length = 5, string dir = "asc")
    {
        IQueryable<Beer> query = context.Beers;

        if (!string.IsNullOrWhiteSpace(type))
            query = query.Where(d => d.Type == type);
        if (!string.IsNullOrWhiteSpace(name))
            query = query.Where(d => d.Name == name);

        if (!string.IsNullOrWhiteSpace(sort))
        {
            switch (sort)
            {
                case "name":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.Name);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.Name);
                    break;
                case "alcoholpercentage":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.AlcoholPercentage);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.AlcoholPercentage);
                    break;
            }
        }

        if (page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.ToList();
    }

    [Route("{id}")] 
    [HttpGet]
    public IActionResult GetBeer(int id)
    {
        var beer = context.Beers.Find(id);
        if (beer == null)
            return NotFound();

        return Ok(beer);
        /*var beer = context.Beers
                    .Include(d => d.Brewery)
                    .SingleOrDefault(d => d.Id == id);

        if (beer == null)
            return NotFound();

        return Ok(beer);*/
    }

    [Route("{id}/brewery")]
    [HttpGet]
    public IActionResult GetBreweryForBeer(int id)
    {
        var beer = context.Beers
                    .Include(d => d.Brewery)
                    .SingleOrDefault(d => d.Id == id);
        if (beer == null)
            return NotFound();

        return Ok(beer.Brewery);
    }

    [HttpPost]
    public IActionResult CreateBeer([FromBody] Beer newBeer)
    {
        context.Beers.Add(newBeer);
        context.SaveChanges();
        return Created("", newBeer);
    }

    [HttpPut]
    public IActionResult UpdateBeer([FromBody] Beer updateBeer)
    {
        var orgBeer = context.Beers.Find(updateBeer.Id);
        if (orgBeer == null)
            return NotFound();

        orgBeer.Name = updateBeer.Name;
        orgBeer.Type = updateBeer.Type;
        orgBeer.Description = updateBeer.Description;
        orgBeer.AlcoholPercentage = updateBeer.AlcoholPercentage;
        orgBeer.Image = updateBeer.Image;

        context.SaveChanges();
        return Ok(orgBeer);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteBeer(int id)
    {
        var beer = context.Beers.Find(id);
        if (beer == null)
            return NotFound();

        context.Beers.Remove(beer);
        context.SaveChanges();
        return NoContent();
    }
}