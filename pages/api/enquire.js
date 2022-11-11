import nc from "next-connect";
import sendMail from "../../controller/sendMail.controller";

const sendMialRouter = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  })

  sendMialRouter.post(sendMail);

export default sendMialRouter;