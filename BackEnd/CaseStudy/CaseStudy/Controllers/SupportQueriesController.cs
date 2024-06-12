using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CaseStudy.Models;

namespace CaseStudy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupportQueriesController : ControllerBase
    {
        private readonly BankingContext _context;

        public SupportQueriesController(BankingContext context)
        {
            _context = context;
        }

        // GET: api/SupportQueries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SupportQuery>>> GetSupportQueries()
        {
            return await _context.SupportQueries.ToListAsync();
        }

        // GET: api/SupportQueries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SupportQuery>> GetSupportQuery(int id)
        {
            var supportQuery = await _context.SupportQueries.FindAsync(id);

            if (supportQuery == null)
            {
                return NotFound();
            }

            return supportQuery;
        }

        // PUT: api/SupportQueries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupportQuery(int id, SupportQuery supportQuery)
        {
            if (id != supportQuery.Id)
            {
                return BadRequest();
            }

            _context.Entry(supportQuery).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupportQueryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SupportQueries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SupportQuery>> PostSupportQuery(SupportQuery supportQuery)
        {
            _context.SupportQueries.Add(supportQuery);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSupportQuery", new { id = supportQuery.Id }, supportQuery);
        }

        // DELETE: api/SupportQueries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupportQuery(int id)
        {
            var supportQuery = await _context.SupportQueries.FindAsync(id);
            if (supportQuery == null)
            {
                return NotFound();
            }

            _context.SupportQueries.Remove(supportQuery);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SupportQueryExists(int id)
        {
            return _context.SupportQueries.Any(e => e.Id == id);
        }
    }
}
