
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const usertable = document.getElementById("usertable");

    let users = [];

    async function fetchdata() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
          console.error("not data found");
        }
        const data = await response.json();
        users = data;
        displaydata(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    function displaydata(users) {
      usertable.innerHTML = "";
      users.forEach((user,index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
        `;
        usertable.appendChild(row);
      });
    }

    function filterdata(query) {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      displaydata(filteredUsers);
    }

    searchButton.addEventListener("click", function () {
      const searchText = searchInput.value.trim();
      filterdata(searchText);
    });

    searchInput.addEventListener("keyup", function (event) {
      const searchText = event.target.value.trim();
      filterdata(searchText);
    });

    fetchdata();