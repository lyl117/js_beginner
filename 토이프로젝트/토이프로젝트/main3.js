const pattenDataSet = {
  labels: ["oiling", "health", "eatout", "shopping", "mart"],
  datasets: [
    {
      data: [56, 80, 233, 390, 46],
      backgroundColor: ["#FEC229", "#C4C4C4", "#00BDB2", "#BD5B00", "#0057BD"],
      cutout: 110,
    },
  ],
};

const configPatten = {
  type: "doughnut",
  data: pattenDataSet,
  options: {
    plugins: {},
    legend: {
      display: false,
    },
    cutoutPercentage: 75,
  },
};

const myPatten = new Chart(document.getElementById("myPatten"), configPatten);
