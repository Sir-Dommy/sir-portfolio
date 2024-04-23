const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Kenyatta University',
                degree: 'BSC, Computer Science',
                detail: "Bachelor's Degree in Computer Science at Kenyatta university specializing in Information Systems.",
                year: '2018-2023'
            },
            {
                id: 1,
                title: 'Google',
                degree: 'Data Analytics Professional Course',
                detail: "Completed the professional training and gained a certificate for the same",
                year: '2023-2024'
            },
            {
                id: 2,
                title: 'Microsoft',
                degree: 'Micrsoft Power Platform Developer',
                detail: "Completed the complete microsoft platform training package including, developer, associate and robotics version",
                year: '2023-2024'
            },
            {
                id: 3,
                title: 'Oracle',
                degree: 'Oracle Cloud Infrastructure',
                detail: "Trained on the cloud structure of Oracle and also their hardware structure",
                year: '2023-2024'
            },
            {
                id: 3,
                title: 'Cisco',
                degree: 'Cyber Security Essentials',
                detail: "Trained major security threats how to detect, prevent and correct them incase they occur",
                year: '2023-2024'
            },
        ]
    },
    {
        expCards: [
            {
                id: 3,
                title: 'ICT Authority',
                role: 'Software Developer',
                url: 'https://www.icta.go.ke/',
                desc: "I work here as a software developer, helping in the whole SDLC process from planning, deployment and Documentation of projects",
                year: '12/2023 - 02/present',
                location: 'Nairobi, Kenya'
            },
            {
                id: 2,
                title: 'Lixnet Technologies',
                role: 'Software Developer',
                url: 'https://lixnet.net/',
                desc: 'I interacted with the development team at Lixnet to create intuitive software solutions to the company clients',
                year: '04/2023 - 12/2023',
                location: 'Nairobi, Kenya'
            },
            {
                id: 1,
                title: 'Helomobile',
                role: 'Web Developer',
                url: 'https://helomobile.co.ke/',
                desc: 'As a web developer, I used React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2021 - 03/2023',
                location: 'Nairobi, Kenya'
            },
            

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
