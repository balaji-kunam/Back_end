import asyncHandler from 'express-async-handler';

// UserRegister - POST method
const userRegister = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Welcome to Node.js"
    });
});

export default userRegister;
