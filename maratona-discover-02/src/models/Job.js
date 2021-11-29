const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();
    const jobs = await db.all(`SELECT * FROM jobs`);
    await db.close();
    return jobs;
  },

  async getById(id) {
    const db = await Database();
    const job = await db.get(`SELECT * FROM jobs WHERE id = ${id}`);
    await db.close();
    console.log(job);
    return job;
  },

  async update(data, id) {
    const db = await Database();
    await db.run(`UPDATE jobs SET
      name = '${data.name}',
      dailyHours = ${data.dailyHours},
      totalHours = ${data.totalHours}
      WHERE id = ${id}
    `);
    await db.close();
  },

  async create(data) {
    const db = await Database();
    await db.run(`INSERT INTO jobs VALUES (
      null,
      '${data.name}',
      ${data.dailyHours},
      ${data.totalHours},
      ${data.createdAt}
    )`);
    await db.close();
  },

  async delete(id) {
    const db = await Database();
    await db.run(`DELETE FROM jobs WHERE id = ${id}`);
    await db.close();
  },
};
