
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('entities').del()
    .then(function () {
      // Inserts seed entries
      return knex('entities').insert([
        {name: 'goblin', initiative: 6},
        {name: 'bugbear', initiative: 8},
        {name: 'zombie', initiative: 4}
      ]);
    });
};
