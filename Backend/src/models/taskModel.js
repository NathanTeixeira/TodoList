const connection = require('./connection');

//retornar todas as tasks do BD
const getAll = async () =>{
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    
    const { title } = task;

    const query = 'insert into tasks(title, status, create_at) values (?,?,?)';
    const dateUtc = new Date(Date.now()).toUTCString();

    const [createTask] = await connection.execute(query,[title,'A fazer',dateUtc]);
    return {insertId: createTask.insertId};

};

const deleteTask = async (id) =>{
    const deleteTask = await connection.execute('delete from tasks where id = ?', [id]);
    return deleteTask;
};

const updateTask = async (id, task) =>{
    const query = 'update tasks set title = ?, status = ? where id = ?';

    const {title, status} = task;

    const updateTask = await connection.execute(query, [title, status, id]);
    return updateTask;
};

//exportar 1 objejto q tem tdas as funções
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};