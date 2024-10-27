import asyncHandler from 'express-async-handler';

// UserRegister - POST method
const userRegister = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Welcome to Node.js"
    });
});


// login - POST method
export default userRegister;
