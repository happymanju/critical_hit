
exports.up = function(knex) {
    return knex.schema.createTable("entities", function(table) {
        table.increments("id");
        table.string('name', 255).notNullable();
        table.integer("initiative", 255);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("entities");
  
};
