const Profile = require("../models/Profile");

module.exports = {
  async index(_, res) {
    const profile = await Profile.get();
    return res.render(`profile`, {
      title: "Meu Perfil",
      profile: {
        ...profile,
        valueHour: (profile.valueHour || 0).toFixed(2).replace(".", ","),
      },
    });
  },

  async update(req, res) {
    const data = req.body;

    // definir quantas semanas tem num ano
    const weeksPerYear = 52;

    // remover as semanas de ferias do ano, para pegar quantas semanas tem em 1 mes
    const weeksPerMonth = (weeksPerYear - data.vacationPerYear) / 12;

    // total de horas trabalhadas na semana
    const weekTotalHours = data.hoursPerDay * data.daysPerWeek;

    // horas trabalhadas no mes
    const monthlyTotalHours = weekTotalHours * weeksPerMonth;

    // valor da minha hora
    const valueHour = data.monthlyBudget / monthlyTotalHours;

    const profile = Profile.get();

    await Profile.update({
      ...profile,
      ...req.body,
      valueHour,
    });

    return res.redirect("profile");
  },
};
