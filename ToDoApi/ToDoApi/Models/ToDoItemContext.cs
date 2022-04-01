using Microsoft.EntityFrameworkCore;

namespace ToDoApi.Models
{
    public class ToDoItemContext : DbContext
    {
        public ToDoItemContext(DbContextOptions<ToDoItemContext> options) : base(options) { }

        public DbSet<ToDoItem> ToDoItem { get; set; }
    }
}
