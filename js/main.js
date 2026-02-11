document.addEventListener("DOMContentLoaded", function () {

  const usersCount = document.getElementById("usersCount");
  const revenueCount = document.getElementById("revenueCount");
  const filterSelect = document.getElementById("filterSelect");

  const monthlyData = [12000, 19000, 15000, 22000, 26000, 30000];
  const weeklyData = [3000, 5000, 4000, 7000, 6500, 8000];

  const ctxLine = document.getElementById("lineChart");
  const ctxPie = document.getElementById("pieChart");

  const lineChart = new Chart(ctxLine, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Revenue",
        data: monthlyData,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#e0f2fe" } }
      },
      scales: {
        x: { ticks: { color: "#93c5fd" } },
        y: { ticks: { color: "#93c5fd" } }
      }
    }
  });

  new Chart(ctxPie, {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{
        data: [55, 35, 10],
        backgroundColor: [
          "#3b82f6",
          "#60a5fa",
          "#93c5fd"
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#e0f2fe" } }
      }
    }
  });

  filterSelect.addEventListener("change", function () {
    if (this.value === "weekly") {
      lineChart.data.datasets[0].data = weeklyData;
      lineChart.data.labels = ["W1", "W2", "W3", "W4", "W5", "W6"];
      usersCount.textContent = "8,420";
      revenueCount.textContent = "$42,300";
    } else {
      lineChart.data.datasets[0].data = monthlyData;
      lineChart.data.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      usersCount.textContent = "52,890";
      revenueCount.textContent = "$128,420";
    }
    lineChart.update();
  });

  usersCount.textContent = "52,890";
  revenueCount.textContent = "$128,420";

});
