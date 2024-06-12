using Microsoft.EntityFrameworkCore;

namespace CaseStudy.Models
{
    public class BankingContext : DbContext
    {
        public BankingContext() { }
        public BankingContext(DbContextOptions<BankingContext> options) : base(options) { }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<SupportQuery> SupportQueries { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<Admin> Admin { get; set; }
    }
}
