const get = (request, response) => {
    console.log('hi from controller');
    response.json({ message: 'Take your response' });
};
const create = (request, response) => {
    response
        .status(200)
        .json({ 
            success: true,
            body: request.body 
        });
};
const getById = (request, response) => {
    response.json({ id: request.params.id });
}
const update = (request, response) => {
    // do something
    response.json({ updated: request.params.id });
}
const updateOnlyOneField = (req, res) => {
    const task = {id: 12, title: 'task 1'};
    const updated = { id: 12, title: req.body.title };
    res.json({ data: updated });
};
const deleteById = (req, res) => {
    // delete something ... 
    res.json({ deleted: true });
};

module.exports = { get, getById, create, update, updateOnlyOneField, deleteById };