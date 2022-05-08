const express = require('express');
const posts = require('../models/mealposts');
const Posts = require('../models/mealposts');
const Orders = require('../models/mealorders')

const router = express.Router();

//save posts
router.post('/mealpost/save',(req,res) =>{
    let newPost = new Posts(req.body);
    newPost.save((err) =>{
          if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved sucessfully"
        });
    });
});

//get posts
router.get('/mealposts',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({  
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post
router.get("/mealpost/:id",(req,res)=>{
    let postId = req.params.id; //may occur an error in params.id
    Posts.findById(postId,(err,post)=>{ //error may occur in post
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update posts
router.put('/mealpost/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated succesfully"
            });
        }
    );
});

//delete post
router.delete('/mealpost/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
            message:"Delet unsuccesful",err
        });
        return res.json({
            message:"Delete successfull",deletedPost
        });
    });
});

//save orders
router.post('/mealorder/save',(req,res) =>{
    let newOrder = new Orders(req.body);
    newOrder.save((err) =>{
          if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved sucessfully"
        });
    });
});

//get orders
router.get('/mealorders',(req,res)=>{
    Orders.find().exec((err,orders)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({  
            success:true,
            existingOrders:orders
        });
    });
});

module.exports = router;