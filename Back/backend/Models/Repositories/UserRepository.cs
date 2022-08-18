using backend.Models.Entities;
using backend.Models.Interfaces;

namespace backend.Models.Repositories
{
    public class UserRepository :IUserRepository
    {
        private readonly StoreContext _context;

        public UserRepository(StoreContext storeContext)
        {
            _context = storeContext;
        }
        //m
        public void AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }
  
        

        //m
        public void DeleteUserById(long id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == id);
            _context.Users.Remove(user);
            _context.SaveChanges();
        }
        //m
        public List<User> GetAllUsers()
        {
            var users = _context.Users.ToList();
            return users;
        }
        //m
        public User GetUserById(long id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id==id);
            return user;
        }
        //m
        public void UpdateUserById(long id, User user)
        {
            var oldUser = _context.Users.FirstOrDefault(x => x.Id == id);
            oldUser.Username = user.Username;
            oldUser.PhoneNumber = user.PhoneNumber;
            oldUser.FirstName = user.FirstName;
            oldUser.LastName = user.LastName;
            oldUser.Email = user.Email;
            oldUser.UpdatedDate = user.UpdatedDate;
            _context.SaveChanges();

        }
    }
}
