
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "users" CASCADE');
  
  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      name: "Vasya"
    },
    {
      id: 2,
      name: "Petya"
    }
  ]);
};
