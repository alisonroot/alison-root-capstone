/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("emergency_plan", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onDelete("CASCADE");
    table.string("support_person_1_name", 255);
    table.string("support_person_1_phone", 255);
    table.string("support_person_2_name", 255);
    table.string("support_person_2_phone", 255);
    table.string("professional_support_1_name", 255);
    table.string("professional_support_1_phone", 255);
    table.string("professional_support_2_name", 255);
    table.string("professional_support_2_phone", 255);
    table.string("emergency_care_address", 255);
    table.string("emergency_care_phone", 255);
    table.text("warning_signs");
    table.text("stay_safe");
    table.text("strengths_resources");
    table.text("self_soothe");
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("emergency_plan");
}
