const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();
    const data = await db.get(`SELECT * FROM profile`);
    await db.close();
    return data;
  },

  async update(data) {
    const db = await Database();
    await db.run(`UPDATE profile SET
      name = "${data.name}", 
      avatar = "${data.avatar}", 
      monthlyBudget = ${data.monthlyBudget}, 
      daysPerWeek = ${data.daysPerWeek}, 
      hoursPerDay = ${data.hoursPerDay}, 
      vacationPerYear = ${data.vacationPerYear},
      valueHour = ${data.valueHour}
    `);
    await db.close();
  },
};
