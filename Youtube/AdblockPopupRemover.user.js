// ==UserScript==
// @name            Youtube Adblock Popup Remover
// @name:fr         Youtube Adblock Popup Remover
// @namespace       NonoL3Robot Scripts
// @version         1.4
// @description     Script which remove the Adblock Youtube popup 🚫
// @description:fr  Script qui supprime la popup Adblock de Youtube 🚫
// @author          NonoL3Robot (https://github.com.com/NonoL3Robot/)
// @license         MIT
// @require         https://greasyfork.org/scripts/383527-wait-for-key-elements/code/Wait_for_key_elements.js?version=701631
// @updateURL       https://raw.githubusercontent.com/NonoL3Robot/Youtube/AntiAdblockPopupRemover.user.js
// @downloadURL     https://raw.githubusercontent.com/NonoL3Robot/Youtube/AntiAdblockPopupRemover.user.js
// @supportURL      https://github.com/NonoL3Robot/Scripts/issues
// @match           https://www.youtube.com/watch?v=*
// @grant           none
// @compatible      chrome
// ==/UserScript==

(function () {
    'use strict';
    console.log("Youtube Adblock Popup Remover is running...");
    waitForKeyElements('ytd-enforcement-message-view-model', () => {
        // remove popup
        document.querySelector('ytd-popup-container').style.setProperty('display', 'none');
        // remove overlay
        document.querySelector("tp-yt-iron-overlay-backdrop").className = 'closed';
        console.log("Popup successfully removed !");
    })
})();