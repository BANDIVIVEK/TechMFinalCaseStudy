namespace CaseStudy.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string FeedbackText { get; set; }
        public int Rating { get; set; }
        public DateTime Date { get; set; }

        //public Customer Customer { get; set; }
    }
}
