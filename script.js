const navToggler = document.querySelector(".nav__toggler");
const navbarCollapse = document.querySelector(".navbar--collapse");
const progressHtml = document.querySelector(".progress-html");
const progressJs = document.querySelector(".progress-js");
const progressReact = document.querySelector(".progress-react");
const progressRedux = document.querySelector(".progress-redux");
const progressNode = document.querySelector(".progress-node");
const expTab = document.querySelector(".exp__tab");
const eduTab = document.querySelector(".edu__tab");
const tabListExp = document.querySelector(".tab__list__exp");
const tabListEdu = document.querySelector(".tab__list__edu");
const email = document.querySelector(".email");

navToggler.addEventListener("click", () =>
  navbarCollapse.classList.toggle("show__navbar")
);

window.onload = function() {
  progressHtml.style.width = "85%";
  progressJs.style.width = "80%";
  progressReact.style.width = "85%";
  progressRedux.style.width = "80%";
  progressNode.style.width = "70%";
};

expTab.addEventListener("click", function() {
  expTab.classList.add("tabs__item--chosen");
  eduTab.classList.remove("tabs__item--chosen");
  tabListExp.style.display = "block";
  tabListEdu.style.display = "none";
});

eduTab.addEventListener("click", function() {
  eduTab.classList.add("tabs__item--chosen");
  expTab.classList.remove("tabs__item--chosen");
  tabListEdu.style.display = "block";
  tabListExp.style.display = "none";
});

email.addEventListener("focus", () => {
  email.setAttribute("placeholder", "");
});

email.addEventListener("blur", () => {
  email.setAttribute("placeholder", "Enter email address");
});
