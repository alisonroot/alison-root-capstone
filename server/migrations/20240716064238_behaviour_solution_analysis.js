/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("behaviour_solution_analysis", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onDelete("CASCADE");
    table.text("vulnerabilities");
    table.text("prompting_event");
    table.text("surface_emotion");
    table.text("underlying_emotions");
    table.text("self_talk");
    table.text("physical_sensations");
    table.text("action_urge");
    table.text("behaviour");
    table.text("consequences");
    table.text("alternative_solutions");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("behaviour_solution_analysis");
}
