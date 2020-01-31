exports.up = function(knex) {
  return knex.schema.createTable('modules', (table) =>{
    table.increments('id').unsigned().primary();
    table.string('name', 64).notNull();
    table.string('version', 64).notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('modules');
};
