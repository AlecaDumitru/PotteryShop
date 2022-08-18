using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class userrecovery : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AdminTypeId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_AdminTypeId",
                table: "Users",
                column: "AdminTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_AdminTypes_AdminTypeId",
                table: "Users",
                column: "AdminTypeId",
                principalTable: "AdminTypes",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_AdminTypes_AdminTypeId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_AdminTypeId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "AdminTypeId",
                table: "Users");
        }
    }
}
