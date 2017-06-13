var ThisFileName    = 'learnicusNotification';  // назва цього файла.
var ThisFileNameExt = 'js';            // тип цього файла. 



// ########## NOTIFICATION ##########
// learnicusNotificationTest
// $.notification.requestPermission(function () {console.log($.notification.permissionLevel());});
$('.learnicusNotificationPermission').text('Notifications are ' + $.notification.permissionLevel()); // learnicusNotificationPermission
$('.learnicusNotificationTest').click(function () {
	// RANDOM START
	// использование Math.round() даст неравномерное распределение!
    var randomIdMax = localStorage.ls_current_maxId;                            // v0.2.30
    var randomId = Math.floor(Math.random() * randomIdMax);
    localStorage.ls_current_randomId = randomId;                                // v0.2.30
    console.log('RANDOM = '+ localStorage.ls_current_randomId);
    console.log('RANDOM : '+ localStorage.ls_current_WatchWordCounter +'|'+ localStorage.ls_SoundLang1 +'-'+ localStorage.ls_SoundLang2 +'|rnd='+ localStorage.ls_current_randomId +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1word_'+ randomId) +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1trans_'+ randomId) +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang2word_'+ randomId) +''); //0.2.31
	// RANDOM END
    var options = {
        tag: 'notificationReplaceId',
        iconUrl: chrome.extension.getURL('icons/icon32.png'),
        title:    localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang1word_'+ randomId) +' ['+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang1trans_'+ randomId) +']', // 0.2.30 заголовок (СЛОВО)
        body:     localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang2word_'+ randomId) +' ['+ Math.random() +']',
		autoclose: true,
		timeout: (localStorage.ls_NotificationVisible*1000), // close notification in ** sec // learnicusNotificationTimeout // функція вимикання по таймауту. вже в налаштуваннях!
        onclick: function () {
            console.log('learnicusNotificationTest');
        }
    };
	// $.notification(options)
    var learnicusNotification = $.notification(options);
});

// learnicusNotification();
// showNotification(); 
// ###### NOTIFICATION END ##########


function learnicusRandom(){
	// RANDOM START
	// использование Math.round() даст неравномерное распределение!
	var randomIdMax = localStorage.ls_current_maxId;                            // v3
	var randomId = Math.floor(Math.random() * randomIdMax);
	localStorage.ls_current_randomId = randomId;                                // v3
	console.log('RANDOM = '+ localStorage.ls_current_randomId);
	console.log('RANDOM : '+ localStorage.ls_current_WatchWordCounter +'|'+ localStorage.ls_SoundLang1 +'-'+ localStorage.ls_SoundLang2 +'|rnd='+ localStorage.ls_current_randomId +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1word_'+ randomId) +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang1trans_'+ randomId) +'|'+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle+'_lang2word_'+ randomId) +''); //0.2.31
	// RANDOM END
};
function learnicusNotification (){
	var options = {
        tag: 'notificationReplaceId',
        iconUrl: chrome.extension.getURL('icons/icon32.png'),
        title:    localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang1word_'+ randomId) +' ['+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang1trans_'+ randomId) +']', // 0.2.30 заголовок (СЛОВО)
        body:     localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang2word_'+ randomId) +' ['+ Math.random() +']',
		autoclose: true,
		timeout: (localStorage.ls_NotificationVisible*1000), // close notification in ** sec // learnicusNotificationTimeout // функція вимикання по таймауту. вже в налаштуваннях!
        onclick: function () {
            console.log('learnicusNotificationTest');
        }
    };
	$.notification(options)
    // var learnicusNotification = $.notification(options);
};

function learnicusNotificationRun(){
	setTimeout (function (){
		console.log('RANDOM = '+ localStorage.ls_current_randomId +'-----------------------------');
		// learnicusRandom();
		// learnicusNotification();
	}, localStorage.ls_frequency*1000); // learnicusFrequency
};



// ########## NOTIFICATION - OLD - START ##########
/*
//var notification = window.webkitNotifications.createNotification(           // 2013 року 
  var notification = webkitNotifications.createNotification(                  // 2017 року // https://coderwall.com/p/iibijq/chrome-notification
    // порада робити ТАК: http://stackoverflow.com/questions/13209799/icon-not-showing-up-in-chrome-extension-desktop-notification
    chrome.extension.getURL('icons/icon32.png'),   // картинка;
    localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang1word_'+ randomId) +' ['+ localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang1trans_'+ randomId) +']', // 0.2.30 заголовок (СЛОВО)
    localStorage.getItem('ls_'+localStorage.ls_current_dictTitle +'_lang2word_'+ randomId) +' '                                                                                                 // 0.2.30 текст (ПЕРЕКЛАД)
  );
// ########## NOTIFICATION ##########
  notification.show();
*/
// ########## NOTIFICATION - OLD - END ##########

var learnicusWatchWordCounter = localStorage.ls_current_WatchWordCounter;     // присвоїли змінній значення з ЛС
learnicusWatchWordCounter = learnicusWatchWordCounter++;                      // 0.2.31
localStorage.ls_current_WatchWordCounter = learnicusWatchWordCounter += 1;    // 0.2.31 кількість переглянутих слів (нове значення).



function showNotificationRun (){
  // Test for notification support.
  if (window.webkitNotifications){
    // While activated, show notifications at the display frequency.
    if (JSON.parse(localStorage.isActivated)) { showNotification(); }
    var interval = 0; // The display interval, in minutes.
    setInterval(function() {
      interval++;
      if (localStorage.length == 0){
      console.log('---------- АВТОМАТИЧНИЙ РЕСТАРТ ----------');
      // КОСТИЛЬ-2: коли ЛС порожній з якоїсь причини, робимо рестарт!
      document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/learnicusRun.js') +'" async type="text/javascript" ></scr'+'ipt>');
      // КОСТИЛЬ-2: ЕНД
      } else if ( 
        // УВАГА: тут видаватиме помилку тільки якщо порожній ЛС
        JSON.parse(localStorage.isActivated) && localStorage.ls_frequency <= interval
      ) {
        showNotification();
        interval = 0;
      }
    }, 1000); // 1min = 60000, 1sec = 1000
  };
};

function preloadLocalStorageSetting () {
  // Conditionally initialize the options.
  if (!localStorage.learnicusInitialized) { // ЯКЩО ЛС порожній, то записуємо його наступними значеннями:
    localStorage.learnicusInitialized           = true;
    localStorage.isActivated                    = true;     // The display activation. // галочка "дозволити показ" 
    localStorage.learnicusSoundActivated1       = false;    //  галочка "дозволити озучку" оригінал -- ще не прописана в коді
    localStorage.learnicusSoundActivated2       = false;    //  галочка "дозволити озучку" переклад -- ще не прописана в коді
	//localStorage.learnicusDictionaryID        = 'https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodHp2aVEzWV81VnQyRGpnTkN0WDhQUFE/od7/public/basic?alt=json-in-script&callback=learnicusJsonEvents';
	//localStorage.learnicusDictionaryID        = 'https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodDZEYllPdHIzd3plV3JtTUkzYWMyMkE/od5/public/values?alt=json-in-script&callback=learnicusJsonEvents';
	//localStorage.learnicusDictionaryID        = 'https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/values?alt=json-in-script&callback=learnicusJsonEvents';
	localStorage.learnicusSound1                = 'en';     // чи озвучувати оригінал
	localStorage.learnicusSound2                = 'uk';     // чи озвучувати переклад
    localStorage.ls_frequency                   = 30;       // The display frequency, in sec (за вмовчанням =60)
    localStorage.ls_NotificationVisible         = 5;        // Час затримки показу нотіфікейшена (за вмовчанням =10000)
    localStorage.ls_current_WatchWordCounter    = '0';      // кількість переглянутих слів
    console.log('озвучувати оригінал як '+ localStorage.learnicusSound1);
    console.log('озвучувати переклад як '+ localStorage.learnicusSound2);

    console.log('Стартую ВПЕРШЕ! Кількість переглянутих слів = '+ localStorage.ls_current_WatchWordCounter);
  } else {
  console.log('Кількість переглянутих слів = '+ localStorage.ls_current_WatchWordCounter);
  };
};

function showNotificationPreload () {
  // КОСТИЛЬ-1: щоб не вибивало при першому старті, поки не закешує ВЕСЬ словник
  var intervalForRun = setInterval(function() {
      if (localStorage.length <= 20) {              // якщо в ЛС менше наж стільки значень, то чекаємо
      console.log('ЗАВАНТАЖУЮ СЛОВНИК!   Зачекайте!');
      } else {
      console.log('СЛОВНИК Є!:           Кількість слів у поточному словнику ='+ localStorage.ls_current_maxId +', елементів в LS ВСЬОГО='+ localStorage.length);
      console.log('СТАРТУЮ ПОКАЗ!        ');
      console.log('----------------------');
      showNotificationRun (); // ЗАПУСКАЄМО функцію ПОКАЗУ СЛІВ!
      clearInterval(intervalForRun);
      };
  }, 5000);
  // КОСТИЛЬ-1: ЕНД
};



preloadLocalStorageSetting ();
showNotificationPreload ();
learnicusNotificationRun ();
