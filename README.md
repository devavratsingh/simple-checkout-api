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
	db.users.filter(user => {
		if(req.body.email == user.email && req.body.password == user.password) {
		 	res.send(user.email+" is successfull signin.")
		} else {
			res.send("You have entered wrong credencials");
		}
	})
})

app.post('/register', (req, res) => {
	const {email, password, name} = req.body;
			db.users.push({
				id:'3',
				name,
				email,
				password,
				created:new Date()
			})
			res.json(db.users[db.users.length-1]);
})
```


