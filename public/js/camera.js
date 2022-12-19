import{loadHeader, loadNavBar, loadFooter} from "../js/layout.js"

window.onload = () => {
  loadHeader();
  loadNavBar();
  loadFooter();
  closeAlertButton();
}

function closeAlertButton() {
	document.querySelector('#dylan').addEventListener('click', async () => {
        console.log("lmsl")
		await fetch('/bye')
		
	})
}
