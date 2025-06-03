# Prime Number Checker API

This is a simple Node.js API built with Express that checks if a given number is prime.  
You send a GET request with a `number` query parameter, and it returns whether the number is prime or not.

To run the API locally, first install dependencies with `npm install`. Then start the server using `node Server.js`.  
By default, the server runs on `http://localhost:8000`.

Use the API by sending a GET request to `/isPrime` with the number in the query string, for example:  
`http://localhost:8000/isPrime?number=5`

The response will be JSON like this:  
```json
{
  "number": 5,
  "isPrime": true
}
