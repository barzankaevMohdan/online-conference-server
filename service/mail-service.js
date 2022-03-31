const nodemailer = require('nodemailer')

class mailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationMail(to, link) {
        try {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Активация аккаунта на ' + process.env.API_URL,
                text: '',
                html:
                    `
                        <div>
                            <h1> Для активации перейдите по ссылке </h1>
                            <a href="${link}">${link}</a>
                        </div>
                    `
            })
        } catch(e) {
            console.log(e);
        }  finally {
            console.log('next');
        }
    }
}

module.exports = new mailService()