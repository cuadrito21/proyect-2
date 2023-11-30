const catchError = require('../utils/catchError');
const Proyect = require('../models/Proyect');

const getAll = catchError(async(req, res) => {
   const proyects = await Proyect.findAll();

    return res.json(proyects);
});

const create = catchError(async(req, res) => {
    const {first_name,last_name,email,password,birthday} = req.body;
    const proyect = await Proyect.create({
        first_name,last_name,email,password,birthday});
 
     return res.status(201).json(proyect);
 });
 const remove = catchError(async(req, res)=>{
    const {id} = req.params;
    await Proyect.destroy({where: {id}});
    return res.sendStatus(204);
 });
 const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {first_name, last_name, email, password} = req.body;
    const user = await Proyect.update(
      {first_name, last_name, email, password},
      { where: { id }, returning: true}
    );
    return res.json(user[1][0]) 
  })
 const getForId = catchError(async(req, res) => {
    const {id} = req.params;
    const {first_name,last_name,email,password,birthday} = req.body;
    const proyect = await Proyect.getOne({
        first_name,last_name,email,password,birthday},
        {where: {id},returning:true} 
        );
 
     return res.json(proyect);
 });
module.exports = {
    getAll, create, remove, update,getForId
}