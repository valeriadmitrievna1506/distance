let FName, LName;

$("#go_button").click(function (evt) {
  evt.preventDefault();
  localStorage.setItem("FName", $("#Fname")[0].value);
  localStorage.setItem("LName", $("#Lname")[0].value);

  console.log(localStorage.getItem("FName"));
  console.log(localStorage.getItem("LName"));

  document.location.href = "../feed.html";
});