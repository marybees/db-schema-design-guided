// record changes to the db schema

exports.up = function (knex) {
  // REMEMBER TO RETURN
  return knex.schema.createTable("menu-items", (tbl) => {
    // a primary key, called "id"
    tbl.increments();

    tbl.string("name", 512).notNullable().unique().index();
    tbl.decimal("price", 8, 2);

    // relational databases store booleans ad 1 (for true) and 0 (for false)
    tbl.boolean("available").defaultTo(false);
  });
};

// the down() function describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("menu_items");
};
