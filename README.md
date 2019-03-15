# simple-checkout-api
Digi-X “Lightning” Assessment for Developers:- this api include both section 1 and section 2

## Section 1: Application Programming Interface
### a.(i) GET:
GET method used to retreive data. A GET request doesn't change anything on the requested server.
```javascript
app.get('/', (req,res) =>  {
		res.send(db.total);
})
```

