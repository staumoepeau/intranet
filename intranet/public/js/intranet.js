var fontSizeArray = [];
(function ($) {
  $(document).ready(function(){
	AddFullsizeBtn();
	AddEventListenerToBTN1();
  });
}(jQuery));

function AddFullsizeBtn() {
	var node = document.createElement("LI");
	var a_tag = document.createElement("A");
	a_tag.setAttribute('id','fullsizebtn');
	var t = document.createTextNode("Fullsize View");
	a_tag.appendChild(t);
	node.appendChild(a_tag);
	document.getElementById("toolbar-user").insertBefore(node, document.getElementById("toolbar-user").getElementsByClassName("divider")[0]);
}

function GoFullsize() {
	//removed, belongs to v1.1.0
	//askForResizeFont();
	var sheet = document.createElement('style')
	sheet.setAttribute('id','fullsizestyle');
	sheet.innerHTML = ".container {width: 100% !important;}";
	document.body.appendChild(sheet);
	prepareBackToNormalView();
}

function AddEventListenerToBTN1() {
	document.getElementById("fullsizebtn").onclick = function() {GoFullsize()};
}

function AddEventListenerToBTN2() {
	document.getElementById("fullsizebtn").onclick = function() {BackToNormalView()};
}

//function prepareBackToNormalView() {
//	document.getElementById("fullsizebtn").innerHTML="Normal View";
//	AddEventListenerToBTN2();
//}

function BackToNormalView() {
	var sheetToBeRemoved = document.getElementById('fullsizestyle');
	var sheetParent = sheetToBeRemoved.parentNode;
	sheetParent.removeChild(sheetToBeRemoved);
	document.getElementById("fullsizebtn").innerHTML="Fullsize View";
	//removed, belongs to v1.1.0
	//goBackToOldSizes();
	AddEventListenerToBTN1();
}


function askForResizeFont() {
	frappe.prompt([
			{'fieldname': 'size', 'fieldtype': 'Int', 'label': 'New Font-Size in %:', 'reqd': 1, 'default': '100'}  
		],
		function(data){
			if (parseInt(data.size) > 100) {
				frappe.show_alert("New Font-Size: "+data.size+"%", 5);
			} else {
				frappe.show_alert("New Font-Size smaller than 100% - no change triggered!", 5);
			}
		},
		'Set optionally new Font-Size',
		'Set'
	)
}