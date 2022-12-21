const socket = io();
const audio = document.getElementById("music");
const startbtn = document.getElementById("startbtn");
const iFrame = document.createElement("iframe");
let name1;

window.onload = () => {
  loadHeader();
  loadNavBar();
  loadFooter();
  initIframe();
  closeAlertButton();
  redirectSetting();
  redirectCam();
  redirectHome();

  startbtn.addEventListener("click", () => {
    startbtn.style.display = "none";
    audio.muted = true
    document.querySelector(".eleDiv").removeAttribute("hidden","")
    document.querySelector(".eleDiv2").removeAttribute("hidden","")
    // document.querySelector(".eleDiv3").removeAttribute("hidden","")
  });
  
  
  socket.on("hello", async function (name) {
    startbtn.click()
    audio.muted = false
    await audio.play()
    console.log(name)
    document.querySelector(`.revert.${name}`).classList.add("blink")
    alert(`${name} is leaving!`);
    name1 = name
  });
};

function closeAlertButton() {
  
  document.querySelectorAll(`.close-alert`).forEach((el) =>
    el.addEventListener("click", async (e) => {
      const user = e.target.dataset.user;
      console.log(user)
      document.querySelector(`.revert.${user}`).classList.remove("blink")
      await fetch(`/bye?name=${user}`);
    })
  );
}
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function initIframe() {
  const camMainDiv = document.querySelector(".cam-container");
  
  const eleDiv = document.createElement("div");
  setAttributes(eleDiv,{"class": "eleDiv","hidden":""})
  const roomDiv = document.createElement("div");
  const iFrame = document.createElement("iframe");
  setAttributes(iFrame, {
    class: "revert dylan",
    src: "http://192.168.160.78:5431",
    width: "400",
    height: "250",
  });
  const closeAlert = document.createElement("button");
  setAttributes(closeAlert, { class: "close-alert", "data-user": "dylan"});
  // , "onclick": closeAlertButton(id)
  closeAlert.innerText = "close alert";
  const elderlyNameDiv = document.createElement("div");
  setAttributes(elderlyNameDiv, { class: "elder-name" });
  elderlyNameDiv.innerText = "Dylan";

  camMainDiv.appendChild(eleDiv);
  eleDiv.appendChild(roomDiv);
  eleDiv.appendChild(iFrame);
  eleDiv.appendChild(closeAlert);
  eleDiv.appendChild(elderlyNameDiv);

  const eleDiv2 = document.createElement("div");
  setAttributes(eleDiv2,{"class": "eleDiv2","hidden":""})
  const roomDiv2 = document.createElement("div");
  const iFrame2 = document.createElement("iframe");
  setAttributes(iFrame2, {
    class: "revert ken",
    src: "http://192.168.160.149:5430",
    width: "400",
    height: "250",
  });
  const closeAlert2 = document.createElement("button");
  setAttributes(closeAlert2, { class: "close-alert", "data-user": "ken" });
  closeAlert2.innerText = "close alert";
  const elderlyNameDiv2 = document.createElement("div");
  setAttributes(elderlyNameDiv2, { class: "elder-name" });
  elderlyNameDiv2.innerText = "Ken";

  camMainDiv.appendChild(eleDiv2);
  eleDiv2.appendChild(roomDiv2);
  eleDiv2.appendChild(iFrame2);
  eleDiv2.appendChild(closeAlert2);
  eleDiv2.appendChild(elderlyNameDiv2);

  // const eleDiv3 = document.createElement("div");
  // setAttributes(eleDiv3,{"class": "eleDiv3","hidden":""})
  // const roomDiv3 = document.createElement("div");
  // const iFrame3 = document.createElement("iframe");
  // setAttributes(iFrame3, {
  //   class: "revert",
  //   src: "http://192.168.160.25:5432",
  //   width: "400",
  //   height: "250",
  // });
  // const closeAlert3 = document.createElement("button");
  // setAttributes(closeAlert3, { class: "close-alert", "data-user": "kyle" });
  // closeAlert3.innerText = "close alert";
  // const elderlyNameDiv3 = document.createElement("div");
  // setAttributes(elderlyNameDiv3, { class: "elder-name" });
  // elderlyNameDiv3.innerText = "Kyle";

  // camMainDiv.appendChild(eleDiv3);
  // eleDiv3.appendChild(roomDiv3);
  // eleDiv3.appendChild(iFrame3);
  // eleDiv3.appendChild(closeAlert3);
  // eleDiv3.appendChild(elderlyNameDiv3);
}

function redirectSetting() {
  const settingBtn = document.querySelector(".settingDiv");
  settingBtn.addEventListener("click", () => {
    window.location.href = "/setting.html";
  });
}
function redirectCam() {
  const settingBtn = document.querySelector(".camDiv");
  settingBtn.addEventListener("click", () => {
    window.location.href = "/camera1.html";
  });
}

function redirectHome() {
  const settingBtn = document.querySelector(".homeDiv");
  settingBtn.addEventListener("click", () => {
    window.location.href = "/camera1.html";
  });
}