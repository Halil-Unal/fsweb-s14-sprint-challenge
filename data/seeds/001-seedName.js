/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("projects").truncate();
  await knex("resources").truncate();
  await knex("tasks").truncate();

  const project1 = {
    "project_name": "Azınlık projesi",
    "project_description": "classified",
    "project_complated": "true"
  };
  await knex("projects").insert(project1);

  const resource1 = {
    "resource_name": "computers",
    "resource_description": "classified"
  };
  await knex("resources").insert(resource1);

  const task1 = {
    "task_description": "classified",
    "task_complated": "true",
    "project_id": 1
  };
  await knex("tasks").insert(task1);
};
