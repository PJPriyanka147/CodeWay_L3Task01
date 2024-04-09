
//const port = 4000;
const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const dotenv =require("dotenv");
const stripe = require("stripe")(process.env.SECRET_KEY)

dotenv.config();

// Set up middleware for parsing JSON bodies
app.use(express.json());

// Allow requests from both frontend and admin
app.use(cors({
  origin: ['https://fashionstore1203.netlify.app','http://localhost:3000', 'http://localhost:5173']
}));

//Set the port from the environment variable or default to 4000
const port = process.env.PORT|| 4000;

// Set up environment variables for database connection
const dbPassword = process.env.DB_PASSWORD;
const dbURI = process.env.DB_URI;

// Database Connection with MongoDB
mongoose.connect(dbURI)
.then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

//API Creation
app.get("/", (req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images' ,
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products
const Product = mongoose.model("Product", {
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
      type:String,
      required:true,
    },
    category:{
        type:String,
        required:true,
    },
    old_price:{
       type:Number,
       requied:true,
    },
    new_price:{
        type:Number,
       requied:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct', async(req, res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,   
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for deleting Products
app.post('/removeproduct', async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})


//Creating API for getting all products
app.get('/allproducts', async (req, res)=>{
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products); 
})

//Schema for User Model
const  Users = mongoose.model('Users',{
    name :{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating Endpoint for registering the user
app.post('/signup', async(req, res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false, errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
       cart[i]=0;
        
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})

})

//Creating Endpoint for user login
app.post('/login', async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user){
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true, token});
        }
        else{
            res.json({success:false, errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false, errors:"Wrong Email Id"});
    }
})

//Creating Endpoint for payment integration
app.post("/checkout-session", async(req,res) => {
    const { cartItems } = req.body;

    console.log(cartItems);
    //console.log(cart);

    const lineItems = cartItems.map((product) => {
        let qnty = cart[product.id];
        // Check if qnty is less than 1, set it to 1
        if (qnty < 1) {
            qnty = 1;
        }

        return {
            price_data: {
                currency: "USD",
                product_data: {
                    name: product.name
                    // images: [product.image]
                },
                unit_amount: product.new_price * 100,
            },
            quantity: qnty
        };
    });



        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:lineItems,
            mode:"payment",
            success_url:"http://localhost:3000/success",
            cancel_url:"http://localhost:3000/cancel",
         });
                    
             res.json({id:session.id})
    })
        

//To display server errors
app.listen(port, (error)=>{
    if(!error){
        console.log("Server Running on Port "+port)
    }
    else 
    {
        console.log("Error : "+error)
    }
})