# mail_verification_using_JWT

add mail credentials in .ENV file
add database url and database name

# API Details

# Registration API
Method : Post
URL : http://localhost:3000/authentication/register
Request Data :
{
    "userName": "hpatil@deqode.com",
    "password": "test123"
}

Headers Data :
secretKey : 5BE979226B12BA2AAE3CCECF1FD26
Response Data: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaGFhcGF0aWxAZ21haWwuY29tIiwiaWF0IjoxNjIwODE0NjQzfQ.A08BluLHt5nMfFWQNDLI8UT_Alvn5H7bPHK_hCF8qLU"
}

# Mail verification API
Method : Put
URL : http://127.0.0.1:3000/authentication/verify?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaHBhdGlsQGRlcW9kZS5jb20iLCJpYXQiOjE2MjA4MTQyNjF9.TH8ZU5NiXvE_1tMQgQELf7lgtMeDaWiamvKXETmIsK0

Request Data :
{
    "password": "test123"
}

Headers Data :
secretKey : 5BE979226B12BA2AAE3CCECF1FD26
Response Data : 
{
    "result": "user verified successfully"
}

# Login API
Method : Post
URL : http://localhost:3000/authentication/login

Request Data :
{
    "userName": "hpatil@deqode.com",
    "password": "test123"
}

Headers Data :
secretKey : 5BE979226B12BA2AAE3CCECF1FD26
Response Data : 
{
    "result": "user login successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiaHBhdGlsQGRlcW9kZS5jb20iLCJpYXQiOjE2MjA4MTQzNDF9.ca_jj3K6kDsCP_mZZ9GV8QaC815Istldj2mk4xc_7Io"
}
