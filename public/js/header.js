window.onload = () => {
  loadHeader();
}

function loadHeader() {
  const header = document.querySelector(".header");
  const leftSide = document.createElement("div");
  leftSide.classList.add("left")
  const rightSide = document.createElement("div");
  rightSide.classList.add("right")
  const logoDiv = document.createElement("img");
  logoDiv.classList.add("logo");
  logoDiv.setAttribute('src',`../asset/logo.png`)
  const titleDiv = document.createElement("h4");
  titleDiv.classList.add("title");
  titleDiv.innerText = "Elder Ring";
  const welcomeDiv = document.createElement("h4");
  welcomeDiv.classList.add("welcome");
  const logoutDiv = document.createElement("div");
  logoutDiv.classList.add("logoutDiv");
  const logoutLogo = document.createElement("img");
  logoutLogo.classList.add("logoutImg")
  logoutLogo.setAttribute('src',`../asset/logout.png`);
  const logoutWord = document.createElement("a");
  logoutWord.classList.add("logoutWord");
  logoutWord.innerText = "Logout"

  header.appendChild(leftSide);
  leftSide.appendChild(logoDiv);
  leftSide.appendChild(titleDiv);
  header.appendChild(rightSide);
  rightSide.appendChild(logoutLogo);
  rightSide.appendChild(logoutWord);
}