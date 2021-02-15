import { NextApiRequest, NextApiResponse } from "next"
import validator from "validator"
import sendgrid from '@sendgrid/mail'

type BodyType = {
    name: string,
    email: string,
    message: string
}

const sendEmail = async (req : NextApiRequest, res : NextApiResponse) => {
    const { method, body } = req

    if (method === 'POST') {
        try {
            const { name, email, message } : BodyType = body
            if (!/^[A-Za-zĘÓĄŚŁŻŹĆŃęóąśłżźćń]{2,20}$/.test(name)) throw new Error()
            if (!email || !validator.isEmail(email)) throw new Error()
            if (!message || message.trim().length === 0 || message.trim().length < 10) throw new Error()
            sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`)
            const msg = {
                to: 'teodor.tkaczyk.jobs@gmail.com',
                from: `teodor.tkaczyk.jobs@gmail.com`,
                subject: `${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)} <${email}> - New Job's Offer!`,
                text: message
            }
            await sendgrid.send(msg)
            res.status(201).json('Email has been sent successfully')
        }   
        catch {
            res.status(500).json('Server crashed')
        }
    }
    else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}  

export default sendEmail