import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
    // user : {type: Schema.Types.ObjectId, ref: 'User'},
    slug: String,
    title : {
        type : String,
        require : [true,'blog title is required !']
    },
    desc : {
        type : String,
        require : [true,'blog text is required']
    },
    thumbnail : String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

blogSchema.pre('save',function(next){
    const slug = this.title.toLowerCase().split(" ").join("-");
    this.slug = slug;
    next();
});

mongoose.models = {};

module.exports =  mongoose.model('Blog',blogSchema);
