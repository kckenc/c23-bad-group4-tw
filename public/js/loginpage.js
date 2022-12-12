function LogIn() {
	const logInButton = document.querySelector('#login')
	if (logInButton) {
		document
			.querySelector('#login')
			.addEventListener('submit', async (e) => {
				e.preventDefault()
				const form = e.target
				const formData = {
					username: form.username.value,
					password: form.password.value
				}
				const resp = await fetch('/login', {
					method: 'POST',
					headers: {
						'content-type': 'application/json; charset=utf-8'
					},
					body: JSON.stringify(formData)
				})
				let result = await resp.json()
				let message = result.message

				if (resp.status == 200) {
					alert(message)
					// window.location.href = "/"
					// console.log('check get history stack', window.history)
					// window.history.back();
					// window.history.go(-1)
					// window.location.reload();

					// dispatchEvent(new Event('load'))
				} else {
					alert(message)
					window.location.replace('/homepage.html')
				}
			})
	}
	return
}