const portfolio = [
    {
        id: 0,
        projectName: "POS System",
        url: "https://magicalfurnitures.co.ke/",
        image: "projects/pos.png",
        projectDetail: "Manage your store/shop by tracking all products from acquisiton to sale. Manage stocks and purchases via the internet and make sales using barcode scanners and get support of various payment systems",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "Mysql"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Payroll Management System",
        url: "https://hrm.lixnet.net/",
        image: "projects/absco.png",
        projectDetail: "Including an HR management module to the project, you are able to track both employess and company property. You can also generate and track employees payrolls",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "Mysql"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Loan Management System",
        url: "http://new-cbs.lixnet.net:8000/cbs",
        image: "projects/jmm.png",
        projectDetail: "Manage your client loans from acquisiton to payment or defaulting. You can also allow clients to make savings and deduct loans from the savings",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "SpringBoot"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Internal Recruitment and Leave System",
        url: "http://sir.magicalfurnitures.co.ke/",
        image: "projects/alsn.png",
        projectDetail: "Worked on the backend part of this project which deals with allowing HR managers to get experience of employees and prep for promotion and also allow for leave application and tracking",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
