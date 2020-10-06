exports.up = function (knex) {
  return knex.schema.createTable("categories", (tbl) => {
    tbl.uuid("id").primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("categories");
};
