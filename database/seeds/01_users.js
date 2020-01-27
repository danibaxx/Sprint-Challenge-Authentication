exports.seed = async (knex) => {
  // Deletes ALL existing entries and resets ids
  await knex("users").truncate()

  await knex("users").insert([
    { username: "harry", password: 123 },
    { username: "fred", password: 456},
    { username: "ron", password: 789},
  ])
};

