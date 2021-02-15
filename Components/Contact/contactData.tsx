import Gmail from '../../assets/gmail.svg'
import Facebook from '../../assets/facebook.svg'
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Discord from '../../assets/discord.svg'

type Contact = {
    icon : JSX.Element, name : string, message : string, additionalData ?: string, href : string
}

const contactData : Array<Contact> = [
    {
        icon: <Gmail />,
        name: 'Gmail',
        message: "Contact me by sending email - ",
        additionalData: 'teodor.tkaczyk.jobs@gmail.com',
        href: 'mailto:teodor.tkaczyk.jobs@gmail.com'
    },
    {
        icon: <Facebook />,
        name: 'Facebook',
        message: "Let's meet on Facebook",
        href: 'https://www.facebook.com/teodor.tkaczyk/'
    },
    {
        icon: <Github />,
        name: 'Github',
        message: 'See how I build my projects',
        href: 'https://github.com/teo0098'
    },
    {
        icon: <Linkedin />,
        name: 'Linkedin',
        message: "Let's connect on Linkedin",
        href: 'https://www.linkedin.com/in/teodor-tkaczyk-bba5871ab/'
    },
    {
        icon: <Discord />,
        name: 'Discord',
        message: 'I am also available here - ',
        additionalData: 'Teodor Tkaczyk#6282',
        href: 'https://discord.com/'
    }
]

export default contactData