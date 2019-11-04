const deleteHandler = require("./delete");
const server = require("../../../../index");
const error = require("../../../middleware/validator");

module.exports = {
    method: "DELETE",
    path: "/products",
    options: {
        description: "Delete the particular product from database",
        notes: "return an object",
        tags: ["api", "user"],
        validate: {
            query: deleteHandler.query,
            failAction: error.errorValidator
        },
        handler: deleteHandler.handler
    }
};