Authentication system consists of 4 major steps: 
1. validation - jo data user ne diya hai, is the format of that data correct or not.


2. verification - data sahi hai ya nhi, ex: ankur@dev.com , is this the email of the user or not.


3. authentication - if we have many users and we want to know which user is requesting, to identify the user we use authentication. 


4. authorization - after authentication, we know which user is requesting, now we want to know what this user can do, what are the permissions of this user, this is called authorization.

We will use token based authentication, and we will use JWT (JSON Web Token) for that.

user sends the data to the server, server validates the data, if the data is valid, then server generates a token and sends it back to the user.

The user can use this token to access protected routes or resources on the server. The server will verify the token and if it is valid, it will allow the user to access the requested resource. 

user when it sends post request to the server, it will send the copy of token in the header of the request, and the server will verify the token before allowing access to the protected route. 

we will implement this authentication system using Node.js and Express.js, and we will use the jsonwebtoken library to generate and verify JWT tokens.