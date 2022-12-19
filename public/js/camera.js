export async function closeAlertButton() {
	const el = document.querySelector('.close-alert')
    el.addEventListener('click', async () => {
        console.log(el.dataset.user)
		await fetch('/bye')
		
	})
}
