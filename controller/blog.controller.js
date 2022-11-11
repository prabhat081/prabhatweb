import "../module/db.module";
import Blog from '../schema/blog.schema';

export const Create = async (req,res)=>{
  try {
    const newBlog = new Blog(req.body);
    const blog = await newBlog.save();
    res.status(200).json(blog)
  }
  catch(err)
  {
    res.status(424).json({success: false, err})
  }
}
export const Fetch  = async(req,res)=>{
    try{
        const query = req.query;
        const blogData = await Blog.find(query);
        res.status(200).json(blogData);
    }catch(err){
        res.status(400).json(err);
    }
}
export const Update = async(req,res)=>{
        const {id} = req.query;
        const data = req.body;
        if(data && id){
            try{
                const blogRes = await Blog.findByIdAndUpdate(id,data,{new:true});
                res.status(200).json({message:'update successfully',data : blogRes});
            }catch(err){
                return res.status()
            }
        }
}

export const DeleteBlog = async(req,res)=>{
    const {id} = req.query;
    try{
        await Blog.findByIdAndDelete(id);
        res.status(200).json({message:'blog deleted successfully'});
    }catch(error){
        console.log(error)
        res.status(400).json({message:'Unbale to delete blog !'})
    }
}
