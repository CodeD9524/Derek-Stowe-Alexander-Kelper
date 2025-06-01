document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const thisYear = today.getFullYear();
  const copyright = document.getElementById('copyright');
  if (copyright) {
    copyright.innerHTML = `&copy; Derek ${thisYear}. All rights reserved.`;
  }
});
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
const GITHUB_USERNAME = 'CodeD9524';
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => { 
    const repositories = data;
    const projectSection = document.getElementById('Projects');
    const projectList = projectSection.querySelector('ul');
    if (!repositories || repositories.length === 0) {
      projectSection.textContent = 'No projects found.';
      return; 
    }
    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement('li');
      let projectLink = document.createElement('a');
      projectLink.href = repositories[i].html_url; 
      projectLink.target = '_blank';
      projectLink.rel = 'noopener noreferrer'; 
      projectLink.innerText = repositories[i].name;
      project.appendChild(projectLink);
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
    const projectSection = document.getElementById('Projects');
    projectSection.textContent = 'Failed to load projects. Please try again later.';
  });