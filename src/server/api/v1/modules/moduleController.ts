import * as Express from 'express';
import * as Knex from 'knex';

const client = Knex({
  client: 'sqlite3',
  connection: {
    filename: '/etc/fasti/app.db'
  }
});

function list(req: Express.Request, res: Express.Response, next: Express.NextFunction){
  client('tbl')
    .select('name')
    .then((data) =>{
      return res.json({
        'error': false,
        'message': '',
        'data': data
      });
    });
}

function add(req: Express.Request, res: Express.Response, next: Express.NextFunction){
  client('tbl')
    .insert({name: req.body.name})
    .then((data) => {
      return res.json({
        'error': false,
        'message': '',
        'data': data
      })
    })
}

function update (req: Express.Request, res: Express.Response, next: Express.NextFunction){
  console.log(req.body.name);
}

export default {
  list: list,
  add: add,
  detail: list,
  update: update,
  delete: list,
}