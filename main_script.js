(async function() {

	const currentURL = window.location.href;

	var selectedText = window.getSelection().toString();

	if (currentURL.includes("https://google-admin.corp.google.com/athena/multiple_review/queue") || currentURL.includes("https://google-admin.corp.google.com/athena/lookup/queue")) {

		itemCheck();

		autoFill();

	} else if (currentURL.includes("https://www.google.com/search")) {

		openTools();

	} else if (currentURL.includes("https://docs.google.com")) {

		if (selectedText) {

			randomizer();

		} else {

			dcrFunc();

		}

	} else {

		alert("Please navigate to Athena or use this for opening tools!");

	}


	function itemCheck() {

		const activeElements = document.querySelectorAll('[c-wiz][style*="visibility: visible; opacity: 1;"][aria-busy="false"]');

		const UqOYud = Array.from(activeElements[0].getElementsByClassName("UqOYud"));

		const checkBox = Array.from(activeElements[0].getElementsByClassName("anP1Nc"));

		const userCount = UqOYud[5]?.innerText || "";

		const manifest = UqOYud[7]?.innerText || "";

		const rhc = checkBox[6];

		const inputTag = rhc.querySelector("input[type=%27checkbox%27]");

		if (userCount >= 1000) {

			alert(`This is high user base with ${userCount} user count. Please seek SME approval if rejecting the item!`);

		} else {

			console.log(userCount, " Users");

		}

		if (manifest == 2) {

			inputTag.disabled = true;

			console.log("RHC Disabled");

		} else {

			console.log("Manifest version ", manifest);

			return

		}

	}

	async function openTools() {

		var selectedText = window.getSelection().toString();

		const navitron = "https://navitron2.corp.google.com/search?q=";

		const actionLog = "https://chrome.google.com/webstore/admin/actions/draft?history=";

		const actionLog2 = "https://webstore-prod.corp.google.com/webstore/adminconsole/item/adminactionhistory?itemId=";

		const buganizer = "https://buganizer.corp.google.com/issues?q=";

		const webstore = "https://chrome.google.com/webstore/detail/";

		const telemetry = "https://data.corp.google.com/sites/safe_browsing_crx_api_telemetry/crx_telemetry/?p=URL:track.flexlinkspro.com&p=EXTENSION_ID:";

		const itemDetails = "https://webstore-prod.corp.google.com/webstore/adminconsole/item/itemdetailsview?itemId=";

		const sensitiveItem = "https://docs.google.com/spreadsheets/d/1YcuIU02IuPniKRrijYLVLBpceG_4IIZbOTY723e-ALI/edit?hl=en&forcehl=1&pli=1&gid=847872629#gid=847872629";

		const falsePositive = "https://docs.google.com/spreadsheets/d/15h83qp9pAri79Dx7mNscY3VOVwdgFa31jE2ZPbaWEp4/edit?gid=0#gid=0";

		const googleDrive = "https://drive.google.com/corp/drive/search?q=";

		const itemHistory = "https://navitron2.corp.google.com/item_history?extensionId=";

		const telemetryRedirection = "https://dashboards.corp.google.com/_410a4c9e_9717_4ccb_97c1_ef315756c208?fb=id:eq:";

		const localeKws = "https://data.corp.google.com/sites/yekxymkrtaq/locales_title_kws/?p=EXTENSION_ID:";

		const userReviews = "https://dashboards.corp.google.com/_8c36a7a4_dbcc_4c9d_89c5_57e5d8ab6ac7?p=extension_id:";

		const trustGraph = "https://dashboards.corp.google.com/_4de9fdcb_b1f3_44df_99a3_e5e80c4cd138?p=EXTENSION_ID:";

		const webstoreItemName = "preview-internal/";

		if (selectedText) {

			window.open(webstore + webstoreItemName + selectedText + "", "_blank");

			window.open(sensitiveItem + "", "_blank");

			window.open(buganizer + selectedText + "", "_blank");

			window.open(actionLog2 + selectedText + "", "_blank");

			window.open(navitron + selectedText + "", "_blank");

			window.open(itemDetails + selectedText + "", "_blank");

			window.open(itemHistory + selectedText + "", "_blank");

			window.open(telemetry + selectedText + "", "_blank");

			window.open(telemetryRedirection + selectedText + "", "_blank");

			window.open(localeKws + selectedText + "", "_blank");

			window.open(userReviews + selectedText + "", "_blank");

			window.open(trustGraph + selectedText + "", "_blank");

			window.open(googleDrive + selectedText + "", "_blank");

		} else {

			const activeElements = document.querySelectorAll('[c-wiz][style*="visibility: visible; opacity: 1;"][aria-busy="false"]');

			const UqOYud = Array.from(activeElements[0].getElementsByClassName("UqOYud"));

			var itemID = UqOYud[1]?.innerText || "";

			var email = UqOYud[13]?.innerText || "";

			var revision = UqOYud[9]?.innerText || "";

			window.open(webstore + webstoreItemName + itemID + "", "_blank");

			window.open(sensitiveItem + "", "_blank");

			window.open(buganizer + itemID + "", "_blank");

			window.open(actionLog2 + itemID + "", "_blank");

			window.open(navitron + itemID + "", "_blank");

			window.open(itemDetails + itemID + "", "_blank");

			window.open(itemHistory + itemID + "", "_blank");

			window.open(telemetry + itemID + "", "_blank");

			window.open(telemetryRedirection + itemID + "", "_blank");

			window.open(localeKws + itemID + "", "_blank");

			window.open(userReviews + itemID + "", "_blank");

			window.open(trustGraph + itemID + "&p=REVISION:" + revision + "", "_blank");

			window.open(googleDrive + itemID + "", "_blank");

		}

	}

	if (window.location.href === "https://navitron2.corp.google.com/item_history") {

		document.addEventListener("DOMContentLoaded", function() {

			var inputElement = document.getElementById("mat-input-1");

			if (inputElement) {

				inputElement.value = "CWS_DEVELOPER";

			} else {

				throw new Error("Input element with id 'mat-input-1' not found.");

			}

		});

	}

	async function dcrFunc() {

		var confirmation = window.confirm("Choose an action:\n\n1. Reset DCR Content - Press OK\n2. Copy document ID - Press CANCEL");

		if (confirmation) {

			resetDcr();

		} else {

			getdocumentID();

		}

		async function resetDcr() {

			var currentURL = window.location.href;

			var documentId = currentURL.split('/')[5];

			var dummyInput = document.createElement("input");

			document.body.appendChild(dummyInput);

			dummyInput.setAttribute("value", documentId);

			dummyInput.select();

			document.execCommand("copy");

			document.body.removeChild(dummyInput);

			const clipText = await navigator.clipboard.readText();

			var data = 'documentId=' + clipText;

			window.open("https://script.google.com/a/macros/google.com/s/AKfycbz2ekkjPXcABdVANxfB3gIaJap1FHb1rjtbiOiXgtk/dev" + "?" + data);

		}


		function getdocumentID() {

			var currentURL = window.location.href;

			var documentId = currentURL.split('/')[5];

			var dummyInput = document.createElement("input");

			document.body.appendChild(dummyInput);

			dummyInput.setAttribute("value", currentURL);

			dummyInput.select();

			document.execCommand("copy");

			document.body.removeChild(dummyInput);

		}

	}

	async function randomizer() {

		var length = 30;

		var result = '';

		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz0123456789';

		var charactersLength = characters.length;

		for (var i = 0; i < length; i++) {

			result += characters.charAt(Math.floor(Math.random() * charactersLength));

		}

		var inp = window.document.createElement('input');

		inp.id = 'string';

		window.document.body.appendChild(inp);

		document.getElementById('string').value = '[Need-To-Know] ' + result;

		document.getElementById('string').select();

		document.execCommand('copy');

		document.body.removeChild(inp);

		var crN = document.getElementsByClassName("docs-title-input");

		crN[0].id = "hh3";

		document.getElementById('hh3').select();

		document.execCommand('paste');

		document.getElementById('hh3').select();

		document.execCommand('paste');

		document.getElementsByClassName("docs-title-input")[0].removeAttribute('id');

	}

	async function autoFill() {

		const activeElements = document.querySelectorAll('[c-wiz][style*="visibility: visible; opacity: 1;"][aria-busy="false"]');

		const UqOYud = Array.from(activeElements[0].getElementsByClassName("UqOYud"));

		const VfYNEb = Array.from(activeElements[0].getElementsByClassName("VfYNEb"));

		var itemName = UqOYud[0]?.innerText || "";

		var itemID = UqOYud[1]?.innerText || "";

		var revision = UqOYud[9]?.innerText || "";

		var visibility = UqOYud[10]?.innerText || "";

		var TT = UqOYud[11]?.innerText || "";

		var state = UqOYud[3]?.innerText || "";

		var reviewer = "ldap";

		var permissions = [];

		var iStart = 15;

		if (TT === "true") {

			visibility = "PTT";

		}

		for (var i = iStart;; i += 3) {

			var permissionElement = VfYNEb[i];

			var permissionValue = permissionElement ? permissionElement.innerText : "";

			if (permissionValue === "HOST" || permissionValue === "REMOTE_SCRIPT") {

				break;

			}

			permissions.push(permissionValue + "\n");

		}

		const clipText = await navigator.clipboard.readText();

		var documentId = clipText.split('/')[5];

		var filteredPermissions = permissions.filter(permission => permission.trim() !== "Item's Functionality" && permission.trim() !== "" && permission.trim() !== "MANUAL_REVIEW" && permission.trim() !== "POTENTIALLY_UNWANTED" && permission.trim() !== "POLICY_VIOLATION" && permission.trim() !== "SPAM" && permission.trim() !== "CORPORATE_POLICY");

		var data = 'name=' + itemName + '&id=' + itemID + '&revision=' + revision + '&visibility=' + visibility + '&reviewer=' + reviewer + '&permissions=' + filteredPermissions;

		var appLink = 'https://script.google.com/a/macros/google.com/s/AKfycbx5_j5fm-w7WqWpFuZTLajOpmrLXCWsux_nN_-p0RA/dev';

		var data2 = 'name=' + itemName + '&id=' + itemID + '&revision=' + revision + '&visibility=' + visibility + '&reviewer=' + reviewer + '&documentId=' + documentId + '&permissions=' + filteredPermissions;

		var appLink2 = 'https://script.google.com/a/macros/google.com/s/AKfycbwOZ4BTjx5W6fErWHTBUqhVmav79T-Bk7-JiSjPF8js/dev';

		if (clipText.includes("https://docs.google.com")) {

			window.open(appLink2 + '?' + data2);

		} else {

			openTools();

			window.open(appLink + '?' + data);

		}

	}

})();
