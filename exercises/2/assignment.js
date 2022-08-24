const task3Element = document.getElementById("task-3");

function showAlert() {
  alert("XDDDDDDDDDDDDD");
}

function showName(name) {
  alert("Name: " + name);
}

showAlert();
showName("Zenobia");

task3Element.addEventListener("click", showAlert);

function concatStrings(s1, s2, s3) {
  return s1 + s2 + s3;
}

alert(concatStrings("a", "b", "c"));
