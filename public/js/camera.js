export function closeAlertButton() {
	document.querySelector('#dylan').addEventListener('click', async () => {
        console.log("lmsl")
		await fetch('/bye')
		
	})
}
