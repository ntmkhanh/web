exports.create = (req, res) => {
    return res.send({ message: 'create handler'});
};
exports.update = (req, res) => {
    return res.send({ message: 'update hanler'});
};
exports.delete = (req, res) => {
    return res.send({ message: 'delete handler'});
};