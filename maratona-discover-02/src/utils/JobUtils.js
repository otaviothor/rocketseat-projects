module.exports = {
  remainingDays(job) {
    // calculo de dias restante do job
    const remainingDays = (job.totalHours / job.dailyHours).toFixed();

    const createdDate = new Date(job.createdAt);

    // data de criacao + dias restantes
    const dueDay = createdDate.getDate() + Number(remainingDays);
    const dueDateInMs = createdDate.setDate(dueDay);
    const timeDiffInMs = dueDateInMs - Date.now();

    // transformar milisegundos em dias
    const dayInMs = 1000 * 60 * 60 * 24;

    const dayDiff = Math.floor(timeDiffInMs / dayInMs);

    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job.totalHours,
};
