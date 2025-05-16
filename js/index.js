const footer = document.createElement('footer');
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement('p');
copyright.innerHTML = `© Derek ${thisYear}. All rights reserved.`;
footer.appendChild(copyright);
document.body.appendChild(footer);
const skills = ["HTML", "CSS", "Photoshop", "PowerPoint", "Excel", "Word"];
const skillsSection = document.getElementById("Skills");
let skillsList = skillsSection.querySelector("ul");
if (!skillsList) {
  skillsList = document.createElement("ul");
  skillsSection.appendChild(skillsList);
}
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;
  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);
  const messageSection = document.getElementById('messages');
  let messageList = messageSection.querySelector('ul');
  if (!messageList) {
    messageList = document.createElement('ul');
    messageSection.appendChild(messageList);
  }
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> <span>${userMessage}</span>`;
  const removeButton = document.createElement('button');
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener('click', () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});