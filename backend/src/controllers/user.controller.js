const Usercontroller = require('../services/user.service')
const ApiError = require('../api-error')

// create user
export const createAccount=(req,res)=>{
    const data = req.body;
    insertUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

exports.create = (req, res) => {
    return res.send({ message: 'create handler'});
};
exports.update = (req, res) => {
    return res.send({ message: 'update hanler'});
};
exports.delete = (req, res) => {
    return res.send({ message: 'delete handler'});
};