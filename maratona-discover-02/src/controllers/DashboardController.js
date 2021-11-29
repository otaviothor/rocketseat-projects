const Job = require("../models/Job");
const Profile = require("../models/Profile");
const JobUtils = require("../utils/JobUtils");

module.exports = {
  async index(_, res) {
    const profile = await Profile.get();
    const jobs = await Job.get();
    let jobTotalHours = 0;
    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length,
    };

    const updatedJobs = jobs.map((job) => {
      const remaining = JobUtils.remainingDays(job);
      const status = remaining <= 0 ? "done" : "progress";

      statusCount[status] += 1;

      jobTotalHours =
        status === "progress"
          ? jobTotalHours + Number(job.dailyHours)
          : jobTotalHours;

      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile.valueHour)
          .toFixed(2)
          .replace(".", ","),
      };
    });

    const freeHours = (profile.hoursPerDay = jobTotalHours);

    return res.render(`index`, {
      jobs: updatedJobs,
      profile,
      statusCount,
      freeHours,
    });
  },
};
