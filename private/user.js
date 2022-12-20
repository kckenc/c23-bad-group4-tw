
	document.querySelector('#logout').addEventListener('click', async (e) => {
		const resp = await fetch('logout', { method: 'PUT' })
		if (resp.status === 200) {
			window.location = '/user.html'
		}
	})
