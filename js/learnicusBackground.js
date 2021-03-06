// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "webkitNotifications.requestPermission" beforehand).
  http://developer.chrome.com/extensions/notifications.html
*/
console.log('START----|js/learnicusBackground.js       |=OK!');

/*
// Поки що вийшло організувати роботу НАПРЯМУ без пача! активувати його лише тоді, коли не буде іншого виходу!
// PATCH! для виправлення можливостай робити кліки на кнопках на сторінці налаштувань 
// http://stackoverflow.com/questions/11996053/detect-a-button-click-in-the-browser-action-form-of-a-google-chrome-extension
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case 'popup-click':
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                //file: 'learnicusRestart.js', // script to inject into page and run in sandbox
                file: chrome.extension.getURL('js/learnicusRestart.js'), // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert('Unmatched request of "'+ request +'" from script to background.js from '+ sender);
        }
    }
);
// PATCH END
*/


// ########## BUZZ CHECK ##########
// API --  http://buzz.jaysalvat.com/documentation
console.log('BUZZ|Check browser');  // Check if the HTML5 audio tag is supported by the browser.
if (!buzz.isSupported()) {alert("Your browser is too old, time to update!");}
console.log('BUZZ|Check OGG Format'); // Check if the OGG audio format is supported by the browser.
if (!buzz.isOGGSupported()) {alert("Your browser doesn't support OGG Format.");}
console.log('BUZZ|Check WAV Format'); // Check if the WAV audio format is supported by the browser.
if (!buzz.isWAVSupported()) {alert("Your browser doesn't support WAV Format.");}
console.log('BUZZ|Check MP3 Format'); // Check if the MP3 audio format is supported by the browser.
if (!buzz.isMP3Supported()) {alert("Your browser doesn't support MP3 Format.");}
console.log('BUZZ|Check AAC Format'); // Check if the AAC audio format is supported by the browser.
if (!buzz.isAACSupported()) {alert("Your browser doesn't support AAC Format.");}
// ########## BUZZ CHECK END ##########




//########### showNotification - START ########## // v2
function showNotification() { // v0.1.5 оригнал: нижче пробував $(document).ready(function ()  - то воно глючить, а так (v0.1.5) за 1 цикл починає вже нормально працювати!
// $(document).ready(function show() {

	// RANDOM START
	// использование Math.round() даст неравномерное распределение!
	var randomIdMax = localStorage.ls_current_maxId;                            // v3
	var randomId = Math.floor(Math.random() * randomIdMax);
	localStorage.ls_current_randomId = randomId;                                // v3
	console.log('RANDOM = '+ localStorage.ls_current_randomId);
    console.log('RANDOM : '+ localStorage.ls_current_WatchWordCounter +'|'+ localStorage.ls_SoundLang1 +'-'+ localStorage.ls_SoundLang2 +'|rnd='+ localStorage.ls_current_randomId +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1word_'+ randomId) +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1trans_'+ randomId) +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang2word_'+ randomId) +''); //v3
	// RANDOM END

  // ########## BUZZ ##########
  // API --  http://buzz.jaysalvat.com/documentation
  var learnicusSoundName  = localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1mp3_'+ randomId);     // на 0.2.31 
  //var learnicusSoundName  = learnicusSoundName.toLowerCase();                                                       // на 0.2.23 почало глючити
  var learnicusSoundName1 = localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1mp3_'+ randomId);     // на 0.2.30 
  var learnicusSoundName2 = localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang2mp3_'+ randomId);     // на 0.2.30 

  console.log('BUZZ|learnicusSoundName  ='+ learnicusSoundName); 
  var learnicusSoundName = localStorage.getItem('lsFileNameId_'+ randomId);
  var learnicusSoundUrl  = chrome.extension.getURL('/offline/en/'+ learnicusSoundName +'.mp3');                       // v0.2.4
  //var learnicusSoundUrl  = chrome.extension.getURL('/offline/'+  +'/'+ learnicusSoundName +'.mp3'); // v0.2.5
  //console.log('BUZZ|mySoundUrl  ='+ mySoundUrl);
  var learnicusSound = new buzz.sound(learnicusSoundUrl);
  //console.log('BUZZ|mySound ='+ mySound);
  //console.log('BUZZ|Присвоіли змінну');
  learnicusSound.load();
  //console.log('BUZZ|mySound.load();');
  learnicusSound.play();
  //console.log('BUZZ|mySound.play();');
  // ########## BUZZ END ######

		if (localStorage.learnicusSoundActivated1 == 'true') {  
		//console.log('ОРИГІНАЛ чекбокс    стоїть = ('+ localStorage.learnicusSoundActivated1+') '); // НЕ ВИДАЛЯТИ!
		  // ########## BUZZ-1 ##########
		  var learnicusSoundUrl1  = chrome.extension.getURL('/offline/'+ localStorage.ls_SoundLang1 +'/'+ learnicusSoundName1 +'.mp3'); // v0.2.5
		  // <audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" autoplay>   // v0.2.6 це аналог без БУЗЗ - методом браузера, (можливо так можна буде позбутись дублювання звуку)
		  //console.log('BUZZ|mySoundUrl  ='+ mySoundUrl);
		  var learnicusSound1 = new buzz.sound(learnicusSoundUrl1);
		  //console.log('BUZZ|mySound ='+ mySound);
		  //console.log('BUZZ|Присвоіли змінну');
		  learnicusSound1.load();                        //v0.2.5
		  //console.log('BUZZ|mySound.load();');
		  // learnicusSound1.play();                     //v0.2.5
		  //learnicusSound1.stop()
		  //console.log('BUZZ|mySound.play();');
		  // ########## BUZZ END ######
		learnicusSound1.play();                          //v0.2.5
		} else {
		//console.log('ОРИГІНАЛ чекбокс НЕ стоїть = ('+ localStorage.learnicusSoundActivated1+') ');  // НЕ ВИДАЛЯТИ!
		}

		if (localStorage.learnicusSoundActivated2 == 'true') {   
		//console.log('ПЕРЕКЛАД чекбокс    стоїть = ('+ localStorage.learnicusSoundActivated2+') ');  // НЕ ВИДАЛЯТИ!

			// ########## BUZZ-2 ##########
			// var learnicusSoundUrl2  = chrome.extension.getURL('/offline/'+ localStorage.learnicusSound2 +'/'+ learnicusSoundName2 +'.mp3'); // v0.2.5
			var learnicusSoundUrl2  = chrome.extension.getURL('/offline/'+ localStorage.ls_SoundLang2 +'/000.mp3'); // v0.2.5 TEST
			//console.log('BUZZ|mySoundUrl  ='+ mySoundUrl);
			var learnicusSound2 = new buzz.sound(learnicusSoundUrl2);
			//console.log('BUZZ|mySound ='+ mySound);
			//console.log('BUZZ|Присвоіли змінну');
			learnicusSound2.load();                         //v0.2.5
			//console.log('BUZZ|mySound.load();');
			//learnicusSound2.play();                         //v0.2.5
			//learnicusSound2.stop()
			//console.log('BUZZ|mySound.play();');
			// ########## BUZZ END ######  


		// ТЕСТ-1 СТАРТ
		/*
		var a=0;
		while(a<10) {
			a=a+1;
			if (learnicusSound1.play() == 'true') {
				console.log('грає, нічого не робимо');
				learnicusSound2.stop();
				// learnicusSound2.play();
			} else {
				a=a+1;
				console.log('НЕ ГРАЄ - стартуємо-2!');
				learnicusSound1.stop();
			};
			setTimeout(function(){console.log('AAAAA  = ('+a)},1000);
		};
		*/      
		// ТЕСТ-1 ЕНД
		// ТЕСТ-2 СТАРТ
		/*
				setInterval(function() {
					  //if (learnicusSound1.isEnded()) {
					  if (learnicusSound1.play() == 'true') {
						  console.log('грає, нічого не робимо');
						  learnicusSound2.stop();
						  // learnicusSound2.play();
					  } else {
						  console.log('НЕ ГРАЄ - стартуємо-2!');
						  learnicusSound1.stop();
					  } 
				}, 1000); // 1min = 60000, 1sec = 1000
		*/
		// ТЕСТ-2 ЕНД
		learnicusSound2.play();                         //v0.2.5
		} else {
		//console.log('ПЕРЕКЛАД чекбокс НЕ стоїть = ('+ localStorage.learnicusSoundActivated2+') ');  // НЕ ВИДАЛЯТИ!
		}
// ###### NOTIFICATION (розмістити ТУТ) ########## // v2



console.log('FULL LOAD|js/learnicusBackground.js       |=OK!');
};