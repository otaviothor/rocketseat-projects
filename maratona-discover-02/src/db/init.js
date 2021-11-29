const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, 
      avatar TEXT, 
      monthlyBudget INT, 
      daysPerWeek INT,
      hoursPerDay INT,
      vacationPerYear INT,
      valueHour INT
    )`);

    await db.exec(`CREATE TABLE jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, 
      dailyHours INT,
      totalHours INT,
      createdAt DATETIME
    )`);

    await db.run(`INSERT INTO profile (
      name, 
      avatar, 
      monthlyBudget, 
      daysPerWeek, 
      hoursPerDay, 
      vacationPerYear,
      valueHour
    ) VALUES (
      "otávio",
      "https://github.com/otaviothor.png",
      3000,
      5,
      5,
      4,
      70
    );`);

    await db.close();
  },
};

initDb.init();
