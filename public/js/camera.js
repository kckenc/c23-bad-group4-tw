

window.onload = () => {
  loadHeader();
  loadNavBar();
  loadFooter();
  closeAlertButton();
  initIframe();
}

function closeAlertButton() {
	// document.querySelector('#dylan').addEventListener('click', async () => {
  //       console.log("lmsl")
	// 	await fetch('/bye')
		
	// })
}
function setAttributes(el, attrs) {
  for(let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function initIframe() {
  const camMainDiv = document.querySelector('.cam-container');
  const eleDiv = document.createElement('div');
  const roomDiv = document.createElement('div');
  const iFrame = document.createElement('iframe');
  setAttributes(iFrame, {"class":"revert","src": "http://192.168.160.78:5431", "width": "350", "height": "200"});
  const closeAlert = document.createElement('button');
  setAttributes(closeAlert, {"class":"close-alert", "data-user": "dylan"});
  closeAlert.innerText = "close alert";
  const elderlyNameDiv = document.createElement('div');
  setAttributes(elderlyNameDiv, {"class":"elder-name"});
  elderlyNameDiv.innerText = "Dylan";

  camMainDiv.appendChild(eleDiv);
  eleDiv.appendChild(roomDiv);
  eleDiv.appendChild(iFrame);
  eleDiv.appendChild(closeAlert);
  eleDiv.appendChild(elderlyNameDiv);

  const eleDiv2 = document.createElement('div');
  const roomDiv2 = document.createElement('div');
  const iFrame2 = document.createElement('iframe');
  setAttributes(iFrame2, {"class":"revert","src": "http://192.168.160.149:5430", "width": "350", "height": "200"});
  const closeAlert2 = document.createElement('button');
  setAttributes(closeAlert2, {"class":"close-alert", "data-user": "ken"});
  closeAlert2.innerText = "close alert";
  const elderlyNameDiv2 = document.createElement('div');
  setAttributes(elderlyNameDiv2, {"class":"elder-name"});
  elderlyNameDiv2.innerText = "Ken";

  camMainDiv.appendChild(eleDiv2);
  eleDiv2.appendChild(roomDiv2);
  eleDiv2.appendChild(iFrame2);
  eleDiv2.appendChild(closeAlert2);
  eleDiv2.appendChild(elderlyNameDiv2);

  const eleDiv3 = document.createElement('div');
  const roomDiv3 = document.createElement('div');
  const iFrame3 = document.createElement('iframe');
  setAttributes(iFrame3, {"class":"revert","src": "http://192.168.160.25:5432", "width": "350", "height": "200"});
  const closeAlert3 = document.createElement('button');
  setAttributes(closeAlert3, {"class":"close-alert", "data-user": "kyle"});
  closeAlert2.innerText = "close alert";
  const elderlyNameDiv3 = document.createElement('div');
  setAttributes(elderlyNameDiv3, {"class":"elder-name"});
  elderlyNameDiv3.innerText = "Kyle";

  camMainDiv.appendChild(eleDiv3);
  eleDiv3.appendChild(roomDiv3);
  eleDiv3.appendChild(iFrame3);
  eleDiv3.appendChild(closeAlert3);
  eleDiv3.appendChild(elderlyNameDiv3);
}