using System.Diagnostics;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using sample.ui.Models;

namespace sample.ui.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        ViewBag.properties = new
        {
            url = Request.GetDisplayUrl(),
            blogs = Entries.GetTitles()
        };
        return View();
    }

    [Route("blog/{id}")]
    public IActionResult Blog([FromRoute] string id)
    {
        ViewBag.properties = new
        {
            url = Request.GetDisplayUrl(),
            blog = Entries.GetBlog(id)
        };
        return View("Index");
    }


    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
