using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class StoreContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users { get; set; }

        public StoreContext(DbContextOptions<StoreContext> options): base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
/*            modelBuilder.Entity<AdminType>().Property(x => x.Type).HasConversion(myValue => String.Join(",", myValue), dbValue => dbValue.Split(",", StringSplitOptions.RemoveEmptyEntries).ToList());
*//*            modelBuilder.Entity<User>().Property(x => x.Password).HasConversion(dbValue => dbValue.Concat("text").ToString(), myValue => myValue.ToLower());
*/        }
    }
}
