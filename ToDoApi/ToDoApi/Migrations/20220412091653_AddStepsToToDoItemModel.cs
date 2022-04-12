using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ToDoApi.Migrations
{
    public partial class AddStepsToToDoItemModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ToDoItemStep",
                columns: table => new
                {
                    ToDoItemStepId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    ToDoItemId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ToDoItemStep", x => x.ToDoItemStepId);
                    table.ForeignKey(
                        name: "FK_ToDoItemStep_ToDoItem_ToDoItemId",
                        column: x => x.ToDoItemId,
                        principalTable: "ToDoItem",
                        principalColumn: "ToDoItemId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ToDoItemStep_ToDoItemId",
                table: "ToDoItemStep",
                column: "ToDoItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ToDoItemStep");
        }
    }
}
