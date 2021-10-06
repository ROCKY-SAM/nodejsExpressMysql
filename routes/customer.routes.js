module.exports = app =>{
    const customer = require("../controller/customer.controller.js");
    app.post("/customers",customer.create);
    app.get("/customers",customer.findAll);
    app.get("/customers/:customerId",customer.findOne);
    app.put("/customers/:customerId",customer.update);
    app.delete("/customers/:customerId",customer.delete);
    app.delete("/customers",customer.deleteAll);
};