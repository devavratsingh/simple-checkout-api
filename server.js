const express = require('express');
var session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
let sitesess;
const db = {
	users: [
	{
		id:'1',
		name:'Dev',
		email: 'dev@web.com',
		password:'1234',
		created:new Date()
	},
	{
		id:'2',
		name:'Raj',
		email: 'raj@web.com',
		password:'12345',
		created:new Date()
	}
	],
	products: [
	{
		SKU:'ipd',
		Name:'Super iPad',
		Price:'$549.99'
	},
	{
		SKU:'mbp',
		Name:'MacBook Pro',
		Price:'$1399.99'
	},
	{
		SKU:'atv',
		Name:'Apple TV',
		Price:'$109.50'
	},
	{
		SKU:'vga',
		Name:'VGA adapter',
		Price:'$30.00'
	}
	],
	cartEntry: [
	{
		sku:'',
		qty:''
	}
	],
	total: [
	{
		totalsku:[],
		totalVal:[0]
	}
	]
}
/*********************************************************************************************************************
                                                GET Request
*********************************************************************************************************************/

app.get('/', (req,res) =>  {
		res.send(db.total);
})

/********************************************************************************************************************
                                                POST Request
********************************************************************************************************************/

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

/*********************************************************************************************************************
                           PUT Request will be used to make update to existing resources
*********************************************************************************************************************/

app.put('/checkout', (req, res) => {
	const {sku, qty} = req.body;
	db.cartEntry.push({
		sku:sku,
		qty:qty
	})

	const lastNo = db.cartEntry.length-1;
    const lastItem = db.cartEntry[lastNo];
		for(let j=0; j<db.products.length; j++) {
			if(lastItem.sku === db.products[j].SKU){
				//console.log(db.products[j]);
				let cartPrice = parseFloat(db.products[j].Price.slice(1)) * Number(lastItem.qty);
				db.total[0].totalVal = (parseFloat(db.total[0].totalVal) + parseFloat(cartPrice));
				var multiC = Number(lastItem.qty);
				for(var mu=1; mu <=multiC; mu++){
					db.total[0].totalsku.push(db.products[j].SKU)
				}
			}
		}
		const skuVal = db.total[0].totalsku;
		let newArray = skuVal.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
		const filterJam = newArray.map((cart, i) => {

/*******************************************************************************************************************************
**************************************************************************************************************
		  below code check if atv (Apple TV) quantity is equal to 3 then price will be charge for 2 units qty.
		  **********************************************************************************************************************
********************************************************************************************************************************/

			if(cart.el === 'atv' && cart.count ===3 && sku === 'atv'){
				db.total[0].totalVal = parseFloat(db.total[0].totalVal) - parseFloat(db.products[2].Price.slice(1));
			}

/********************************************************************************************************************************
****************************************************************************************************************************
     below code check if ipd (Super ipad) quantity is greater than 4 then whole price will be charge on the basis of $499.99
     ****************************************************************************************************************************
********************************************************************************************************************************/

			if(cart.el === 'ipd' && cart.count > 4 && sku === 'ipd') {
				const proprice = parseFloat(db.products[0].Price.slice(1));
				let originalPrice = proprice * Number(cart.count);
				let discountedCalc = 499.99 * Number(cart.count);
				let finalval = originalPrice - discountedCalc;
				db.total[0].totalVal = parseFloat(db.total[0].totalVal) - finalval;
			}

/********************************************************************************************************************************
*****************************************************************************************************
                        below code check that with every mbp (MacBook Pro), vga (VGA Adapter) is free
                        *********************************************************************************************************
********************************************************************************************************************************/		

			if(cart.el === 'mbp' && sku === 'mbp'){
				for(i=1; i <=qty; i++){
					db.total[0].totalsku.push('vga');
				}
			}
		})

/*******************************************************************************************************************************
********************************************** Final Output will be display here ***********************************************
*******************************************************************************************************************************/

		scanned = () => {
			console.log("SKU Scanned: "+db.total[0].totalsku);
			console.log("Total expected: $"+db.total[0].totalVal.toFixed(2));
		}
		scanned();
	
})
app.listen(2019, () => {
	console.log("Section 1 and 2 App is running on port 2019");
})


/*

The final output will be display like this: if i have selected 3 quantity of atv & submit it in put request using POSTMAN Then it 
will display in console below result.

SKU Scanned: atv,atv,atv
Total expected: $219.00

these code will fulfill the requirement in the document file. I am not using any kind of frontend in this api. 
it is simply work in get, post, put requests.

*/