const labels = [
  "02",
  "04",
  "06",
  "08",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "26",
  "28",
  "30",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(5, 203, 102)",
      borderColor: "",
      data: [65, 59, 90, 81, 56, 45, 30, 20, 23, 37, 50, 20, 33, 57, 89, 13],
      maxBarThickness: 5,
      padding: 5,
      options: {
        legend: {
          display: false,
        },
      },
    },
  ],
};
const config = {
  type: "bar",
  data: data,
  options: {
    legend: {
      display: false,
    },
    scaleShowLabels: false,

    line: {
      borderCapStyle: "round",
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
