using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sample.ui.Models;

namespace sample.ui.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var result = Entries
                .GetTitles();
            if (result == null || result.Count() == 0)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var blog = Entries.GetBlog(id);
            if (blog == null)
            {
                return NotFound();
            }
            return Ok(blog);
        }

    }
}
