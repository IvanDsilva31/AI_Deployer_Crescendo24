// Add your custom JavaScript here
// Countdown Timer
function countdown() {
  // Set the date for the next launch
  var launchDate = new Date("2024-03-01T00:00:00Z").getTime();
  var now = new Date().getTime();

  // Find the distance between now and the launch date
  var distance = launchDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Mission Launched!";
  }
}

// Update countdown every second
var countdownInterval = setInterval(countdown, 1000);

// Chart.js
var ctx = document.getElementById("metricsChart").getContext("2d");
var metricsChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Mission Success Rate",
      "Number of Active Missions",
      "Number of Completed Missions",
    ],
    datasets: [
      {
        label: "Key Metrics",
        data: [95, 10, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    // Adding shadows
    plugins: {
      legend: {
        labels: {
          filter: function (legendItem, chartData) {
            return (
              chartData.datasets[legendItem.datasetIndex].borderColor !==
              "transparent"
            );
          },
        },
      },
    },
    // Hover configuration
    hover: {
      mode: "nearest",
      intersect: true,
    },
  },
});

document
  .getElementById("launch-now-btn")
  .addEventListener("click", function () {
    // Change button text to "Launched"
    this.innerText = "Launched";
    // Optionally, you can disable the button after launch
    this.disabled = true;
  });
