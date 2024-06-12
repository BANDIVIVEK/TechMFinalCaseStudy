using System.ComponentModel.DataAnnotations.Schema;

namespace CaseStudy.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string AccountType { get; set; }
        public string AccountNumber { get; set; }
        public int CustomerId { get; set; }
        public decimal Balance { get; set; }
        public decimal InterestRate { get; set; }
        public DateTime OpeningDate { get; set; }
        //public Customer Customer { get; set; }
    }
}
