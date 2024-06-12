namespace CaseStudy.Models
{
    public class Loan
    {
        public int Id { get; set; }
        public string LoanType { get; set; }
        public decimal LoanAmount { get; set; }
        public decimal InterestRate { get; set; }
        public int Term { get; set; }
        public int CustomerId { get; set; }
        public DateTime ApplicationDate { get; set; }
        public string ApprovalStatus { get; set; }

        public Customer Customer { get; set; }
    }
}
