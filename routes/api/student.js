const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');


//lay du lieu
router.get('/',async(req,res)=>{
    try{
        const students = await Student.find();
        if(!students) throw Error("No items!");
        {
            res.status(200).json(students);
        }
    }catch(err)
    {
        res.status(400).json({msg: err})
    }
});
//them dua lieu
router.post('/',async (req,res)=>{
    const newStudent = new Student(req.body);
    try{
        const student = await newStudent.save();
        if(!student) throw Error("Something went wrong while saving the post!");
        {
            res.status(200).json(student);
        }
    }catch(err)
    {
        res.status(400).json({msg: err})
    }
});

//xoa du lieu
router.delete('/:id',async (req,res)=>{
    try{
        const student =await Student.findByIdAndDelete(req.params.id);
        if(!student) throw Error("Not post found!");
        {
            res.status(200).json({ success: true});
        }
    }catch(err)
    {
        res.status(400).json({msg: err})
    }
});

//sua du lieu
router.patch('/:id',async (req,res)=>{
    try{
        const student =await Student.findByIdAndUpdate(req.params.id,req.body);
        if(!student) throw Error("Something went wrong while updating!");
        {
            res.status(200).json({ success: true});
        }
    }catch(err)
    {
        res.status(400).json({msg: err})
    }   
});
//tim du lieu
router.get('/:id',async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student) throw Error("No items");
        {
            res.status(200).json(student);
        }
    }catch(err)
    {
        res.status(400).json({msg: err})
    }
});



module.exports = router;