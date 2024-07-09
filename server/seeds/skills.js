import skillsData from "../seed-data/skills.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex("skills").del();
  await knex("skills").insert(skillsData);
}