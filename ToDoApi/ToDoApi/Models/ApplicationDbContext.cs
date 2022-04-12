using Microsoft.EntityFrameworkCore;

namespace ToDoApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<ToDoItem> ToDoItem { get; set; }

        public DbSet<ToDoItemStep> ToDoItemStep { get; set; }
    }
}
