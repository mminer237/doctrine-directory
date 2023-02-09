"use strict";

let fontFamily = window.getComputedStyle(document.body).getPropertyValue('font-family');
let textColor = window.getComputedStyle(document.body).getPropertyValue('color');
var refTagger = {
	settings: {
		bibleVersion: "KJV",
		tooltipStyle: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light",
		socialSharing: ["twitter","facebook"],
		customStyle: {
			heading: {
				backgroundColor: window.getComputedStyle(document.getElementsByTagName("footer")[0]).getPropertyValue('background-color') ,
				color: textColor,
				fontFamily: fontFamily,
				fontSize: "20px"
			},
			body: {
				color: textColor,
				fontFamily: fontFamily,
				fontSize: "16px"
			}
		}
	}
};
(function(d, t) {
	var n=d.querySelector("[nonce]");
	refTagger.settings.nonce = n && (n.nonce||n.getAttribute("nonce"));
	var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
	g.src = "https://api.reftagger.com/v2/RefTagger.js";
	g.nonce = refTagger.settings.nonce;
	s.parentNode.insertBefore(g, s);
}(document, "script"));