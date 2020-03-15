function nav(choose) {
  if (choose == "success") {
    var x = document.getElementById("topnav-success");
    if (x.className === "topnav-success") {
      x.className += " responsive";
    } else {
      x.className = "topnav-success";
    }
  }

  if (choose == "danger") {
    var x = document.getElementById("topnav-danger");
    if (x.className === "topnav-danger") {
      x.className += " responsive";
    } else {
      x.className = "topnav-danger";
    }
  }

  if (choose == "warning") {
    var x = document.getElementById("topnav-warning");
    if (x.className === "topnav-warning") {
      x.className += " responsive";
    } else {
      x.className = "topnav-warning";
    }
  }

  if (choose == "info") {
    var x = document.getElementById("topnav-info");
    if (x.className === "topnav-info") {
      x.className += " responsive";
    } else {
      x.className = "topnav-info";
    }
  }

  if (choose == "light") {
    var x = document.getElementById("topnav-light");
    if (x.className === "topnav-light") {
      x.className += " responsive";
    } else {
      x.className = "topnav-light";
    }
  }

  if (choose == "dark") {
    var x = document.getElementById("topnav-dark");
    if (x.className === "topnav-dark") {
      x.className += " responsive";
    } else {
      x.className = "topnav-dark";
    }
  }
}
