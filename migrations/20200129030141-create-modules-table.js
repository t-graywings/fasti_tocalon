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

exports.up = function(db) {
  return db.createTable('modules', {
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
    },
    version: {
      type: 'string',
      length: 32,
      notNull: true
    }
  });
};

exports.down = function(db) {
  return db.dropTable('modules');
};

exports._meta = {
  "version": 1
};
