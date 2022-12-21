window.onload = () => {
  loadHeader();
  loadNavBar();
  loadFooter();
  redirectCam();
  redirectHome();
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