let employees = [
  {
      employeeId: 1,
      name: "sandeep",
      attendance: [1, 1, 0, 1, 1, 1, 0, 1, 0.5, 1, 0, 1, 1, 1, 0, 1, 1, 0.5, 1, 1],
      salaryGrowth: [800, 520, 5400, 560, 580],
      salesTarget: [500, 1000, 700, 110, 120]
  },
  {
      employeeId: 2,
      name: "jay",
      attendance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 1],
      salaryGrowth: [1600, 2200, 1100, 400, 1000],
      salesTarget: [1500, 1200, 900, 140, 1000]
  },
  {
      employeeId: 3,
      name: "sanket",
      attendance: [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0.5, 1, 0, 1, 1, 1, 0],
      salaryGrowth: [450, 470, 490, 510, 500],
      salesTarget: [500, 600, 300, 500, 1000]
  },
  {
      employeeId: 4,
      name: "sahil",
      attendance: [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5],
      salaryGrowth: [4800, 500, 520, 540, 560],
      salesTarget: [400, 1600, 700, 500, 400]
  },
  {
      employeeId: 5,
      name: "vikas",
      attendance: [1, 1, 0, 1, 1, 0, 1, 1, 0.5, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0.5],
      salaryGrowth: [460, 480, 500, 520, 540],
      salesTarget: [850, 600, 700, 110, 125]
  },
];


let nameElement = document.getElementById("EmpName");
let averageElement = document.getElementById("average");
let salaryGrowthElement = document.getElementById("SalaryGrowt");
let maxSellingElement = document.getElementById("MaxSalling");
let searchEmployeeNameElement = document.getElementById("searchEmployeName");
let barChart = null;
let lineChart = null;

function updateStatistics(employeeId) {
  let employee = employees[employeeId];

  nameElement.innerText = employee.name;

  let totalDays = employee.attendance.length;
  let presentDays = employee.attendance.filter(day => day === 1).length;
 
  let averageAttendance = (presentDays / totalDays * 100).toFixed(2);
  averageElement.innerText = `${averageAttendance} %`;

  let startSalary = employee.salaryGrowth[0];
  let endSalary = employee.salaryGrowth[employee.salaryGrowth.length - 1];
  let years = employee.salaryGrowth.length;
  let salaryGrowth = (((endSalary - startSalary) / startSalary) / years * 100).toFixed(2);
  salaryGrowthElement.innerText = `${salaryGrowth} %`;

  let maxSelling = Math.max(...employee.salesTarget);

  maxSellingElement.innerText = maxSelling;
}

function updateCharts(employeeId) {
  if (barChart) {
      barChart.destroy();
  }
  if (lineChart) {
      lineChart.destroy();
  }

  let employee = employees[employeeId];

  let barChartContext = document.getElementById("barChart").getContext("2d");
  barChart = new Chart(barChartContext, {
      type: 'bar',
      data: {
          labels: [...Array(employee.attendance.length).keys()].map(i => `Day ${i + 1}`),
          datasets: [{
              label: 'Attendance',
              data: employee.attendance,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  let lineChartContext = document.getElementById("salaryGrowthChart").getContext("2d");
  lineChart = new Chart(lineChartContext, {
      type: 'line',
      data: {
          labels: [...Array(employee.salaryGrowth.length).keys()].map(i => `Year ${i + 1}`),
          datasets: [{
              label: 'Salary Growth',
              data: employee.salaryGrowth,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
          }, {
              label: 'Sales Target',
              data: employee.salesTarget,
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function setupEmployeeDropdown() {
  let optionsHTML = employees.map((employee, index) => `<option value="${index}">${employee.name}</option>`).join('');
  searchEmployeeNameElement.innerHTML = optionsHTML;

  searchEmployeeNameElement.addEventListener('change', function () {
      let selectedEmployeeId = parseInt(this.value, 10);
      updateStatistics(selectedEmployeeId);
      updateCharts(selectedEmployeeId);
  });
}

setupEmployeeDropdown();
updateStatistics(0);
updateCharts(0);
