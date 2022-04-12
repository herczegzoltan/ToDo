using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ToDoApi.Models
{
    public class ToDoItem
    {
        [Key]
        public int ToDoItemId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Description { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string DueDate { get; set; }

        public bool IsCompleted { get; set; }

        public ICollection<ToDoItemStep> Steps { get; set; }
    }
}
