window.onload = () => {
loadHeader();
loadNavBar();
loadFooter();
signUp();
}

function signUp() {
  document.querySelector("#register").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formBody = {
      registerName: form.registerName.value,
      registerPassword: form.registerPassword.value,
      registerPassword2: form.registerPassword2.value,
    };

    const resp = await fetch("/register", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      // serialization
      body: JSON.stringify(formBody),
    });

    if (resp.status === 201) {
      form.reset();
      window.location = "/camera.html";
      // document.querySelector("#loginUser").addEventListener
      // alert("你成功注冊咗啦");
    } else {
      const data = await resp.json();
      alert(data.message);
    }
  });
}