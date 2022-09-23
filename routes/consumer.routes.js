import express from "express";
import {ConsumerModel} from "../models/consumer.model.js"


const consumerRouter = express.Router();


//CREATE USER 
consumerRouter.post("/", async (req, res) => {
try { 
    const createConsumer = await ConsumerModel.create(req.body);
    return restart.status(200).json(createConsumer);
} catch (err) { 
    console.log(err);
    return res.status(500).json(err);
}
});

//READ DETAILS

consumerRouter.get ("/ :id", async (req, res) => {
    try {
        const consumer= await ConsumerModel.findOne({ _id: req.params.id});
        return res.status(200).json(consumer);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//UPDATE
consumerRouter.put("./:id", async (req, res) => {
    try {
        const editConsumer = await Consumer.Model.findOneAndUpdate(
            {_id: req.params.id }, 
            {...req.body}, {new:true, runValidators: true}
            );
    } catch(err){
        console.log(err)
        return res.json(err)
    }
})

consumerRouter.delete("/ :id", async (req, res) => {
    try {
        const deletedConsumer = await ConsumerModel.deleteOne({_id: req.params.id});

        return res.status(200).json(deletedConsumer);
    } catch (err)
 {
    console.log(err);
    return res.json(err);        
    }
}); 

export {consumerRouter};


