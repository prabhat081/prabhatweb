import nc from "next-connect";
import {Create,Fetch,Update,DeleteBlog} from "../../controller/blog.controller";

const blogRouter = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})

blogRouter.get(Fetch);
blogRouter.post(Create);
blogRouter.put(Update);
blogRouter.delete(DeleteBlog);

export default blogRouter;