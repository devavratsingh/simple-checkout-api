# simple-checkout-api
Digi-X “Lightning” Assessment for Developers:- this api include both section 1 and section 2

## Section 1: Application Programming Interface

### a.(i) GET:
GET method used to retreive data. A GET request doesn't change anything on the requested server. In this example i am using GET method here & it will display my cart items.
```javascript
app.get('/', (req,res) =>  {
		res.send(db.total);
})
```
### a. (ii) POST:
POST method used to create new resource. it is requested with either headers or data. this method also use to update a existing resource.
I have used it on two places.
```javascript
app.post('/signin', (req, res) => {
	// code
})

app.post('/register', (req, res) => {
	// code
})
```
a. (iii) & (iv) UPDATE & PUT:
PUT is used to Update resourse. it will points to the exact location of the resourse.

I have used a POSTMAN to test this API.
![alt text](https://github.com/devavratsingh/simple-checkout-api/blob/master/images/put-request.jpg "Put & Update Example")




