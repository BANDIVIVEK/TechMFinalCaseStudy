namespace CaseStudy.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public string AccountNumber { get; set; }
        public string TransactionType { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
    }
}
