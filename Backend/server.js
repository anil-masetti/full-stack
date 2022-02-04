const express = require('express')
const app = express()
const port = 3080;
const mongoose=require('mongoose');
const BrandName=require('./models/model');
app.use(express.json());
app.set('view engine', 'ejs');
mongoose.connect('mongodb://mongo:27017/one',
{useNewUrlParser:true}).then(
    ()=>console.log("local MongoDb Connected...!")
).catch(err=>console.log(err))
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addbrands',async (req,res)=>{
   const {brandname,modelname,price}=req.body;
    try{
        const newData=new BrandName({brandname,modelname,price});
        await newData.save();
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }

})

app.get('/getallbrands',async (req,res)=>{
    
    try{
        const allData=await BrandName.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }

})
app.patch('/updatebrands/:id',async (req,res)=>{
  
        try{
        const id = req.params.id;
      const updates = req.body;
      const options = { new: true };
      const result = await BrandName.findByIdAndUpdate(id, updates, options);
      
      res.send(result);
    }
    
    catch(err){
        console.log(err.message);
    }

})
app.delete('/deletebrands/:id', async(req,res)=>{
  try{
    const id=req.params.id;
    const result = await BrandName.findByIdAndDelete(id);
    
      res.send(result);
  }
  catch(err){
        console.log(err.message);
    }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

