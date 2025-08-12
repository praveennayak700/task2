// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const messageBox = document.getElementById("formMessage");

  if (!name || !email || !message) {
    messageBox.textContent = "All fields are required!";
    messageBox.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messageBox.textContent = "Invalid email format!";
    messageBox.style.color = "red";
    return;
  }

  messageBox.textContent = "Form submitted successfully!";
  messageBox.style.color = "green";
  this.reset();
});

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}