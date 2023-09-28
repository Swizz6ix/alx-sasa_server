const SchemaValidator = require("./common/middleware/SchemaValidationMiddleware");
const CurrentProject = require("./common/models/CurrentProject");
const SecondChance = require("./common/models/SecondChance");
const User = require("./common/models/User");
const { username } = require("./constants");
const UserController = require("./user/controllers/UserController")


const scrapeData = {
    "user": 
    [
        {
            "email": "ferdinandcharles@gmail.com",
            "username": "CHARLES",
            "avatar": "/images/IMG_20210823_093523_016.jpg",
            "password": "1234"
        },
    ],

    "currentProjects": 
    [
        {
            "progress": "100.0% done",
            "projectCode": 564,
            "projectName": "Build your portfolio project (week2): MVP Complete",
            "startedOn": "Aug 25, 2023 6:00 AM",
            "deadline": "Sep 22, 2023 11:34 PM"
        },
        {
            "progress": "90.0% done",
            "projectCode": 312,
            "projectName": "Build your portfolio project (week1): Making Progress",
            "startedOn": "Aug 25, 2023 6:00 AM",
            "deadline": "Sep 24, 2023 6:00 Am"
        },
        {
            "progress": "80.0% done",
            "projectCode": 572,
            "projectName": "Research & Project approval (Part 3) ",
            "startedOn": "Aug 25, 2023 6:00 AM",
            "deadline": "Sep 23, 2023 6:00 Am"
        }
    ],

    "secondChance": 
    [
        {
            "progress": "60.0% done",
            "projectCode": 571,
            "projectName": "Research & Project approval (Part 2)",
            "startedOn": "Aug 25, 2023 6:00 AM",
            "deadline": "Sep 22, 2023 6:00 Am"
        },
        {
            "progress": "50.0% done",
            "projectCode": 361,
            "projectName": "Research & Project approval (Part 1)",
            "startedOn": "Aug 25, 2023 6:00 AM",
            "deadline": "Sep 25, 2023 6:00 Am"
        },
        {
            "progress": "70.0% done",
            "projectCode": 311,
            "projectName": "0x1A. Application server",
            "startedOn": "Aug 25, 2023 6:00 AM",
            "deadline": "Sep 21, 2023 6:00 Am"
        }
    ]
};

const Insert = async () => {
    const insertUser = scrapeData.user.map(async (data) => {
        SchemaValidator.verify(data);
        const [user, created] = await User.createUser({
            email: data.email
        }, data)
    });

    const insertProjects = scrapeData.currentProjects.map(async (data) => {
        SchemaValidator.verify(data);
        const [project, created] = await CurrentProject.newProject({
            projectCode: data.projectCode
        }, data)

        const deadline = new Date(data.deadline).getTime()
        const currentTime = new Date().getTime()
        console.log("tm",deadline)
        console.log(Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60)))

        if (deadline < currentTime) {
            await CurrentProject.deleteProject({projectCode: data.projectCode})
        }
    });

    const insertSecond = scrapeData.secondChance.map(async (data) => {
        SchemaValidator.verify(data)
        const [project, created] = await SecondChance.newProject({
            projectCode: data.projectCode,
        }, data)

        const deadline = new Date(data.deadline).getTime()
        const currentTime = new Date().getTime()
        console.log("this", deadline)

        if (deadline < currentTime) {
            await SecondChance.deleteProject({
                projectCode: data.projectCode
            })
            .then((numberOfEntriesDeleted) => {
                    numberOfEntriesDeleted: numberOfEntriesDeleted,
                    console.log(numberOfEntriesDeleted)
            })
        }
    });
}

module.exports = { Insert }
