const Job = require("../models/Job");
const Profile = require("../models/Profile");
const JobUtils = require("../utils/JobUtils");

module.exports = {
  create(_, res) {
    return res.render(`job`, {
      title: "Adicionar Novo Job",
    });
  },

  async save(req, res) {
    const data = req.body;

    await Job.create({
      ...data,
      createdAt: Date.now(),
    });

    return res.redirect("/");
  },

  async show(req, res) {
    const { id } = req.params;

    const job = await Job.getById(id);

    if (!job) {
      return res.send("Job não encontrado");
    }

    const profile = await Profile.get();

    job.budget = JobUtils.calculateBudget(job, profile.valueHour)
      .toFixed(2)
      .replace(".", ",");

    return res.render("job-edit", {
      title: "Editar Job",
      job,
    });
  },

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    await Job.update(data, id);

    res.redirect("/job/" + id);
  },

  async delete(req, res) {
    const { id } = req.params;

    await Job.delete(id);

    return res.redirect("/");
  },
};
