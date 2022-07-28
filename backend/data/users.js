import bcrypt from "bcryptjs";

const usersData= [
    {
        name:"steph",
        surname:"kuntz",
        email:'stephkuntz@gmail.com',
        password:bcrypt.hashSync("user",10),
        isAdmin:false
    },
    {
        name:"admin name",
        surname:"admin surname",
        email:'admin@gmail.com',
        password:bcrypt.hashSync("admin",10),
        isAdmin:true
    },
]

export default usersData;