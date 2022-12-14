window.onload = async () => {
	LogIn()
}

function LogIn() {
		document.querySelector('#login').addEventListener('submit', async (e) => {
				e.preventDefault()
				const form = e.target
				const formData = {
					username: form.username.value,
					password: form.password.value
				}
				await fetch('/login', {
					method: 'POST',
					headers: {
						'content-type': 'application/json; charset=utf-8'
					},
					body: JSON.stringify(formData)
				})
	})
}
