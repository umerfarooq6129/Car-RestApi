const express = require("express");
const app = express();
require('./src/db/conn');
const CarData = require('./src/models/cars')

// app.express(express.json);

app.use(express.json());

// add cars detail by using sync
// app.post('/cars',(req,res)=>{
//     console.log(req.body)
//     const car = new CarData(req.body);
//     car.save().then(()=>{
//         res.send(car)
//     }).catch((e)=>{
//         res.send(e);
//     })
// })

// to add details by using async

app.post('/cars', async(req,res)=>{
    
    try{
        const car = new CarData(req.body);
        const carApi = await car.save();
        res.send(carApi)
    }catch(e){
        res.send(e);
    }
})

// to read all cars data we use find function
app.get('/cars', async(req,res)=>{
    try{
        const carDetail = await CarData.find();
        res.send(carDetail)
    }catch(e){
        res.send(e);
    }
})

// to read specfic cars data by id we use findById function
app.get('/cars/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const carDetail = await CarData.findById(_id);
        res.send(carDetail)
    }catch(e){
        res.send(e);
    }
})

// to update specific cars data by id we use findByIdAndUpdate function, and for update we use patch
app.patch('/cars/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const carDetail = await CarData.findByIdAndUpdate(_id,req.body,{
            new : true
        });
        res.send(carDetail)
    }catch(e){
        res.send(e);
    }
})

// to delete specfic cars data by id we use findByIdAndDelete function, and for delete we use delete
app.delete('/cars/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const carDetail = await CarData.findByIdAndDelete(_id);
        res.send(carDetail)
    }catch(e){
        res.send(e);
    }
})



app.listen(5000, () => {
    console.log('App listening on port 5000!');
});