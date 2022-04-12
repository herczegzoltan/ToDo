﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ToDoApi.Models;

#nullable disable

namespace ToDoApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220412130125_AddIsCompletedToStep")]
    partial class AddIsCompletedToStep
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ToDoApi.Models.ToDoItem", b =>
                {
                    b.Property<int>("ToDoItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ToDoItemId"), 1L, 1);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("DueDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(10)");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("bit");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("ToDoItemId");

                    b.ToTable("ToDoItem");
                });

            modelBuilder.Entity("ToDoApi.Models.ToDoItemStep", b =>
                {
                    b.Property<int>("ToDoItemStepId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ToDoItemStepId"), 1L, 1);

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("bit");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("ToDoItemId")
                        .HasColumnType("int");

                    b.HasKey("ToDoItemStepId");

                    b.HasIndex("ToDoItemId");

                    b.ToTable("ToDoItemStep");
                });

            modelBuilder.Entity("ToDoApi.Models.ToDoItemStep", b =>
                {
                    b.HasOne("ToDoApi.Models.ToDoItem", null)
                        .WithMany("Steps")
                        .HasForeignKey("ToDoItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ToDoApi.Models.ToDoItem", b =>
                {
                    b.Navigation("Steps");
                });
#pragma warning restore 612, 618
        }
    }
}
