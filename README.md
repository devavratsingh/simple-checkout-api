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
### a. (iii) & (iv) UPDATE & PUT:
PUT is used to Update resourse. it will points to the exact location of the resourse.

I have used a POSTMAN to test this API.
![alt text](https://github.com/devavratsingh/simple-checkout-api/blob/master/images/put-request.jpg "Put & Update Example")

### b. We will use the password hash. 
there are many hashing algorithms e.g MD5, SHA, bcrypt etc. they are really effective for password security.
I have used in my project of face detection api. It is applied on two tables one is for user table where user registration details are saved & second one is login table where i have save hash password of user & there email. when user is signed in he will add there email & password which are secure by hash.
here are the example github link of the project:
[facedetection api server](https://github.com/devavratsingh/facerecognition-api-server)
[facedetection frontend](https://github.com/devavratsingh/face-recognition-brain-frontend)
[front end link](https://facedetection-bitsa.herokuapp.com)
[backend link:](https://smart-brain-api-bitsa.herokuapp.com)

### c. JSON API
JSON API format is best to be returned by an API as a response. because JSON is easy in learning, it will support array, it simple & easy to implement. JSOn is shorter, quicker to read and write.
In comparison of JSON, XML is more dificult to parse than JSON. APIs depends on easy & fast data exchanges. JSON fulfil these statements while XML is struggling to keep up.


## Section 2: Simple Checkout System

I have completed this checkout system with the test on POSTMAN software, & it fulfils the requirements described in your document file. I have commented all steps to be easy to understand. 
These files not only tested on localhost but also tested on my digital ocean server.

* We're going to have a 3 for 2 deal on Apple TVs. For example, if you buy 3 units of Apple TVs, you will only pay for the price of 2 units.

![alt text](https://github.com/devavratsingh/simple-checkout-api/blob/master/images/req-1-1.jpg  "Simple Checkout System First Task POSTMAN")
![alt text](https://github.com/devavratsingh/simple-checkout-api/blob/master/images/req-1-2.jpg "Simple Checkout System First Task Command Prompt")

I have added three quantities together. but you can check it by adding single quantity 3 times. it show the price of 2 units.












