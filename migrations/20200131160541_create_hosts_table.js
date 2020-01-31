
exports.up = function(knex) {
  return knex.schema.createTable('hosts', (table) => {
    table.increments('id').unsigned().primary();
    table.boolean('is_local').notNull();
    table.string('socket_path', 128);
    table.string('host_protocol', 16);
    table.string('host_url', 128);
    table.string('host_port', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('hosts');
};
