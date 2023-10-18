// ==UserScript==
// @name            Youtube Anti-Adblock Popup Remover
// @namespace       NonoL3Robot Scripts
// @version         0.1
// @description     Script which remove the anti-Adblock Youtube popup
// @description:fr  Script qui supprime la popup anti-Adblock de Youtube
// @author          NonoL3Robot (https://github.com.com/NonoL3Robot/)
// @updateURL       https://raw.githubusercontent.com/NonoL3Robot/Youtube/AntiAdblockPopupRemover.user.js
// @downloadURL     https://raw.githubusercontent.com/NonoL3Robot/Youtube/AntiAdblockPopupRemover.user.js
// @supportURL      https://github.com.com/NonoL3Robot/Scripts/issues
// @match           https://youtube.com/watch?v=*
// @grant           none
// @compatible      chrome
// ==/UserScript==

(function () {
    'use strict';

    // remove popup
    document.querySelector('ytd-popup-container').style.setProperty('display', 'none');

    // remove overlay
    document.querySelector("tp-yt-iron-overlay-backdrop").className = 'closed';
})();