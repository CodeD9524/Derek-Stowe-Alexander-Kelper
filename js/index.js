const footer = document.createElement('footer');
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement('p');
copyright.innerHTML = `© Derek ${thisYear}. All rights reserved.`;footer.appendChild(copyright);
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
