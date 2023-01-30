import express from 'express';
import {  RegisterTypeSchema  ,RegiesterSchema } from '../schemaZod/auth.schema';
import { isValid } from 'zod';
import { Validate } from '../middleware/validate';


const router = express.Router();

let parks:RegisterTypeSchema[] = []

router.post('/add',Validate(RegiesterSchema),(req,res) => {
    const newUsers = req.body
    parks.push(newUsers);
    res.status(201).json({
        messge :"added user successfully "
    })

})

router.get('/get/all',(req,res) => {
    res.status(200).json({
        messge : res.json({
            message : parks
        })
    })

})

router.put('/ride/:id',(req,res) => {
    const { id } = req.params;
    const updatePark = req.body as RegisterTypeSchema;
    const updateParkList = parks.filter((item) => {
      return item.id !== id;
    });
    updateParkList.push(updatePark);
    parks = updateParkList;
  
    res.json({
      message: "updeted  park",
    });
  });
// filter((item) => {return item.id !=id})
// list = delete 

router.delete('/ride/:id',(req,res) => {
    const { id } = req.params;
    const deleteRide = parks.filter((item) => {
      return item.id !== id;
    });
    parks = deleteRide;
    res.status(201).json({
        messge :"delete user successfully  "
    })

})








export default router;

