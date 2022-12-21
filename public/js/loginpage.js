window.onload = () => {
  loadHeader();
  loadNavBar();
  loadFooter();
  logIn();
  camera();
  setting();
  about();
};

function logIn() {
  document.querySelector("#login").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      username: form.username.value,
      password: form.password.value,
    };
    const resp = await fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(formData),
    });
    if(resp.status == 200){
      window.location.href = "camera1.html";
    }
    console.log("resp.status")
  });
}

function camera() {
  const cameraBtn = document.querySelector(".camDiv");
  cameraBtn.addEventListener("click", () => {
    alert("Please Login First");
  });
}
function setting() {
  const settingBtn = document.querySelector(".settingDiv");
  settingBtn.addEventListener("click", () => {
    alert("Please Login First");
  });
}

function about() {
  const aboutBtn = document.querySelector(".aboutDiv");
  aboutBtn.addEventListener("click", () => {
    alert("Please Login First");
  });
}
