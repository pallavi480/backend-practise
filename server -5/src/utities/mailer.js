import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.usermail,
        pass: process.env.userpass,

    }
})

// transporter.verify((error)=>{
//     if (error) console.error("Smtp error", error)
//         else console.log("smtp ready")
// })

const sendMail = async({to,subject,html})=>{
    await transporter.sendMail({
        from: "pallavigayaki@gmail.com",
        to,
        subject,
        html
    })
}

export default sendMail