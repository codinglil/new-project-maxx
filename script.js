let form = document.getElementById("formId");

function myForm() {
  let name = document.getElementById("name").value;
  let subject = document.querySelector(".subject").value;
  alert(
    `Thank you ${name.toUpperCase()},  I will contact you within 48 hours regarding "${subject.toUpperCase()}".`
  );
}
form.addEventListener("submit", myForm);
