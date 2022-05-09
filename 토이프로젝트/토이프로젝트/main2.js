const canvas = document.querySelector(".canvas");

const context = canvas.getContext("2d");

const barChar = new Chart(myChartOne, {
  type: "bar", // pie, line, donut, polarArea ...
  data: {
    labels: [
      "봉준호",
      "타르코프스키",
      "대런애러노프스키",
      "드네 빌뇌브",
      "홍상수",
    ],
    datasets: [
      {
        label: "영화력",
        data: [300, 1000, 275, 350, 325],
        backgroundColor: [
          "red",
          "rgba(255, 255, 0, 0.5)",
          "purple",
          "orange",
          "lightblue",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
        barThickness: 36,
      },
    ],
  },
});
