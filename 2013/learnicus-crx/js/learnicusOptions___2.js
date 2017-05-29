// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Grays out or [whatever the opposite of graying out is called] the option
  field.
*/

//document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/jquery.min.js') +'" async type="text/javascript" alt="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></scr'+'ipt>'); // в цьому файлі поки що не юзається jQuery
//document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/learnicusGoogleAnalytics.js') +'" async type="text/javascript" ></scr'+'ipt>');


// для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
function ghost(isDeactivated) {
  options.style.color                                 = isDeactivated ? 'graytext' : 'black';   // The label color. Назви коьорів для "засіреня"
  options.learnicusFrequency.disabled                 = isDeactivated;                          // The control manipulability.
  options.learnicusNotificationVisible.disabled       = isDeactivated;                          // The control manipulability. //v0.2.6
  options.learnicusDictionaryOptions.disabled         = isDeactivated;
  options.learnicusDictionaryID.disabled              = isDeactivated;

};

function learnicusOptionsCheck1 (c1g, c1oo, c1on, c1oa, c1ln, c1la) {
  window.addEventListener('load', function() {                                       // Initialize the option controls.
    c1oo[c1oa].checked                  = JSON.parse(localStorage.getItem(c1la)); // The display activation.
    c1oo[c1on].value                    = localStorage.getItem(c1ln);             // The display frequency, in minutes.
    if (!c1oo[c1oa].checked) { c1g(true); }                                     // Set the display activation and frequency.   // активація відображення і показу
    c1oo[c1oa].onchange                 = function() {
      localStorage.setItem(c1la, c1oo[c1oa].checked);
      c1g(!c1oo[c1oa].checked);
    };
    c1oo[c1on].onchange                 = function() {
      localStorage.setItem(c1ln, c1oo[c1on].value);                      
    };
  });                            
};


/*
window.addEventListener('load', function() {                                                    // Initialize the option controls.
  options.isActivated.checked                         = JSON.parse(localStorage.isActivated);   // The display activation.
  options.learnicusFrequency.value                    = localStorage.ls_frequency;              // The display frequency, in minutes.
  if (!options.isActivated.checked) { ghost(true); }                                            // Set the display activation and frequency.   // активація відображення і показу
  options.isActivated.onchange                        = function() {
    localStorage.isActivated                          = options.isActivated.checked;
    ghost(!options.isActivated.checked);
  };
  options.learnicusFrequency.onchange                 = function() {
    localStorage.ls_frequency                         = options.learnicusFrequency.value;
  };
});


// learnicusNotificationVisible - START
window.addEventListener('load', function() {                                                    // Initialize the option controls.
  options.isActivated.checked                         = JSON.parse(localStorage.isActivated);   // The display activation.
  options.learnicusNotificationVisible.value          = localStorage.ls_NotificationVisible;    // The display frequency, in minutes.
  if (!options.isActivated.checked) { ghost(true); }                                            // Set the display activation and frequency.   // активація відображення і показу
  options.isActivated.onchange                        = function() {
    localStorage.isActivated                          = options.isActivated.checked;
    ghost(!options.isActivated.checked);
  };
  options.learnicusNotificationVisible.onchange       = function() {
    localStorage.ls_NotificationVisible               = options.learnicusNotificationVisible.value;
  };
});
// learnicusNotificationVisible - END


// learnicusDictionaryID - START
window.addEventListener('load', function() {                                                    // Initialize the option controls.
  options.isActivated.checked                         = JSON.parse(localStorage.isActivated);   // The display activation.
  options.learnicusDictionaryID.value                 = localStorage.ls_DictionaryID;     // The display frequency, in minutes.
  if (!options.isActivated.checked) { ghost(true); }                                            // Set the display activation and frequency.   // активація відображення і показу
  options.isActivated.onchange                        = function() {
    localStorage.isActivated                          = options.isActivated.checked;
    ghost(!options.isActivated.checked);
  };
  options.learnicusDictionaryID.onchange              = function() {
    localStorage.ls_DictionaryID                = options.learnicusDictionaryID.value;
  };
});
// learnicusDictionaryID - END
*/


learnicusOptionsCheck1 ('ghost', 'options', 'learnicusFrequency',           'isActivated',  'ls_frequency',           'isActivated');
learnicusOptionsCheck1 ('ghost', 'options', 'learnicusNotificationVisible', 'isActivated',  'ls_NotificationVisible', 'isActivated');
learnicusOptionsCheck1 ('ghost', 'options', 'learnicusDictionaryID',        'isActivated',  'ls_DictionaryID',        'isActivated');


//function learnicusOptionsCheck2 (cn,ci,cl,cp,ca,cd){
function learnicusOptionsCheck2 (c2g, c2on, c2on, c2ln, c2oa, c2od) {
// для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
function c2g(c2od) {
  learnicusSoundOptions1.style.color                  = c2od ? 'graytext' : 'black';            // The label color. Назви коьорів для "засіреня"
  learnicusSoundOptions1.learnicusSound1.disabled     = c2od;                                   // The control manipulability.
};
window.addEventListener('load', function() {                                                                          // Initialize the option controls.
  learnicusSoundOptions1.learnicusSoundActivated1.checked       = JSON.parse(localStorage.learnicusSoundActivated1);  // The display activation.
  learnicusSoundOptions1.learnicusSound1.value                  = localStorage.ls_SoundLang1;                       // The display Sound1 value.
  if (!learnicusSoundOptions1.learnicusSoundActivated1.checked) { c2g(true); }                                    // Set the display Sound1 value.   // активація відображення і показу
  learnicusSoundOptions1.learnicusSoundActivated1.onchange      = function() {
    localStorage.learnicusSoundActivated1                       = learnicusSoundOptions1.learnicusSoundActivated1.checked;
    c2g(!learnicusSoundOptions1.learnicusSoundActivated1.checked);
  };
    c2oo[c2on].onchange                 = function() {
      localStorage.setItem(c2ln,c2oo[c2on].value);                      
    };
});
  
};
learnicusOptionsCheck2    ('gSound1','learnicusSoundOptions1','learnicusSound1','ls_SoundLang1','learnicusSoundActivated1','learnicusSoundDeactivated1');
//learnicusOptionsCheck2  ('gSound2','learnicusSoundOptions2','learnicusSound2','ls_SoundLang2','learnicusSoundActivated2','learnicusSoundDeactivated2');




/*
// для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
function gSound1(learnicusSoundDeactivated1) {
  learnicusSoundOptions1.style.color                  = learnicusSoundDeactivated1 ? 'graytext' : 'black';            // The label color. Назви коьорів для "засіреня"
  learnicusSoundOptions1.learnicusSound1.disabled     = learnicusSoundDeactivated1;                                   // The control manipulability.
};
window.addEventListener('load', function() {                                                                          // Initialize the option controls.
  learnicusSoundOptions1.learnicusSoundActivated1.checked       = JSON.parse(localStorage.learnicusSoundActivated1);  // The display activation.
  learnicusSoundOptions1.learnicusSound1.value                  = localStorage.ls_SoundLang1;                       // The display Sound1 value.
  if (!learnicusSoundOptions1.learnicusSoundActivated1.checked) { gSound1(true); }                                    // Set the display Sound1 value.   // активація відображення і показу
  learnicusSoundOptions1.learnicusSoundActivated1.onchange      = function() {
    localStorage.learnicusSoundActivated1                       = learnicusSoundOptions1.learnicusSoundActivated1.checked;
    gSound1(!learnicusSoundOptions1.learnicusSoundActivated1.checked);
  };
  learnicusSoundOptions1.learnicusSound1.onchange               = function() {
    localStorage.ls_SoundLang1                                = learnicusSoundOptions1.learnicusSound1.value;
  };
});
*/
// для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
function gSound2(learnicusSoundDeactivated2) {
  learnicusSoundOptions2.style.color                            = learnicusSoundDeactivated2 ? 'graytext' : 'black';  // The label color. Назви коьорів для "засіреня"
  learnicusSoundOptions2.learnicusSound2.disabled               = learnicusSoundDeactivated2;                         // The control manipulability.
};
window.addEventListener('load', function() {                                                                          // Initialize the option controls.
  learnicusSoundOptions2.learnicusSoundActivated2.checked       = JSON.parse(localStorage.learnicusSoundActivated2);  // The display activation.
  learnicusSoundOptions2.learnicusSound2.value                  = localStorage.ls_SoundLang2;                       // The display frequency, in minutes.
  if (!learnicusSoundOptions2.learnicusSoundActivated2.checked) { gSound2(true); }                                    // Set the display activation and frequency.   // активація відображення і показу
  learnicusSoundOptions2.learnicusSoundActivated2.onchange      = function() {
    localStorage.learnicusSoundActivated2                       = learnicusSoundOptions2.learnicusSoundActivated2.checked;
    gSound2(!learnicusSoundOptions2.learnicusSoundActivated2.checked);
  };
  learnicusSoundOptions2.learnicusSound2.onchange               = function() {
    localStorage.ls_SoundLang2                                = learnicusSoundOptions2.learnicusSound2.value;
  };
});




learnicusWatchWordCounter = function learnicusWatchWordCounter() {
        document.getElementById('learnicusWatchWordCounter').textContent = localStorage.ls_current_WatchWordCounter;
    setInterval(function() {
        document.getElementById('learnicusWatchWordCounter').textContent = localStorage.ls_current_WatchWordCounter;
    }, localStorage.ls_frequency * 1000);
};

learnicusClearLS = function learnicusClearLS(){
   document.getElementById('learnicusClearLS').addEventListener('click', function (){
    localStorage.clear();
    console.log('Запустили learnicusClearLS  =  OK!');
    console.log('Зараз елементів в ЛС        =  '+ localStorage.length);
    setTimeout(window.close(), 5000); // закрити вікно.
  });
};

learnicusClearRestart = function learnicusClearRestart(){
   document.getElementById('learnicusClearRestart').addEventListener('click', function (){
    console.log('Запустили localStorage.clear();  =  OK!');
    localStorage.clear();
    console.log('Зараз елементів в ЛС             =  '+ localStorage.length);
    console.log('РЕСТАРТ відбудеться автоматично через 1 сек  =  OK!');
    //document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/learnicusRun.js') +'" async type="text/javascript" ></scr'+'ipt>');
    setTimeout(window.close(), 1000); // закрити вікно.
  });
};

learnicusRestart = function learnicusRestart(){
    document.getElementById('learnicusRestart').addEventListener('click', function (){
    console.log('Запустили learnicusRestart()    =  OK!');
    window.location.reload();
    console.log('window.location.reload();       =  OK!');
    //document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/learnicusRun.js') +'" async type="text/javascript" ></scr'+'ipt>');
    //setTimeout(window.close(), 5000); // закрити вікно.
  });
};




// ##### ЗАВАНТАЖУВАЧ ФУНКЦІЙ ЯКІ БЛОКУЮТЬСЯ БЕЗПЕКОЮ БРАУЗЕРА #####
// http://developer.chrome.com/extensions/contentSecurityPolicy.html
document.addEventListener('DOMContentLoaded', function () {
  learnicusWatchWordCounter();
  //learnicusClearLS();
  learnicusClearRestart();
  //learnicusRestart();
});
// ##### ЗАВАНТАЖУВАЧ ФУНКЦІЙ ЯКІ БЛОКУЮТЬСЯ БЕЗПЕКОЮ БРАУЗЕРА - END #####

// ПЕРЕВІРИТИ ТЕ ЩО НИЖЧЕ - ЧОМУ НЕ ПРАЦЮЄ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log('FULL LOAD|js/learnicusOptions.js          |=OK!');