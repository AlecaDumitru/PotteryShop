using backend.Models;
using backend.Models.Interfaces;
using backend.Models.Repositories;

using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

// Add services to the container.


builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<StoreContext>(options => options.UseSqlServer("Server=(LocalDb)\\MSSQLLocalDB;Database=PotteryShopDb;Trusted_Connection=True;"));

builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IProductRepository, ProductRepository>()
    .AddScoped<IUserRepository, UserRepository>()
    .AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "Policy",
        builder =>
        {
            builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000/");

        }
        );
});
// For Identity
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<StoreContext>()
    .AddDefaultTokenProviders();
builder.Services.AddScoped<IProductRepository, ProductRepository>()
    .AddScoped<ICategoryRepository, CategoryRepository>()
    .AddScoped<IUserRepository, UserRepository>();

 




// Adding Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})

// Adding Jwt Bearer
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true, 
        ValidateIssuerSigningKey = true,
        ValidAudience = configuration["JWT:ValidAudience"],
        ValidIssuer = configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
    };
});
var app = builder.Build();
// migrate any database changes on startup (includes initial db creation)



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
else
{
    app.UseDeveloperExceptionPage();
}

app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseCors(builder => builder
                    .WithOrigins(new[] { "http://localhost:3000" })
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                );
app.UseAuthorization();
app.UseAuthentication();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=index}/{id?}");
});

app.Run();
