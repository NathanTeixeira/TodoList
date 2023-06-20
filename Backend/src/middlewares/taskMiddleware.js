const validateBody = (req, res, next) => {
    const {body} = req;

    if (body.title === undefined) {
        return res.status(400).json({message: 'O campo titulo precisa ser declarado'});
    } else if (body.title === ''){
        return res.status(400).json({message: 'O campo titulo não pode ser vazio'});
    }

    next();

};

const validateBodyStatus = (req, res, next) => {
    const {body} = req;

    if (body.status === undefined) {
        return res.status(400).json({message: 'O campo status precisa ser declarado'});
    } else if (body.status === ''){
        return res.status(400).json({message: 'O campo status não pode ser vazio'});
    }

    next();

};

module.exports = {
    validateBody,
    validateBodyStatus
};