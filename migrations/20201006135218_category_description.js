exports.up = function (knex) {
  return knex.schema.table("categories", (tbl) => {
    tbl.string("description", 256); // 256 is character length
  });
};

exports.down = function (knex) {
  return knex.schema.table("categories", (tbl) => {
    tbl.dropColumn("description");
  });
};
