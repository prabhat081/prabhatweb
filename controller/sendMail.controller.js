const nodemailer = require('nodemailer');

const sendMail = async(req,res)=>{
    const data= req.body;
    if(data){
            const message = `<div style="background-color:#f5f5f5;padding:10px 15px">
            <h3>Enquire Details</h3>
            <p>Name : ${data.name}</p>
            <p>email : ${data.email}</p>
            <p>Mobile : ${data.mobile}</p>
            <p>Message : ${data.message} </p>
            </div>`;

        const auth = nodemailer.createTransport({
                service : 'gmail',
                auth : {
                    user : process.env.EMAIL_ID,
                    pass : process.env.EMAIL_PWD
                }
        });

        const recipt = {
            from : 'prabhatweb1323@gmail.com',
            to : 'prabhat1323@gmail.com',
            subject : 'New Enquire',
            html : message
            
        }

        auth.sendMail(recipt,(error,sendRes)=>{
            if(error)
            throw error;
            res.status(200).json({message:'Thank you we will contact you shortly'});
        });
    }
    
}

export default sendMail;
