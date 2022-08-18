using backend.Models;
using backend.Models.Entities;
using backend.Models.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace backend.Controllers
{
    [Route("/authenticate")]
    [ApiController]
    public class AuthenticateController : Controller

    {
        public IUserRepository _userRepository;

        public AuthenticateController(IUserRepository userRepository)
        {
            _userRepository = userRepository;

        }
        [HttpPost("register")]
        public ActionResult Register(RegisterModel model)
        {
            if(_userRepository.GetAllUsers().Any(u => u.Email == model.Email))
            {
                return BadRequest("User already exists");
            }
            CreatePasswordHash(model.Password, out byte[] passwordHash, out byte[] passwordSalt);
            var user = new User
            {
                Email = model.Email,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                VerificationToken = CreateRandomToken()
            };
            _userRepository.AddUser(user);
            return Ok("user successgully created!");

    }

        private void CreatePasswordHash(string? password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

            }
        }
        private string CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }
    }
}
