const express=require('express');

const Posts=require('../models/roomposts');

const Orders = require('../models/roomorders');

const router=express.Router();

 

// save posts

router.post('/roompost/save',(req,res)=>{

    let newPost=new Posts(req.body);

 

    newPost.save((err)=>{

        if(err){

            return res.status(400).json({

              error:err

            });

        }

        return res.status(200).json({

            success:"Post Saved Successfully"

        });

    });

});

// get posts

router.get('/roomposts',(req,res)=>{

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

 

// update posts

router.put('/roompost/update/:id',(req,res)=>{

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

                success:"Updated Successfully"

            });

        }

 

    );

});

// delete posts

router.delete('/roompost/delete/:id',(req,res) =>{

    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({

            message:"Delete unsuccesful",err

        });

        return res.json({

            message:"Delete Successfull",deletedPost

        });

    });

});

 

// get a specific post

router.get("/roompost/:id",(req,res)=>{

 

    let postId=req.params.id;

    Posts.findById(postId,(err,post)=>{

        if(err){

            return res.status(400).json({success:false,err}); 

        }

        return res.status(200).json({

            success:true,

            post

        });

    });

});

 

//save orders

router.post('/roomorder/save',(req,res) =>{

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

router.get('/roomorders',(req,res)=>{

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

 

module.exports=router;