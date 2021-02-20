module.exports = app => {
    var router = require("express").Router();
    const userModels = require('./controllers/userModels')

    app.use(express.json())
    app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
    });

    // Create a new Users
    router.post("/", users.findAndCreate);
  
    // Retrieve all Users
    router.get("/", userModels.getUsers);
  
    // Retrieve a single Users with id
    router.get("/:id", userModels.getUser);
  
    // Update a Users with id
    router.put("/:id", userModels.createUser);
  
    // Delete a Users with id
    router.delete("/:id", userModels.deleteUser);

    //Use before every route
    app.use('/api/user', router);
  };