using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class RegisterModel
    {

        [Required(ErrorMessage = "User Name is required")]
        public string? Username { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(6)]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [Compare("Password")]
        public string? ConfirmPassword { get; set; }
    }
}
