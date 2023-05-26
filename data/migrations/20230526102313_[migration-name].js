/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  const all=knex.schema.createTable("projects",(p)=>{
    p.increments("project_id")
    p.string("project_name").notNullable()
    p.string("project_description")
    p.string("project_complated")
  })
  .createTable("resources",(r)=>{
    r.increments("resource_id")
    r.string("resource_name").notNullable().unique()
    r.string("resource_description")
  })
  .createTable("tasks",(t)=>{
    t.increments("task_id")
    t.string("task_description").notNullable()
    t.string("task_complated")
    t.integer("project_id").references("project_id").inTable("projects")
  })
  return all;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropSchemaIfExists("projects")
  .dropSchemaIfExists("resources")
  .dropSchemaIfExists("tasks")

};
