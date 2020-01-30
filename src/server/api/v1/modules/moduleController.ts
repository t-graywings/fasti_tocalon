import * as Express from 'express';
import * as Knex from 'knex';

const client = Knex({
  client: 'sqlite3',
  connection: {
    filename: '/etc/fasti/app.db'
  }
});

function list(req: Express.Request, res: Express.Response, next: Express.NextFunction){
  client('modules')
    .select('id', 'name', 'version')
    .then((data) =>{
      return res.json(data)
    });
}

function add(req: Express.Request, res: Express.Response, next: Express.NextFunction){
  client('modules')
    .insert({name: req.body.name, version: req.body.version})
    .then((data) => {
      return res.json({
        'error': false,
        'message': '',
        'data': data
      })
    })
}

function detail(req: Express.Request, res: Express.Response, next: Express.NextFunction){
  let moduleId = req.params.id;
  client('modules')
    .where('id', '=', moduleId)
    .select('id', 'name', 'version')
    .then((data) =>{
      return res.json(data)
    });
}

function update (req: Express.Request, res: Express.Response, next: Express.NextFunction){
  let moduleId: number= Number(req.params.id);
  let name = req.body.name;
  let version = req.body.version;
  client('modules')
    .where('id', '=', moduleId)
    .update({name: name, version: version})
    .then((data) => {
      return res.json(data);
    })
}

function del(req: Express.Request, res: Express.Response, next: Express.NextFunction){
  let moduleId = req.params.id;
  client('modules')
    .where('id', '=', moduleId)
    .delete()
    .then((data) => {
      res.json(data);
    })
}

export default {
  list: list,
  add: add,
  detail: detail,
  update: update,
  delete: del,
}