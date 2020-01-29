'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

const tableName = 'required_libraries';

exports.up = function(db) {
  return db.createTable('required_libraries', {
    id: {
      type: 'int',
      unsigned: true,
      length: 10,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 32,
      notNull: true
    }
  });
};

exports.down = function(db) {
  return db.dropTable(tableName);
};

exports._meta = {
  "version": 1
};
