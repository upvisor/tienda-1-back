import nodemailer from 'nodemailer'

export const sendEmail = async ({ address, affair, title, paragraph, buttonText, url, storeData }) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        post: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        }
    })
    await transporter.sendMail({
        from: 'ayuda@maaide.com',
        to: address,
        subject: affair,
        text: `<html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <title>Document</title>
            </head>
            <body>
                <main style="display: flex;">
                    <div style="margin: auto; width: 600px; padding: 12px; display: flex; flex-direction: column; gap: 4px;">
                        <a style="margin: auto;" target="_blank" href="https://tienda-1.vercel.app/"><img style="width: 300px;" src="https://res.cloudinary.com/blasspod/image/upload/v1664841659/blaspod/ouxxwsmqodpemvffqs7b.png" /></a>
                        <h1 style="font-family: 'Montserrat', sans-serif; font-weight: 500; text-align: center; margin-bottom: 0px;">${title}</h1>
                        <p style="font-family: 'poppins', sans-serif; text-align: center;">${paragraph}</p>
                        <a href={${url}} target="_blank" style="padding: 8px 21px; font-family: 'poppins', sans-serif; border: none; text-decoration: none; color: white; font-size: 16px; margin: auto; width: fit-content; margin-bottom: 18px; cursor: pointer; background-color: #3478F5;">${buttonText}</a>
                        <div style="border-top: 1px solid #CACACA; padding: 12px; display: flex; gap: 8px; justify-content: space-between;">
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <a target="_blank" href="https://tienda-1.vercel.app/" style="font-family: 'poppins', sans-serif;">${storeData.name}</a>
                                <a target="_blank" href="https://tienda-1.vercel.app/" style="font-family: 'poppins', sans-serif;">${storeData.email}</a>
                                <a target="_blank" href="https://tienda-1.vercel.app/" style="font-family: 'poppins', sans-serif;">${storeData.phone}</a>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px; text-align: right;">
                                <a style="font-family: 'poppins', sans-serif;">${storeData.address}</a>
                                <a style="font-family: 'poppins', sans-serif;">${storeData.city}, ${storeData.region}</a>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </html>`
    })
}