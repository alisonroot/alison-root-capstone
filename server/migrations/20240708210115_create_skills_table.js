/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("skills", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.text("content").notNullable();
    table.text("explanation");
    table.text("preview").notNullable();
    table.boolean("is_acronym").notNullable();
    table.string("category", 255).notNullable();
    table.string("tag", 255);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("skills");
}
