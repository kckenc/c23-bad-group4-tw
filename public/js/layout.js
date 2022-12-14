window.onload = () => {
  loadHeader();
  loadNavBar();
}

function loadHeader() {
  const header = document.querySelector(".header");
  const leftSide = document.createElement("div");
  leftSide.classList.add("left")
  const rightSide = document.createElement("div");
  rightSide.classList.add("right")
  const logoDiv = document.createElement("img");
  logoDiv.classList.add("logo");
  logoDiv.setAttribute('src',`./asset/logo.png`);
  const titleDiv = document.createElement("h4");
  titleDiv.classList.add("title", "text");
  titleDiv.innerText = "Elder Ring";
  const welcomeDiv = document.createElement("h4");
  welcomeDiv.classList.add("welcome");
  welcomeDiv.innerText = "Hi";
  const logoutDiv = document.createElement("div");
  logoutDiv.classList.add("logoutDiv");
  const logoutLogo = document.createElement("img");
  logoutLogo.classList.add("logoutImg")
  logoutLogo.setAttribute('src',`./asset/logout.png`);
  const logoutWord = document.createElement("h4");
  logoutWord.classList.add("logoutWord", "text");
  logoutWord.innerText = "Logout"

  header.appendChild(leftSide);
  leftSide.appendChild(logoDiv);
  leftSide.appendChild(titleDiv);
  header.appendChild(rightSide);
  rightSide.appendChild(welcomeDiv);
  rightSide.appendChild(logoutLogo);
  rightSide.appendChild(logoutWord);
}

function loadNavBar() {
  const nav = document.querySelector(".sideNav");
  const container = document.createElement("div");
  container.classList.add("navContainer");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("homeDiv","navShare");
  const homeLogo = document.createElement("img");
  homeLogo.classList.add("navLogoSize");
  homeLogo.setAttribute("src",`./asset/home.png`);
  const homeText = document.createElement("div");
  homeText.innerText = "Home";
  const camDiv = document.createElement("div");
  camDiv.classList.add("camDiv","navShare");
  const camLogo = document.createElement("img");
  camLogo.classList.add("navLogoSize");
  camLogo.setAttribute("src",`./asset/cam.png`);
  const camText = document.createElement("div");
  camText.innerText = "Cameras";
  const settingDiv = document.createElement("div");
  settingDiv.classList.add("settingDiv","navShare");
  const settingLogo = document.createElement("img");
  settingLogo.setAttribute("src",`./asset/setting.png`);
  settingLogo.classList.add("navLogoSize");
  const settingText = document.createElement("div");
  settingText.innerText = "Setting";
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("aboutDiv", "navShare");
  const aboutLogo = document.createElement("img");
  aboutLogo.setAttribute("src",`./asset/about.png`);
  aboutLogo.classList.add("navLogoSize");
  const aboutText = document.createElement("div");
  aboutText.innerText = "About";

  nav.appendChild(container);
  container.appendChild(homeDiv);
  homeDiv.appendChild(homeLogo);
  homeDiv.appendChild(homeText);
  container.appendChild(camDiv);
  camDiv.appendChild(camLogo);
  camDiv.appendChild(camText);
  container.appendChild(settingDiv);
  settingDiv.appendChild(settingLogo);
  settingDiv.appendChild(settingText);
  container.appendChild(aboutDiv);
  aboutDiv.appendChild(aboutLogo);
  aboutDiv.appendChild(aboutText);
}