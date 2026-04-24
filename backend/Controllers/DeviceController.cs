using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DeviceController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DeviceController(AppDbContext context)
        {
            _context = context;
        }

        // ================= GET ALL =================
        [HttpGet]
        public IActionResult GetAll()
        {
            var data = _context.Devices.ToList();
            return Ok(data);
        }

        // ================= GET BY ID =================
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var device = _context.Devices.Find(id);

            if (device == null)
                return NotFound();

            return Ok(device);
        }

        // ================= POST =================
        [HttpPost]
        public IActionResult Create(Device device)
        {
            _context.Devices.Add(device);
            _context.SaveChanges();

            return Ok(device);
        }

        // ================= PUT =================
        [HttpPut("{id}")]
        public IActionResult Update(int id, Device newData)
        {
            var device = _context.Devices.Find(id);

            if (device == null)
                return NotFound();

            device.Name = newData.Name;
            device.Price = newData.Price;

            _context.SaveChanges();

            return Ok(device);
        }

        // ================= DELETE =================
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var device = _context.Devices.Find(id);

            if (device == null)
                return NotFound();

            _context.Devices.Remove(device);
            _context.SaveChanges();

            return Ok();
        }
    }
}