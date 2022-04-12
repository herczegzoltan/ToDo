using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ToDoApi.Models
{
    public class ToDoItemStep
    {
        [Key]
        public int ToDoItemStepId { get; set; }

        [ForeignKey("FK_ToDoItem")]
        public int ToDoItemId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        public bool IsCompleted { get; set; }
    }
}
