// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Grays out or [whatever the opposite of graying out is called] the option
  field.
*/

//document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/jquery.min.js') +'" async type="text/javascript" alt="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></scr'+'ipt>'); // в цьому файлі поки що не юзається jQuery
//document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/learnicusGoogleAnalytics.js') +'" async type="text/javascript" ></scr'+'ipt>');




function learnicusOptionsCheck1 (c1g, c1oo, c1on, c1oa, c1ln, c1la) {
  // для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
  function ghost(isDeactivated)  {
    window[c1oo].style.color                                 = isDeactivated ? 'graytext' : 'black';   // The label color. Назви коьорів для "засіреня"
    window[c1oo].learnicusFrequency.disabled                 = isDeactivated;                          // The control manipulability.
    window[c1oo].learnicusNotificationVisible.disabled       = isDeactivated;                          // The control manipulability. //v0.2.6
    window[c1oo].learnicusDictionaryOptions.disabled         = isDeactivated;
    window[c1oo].learnicusDictionaryID.disabled              = isDeactivated;
  };

  window.addEventListener('load', function() {                                       // Initialize the option controls.
    window[c1oo][c1oa].checked    = JSON.parse(localStorage.getItem(c1la)); // The display activation.
    window[c1oo][c1on].valu       = localStorage.getItem(c1ln);             // The display frequency, in minutes.
    if (!window[c1oo][c1oa].checked) { ghost(true); }                                     // Set the display activation and frequency.   // активація відображення і показу
    window[c1oo][c1oa].onchange   = function() {
      localStorage.setItem(c1la, window[c1oo][c1oa].checked);
      ghost(!window[c1oo][c1oa].checked);
    };
   window[c1oo][c1on].onchange    = function() {
      localStorage.setItem(c1ln, window[c1oo][c1on].value);                      
    };
  });
};

learnicusOptionsCheck1 ('ghost','options','learnicusFrequency',           'isActivated',  'ls_frequency',           'isActivated');
learnicusOptionsCheck1 ('ghost','options','learnicusNotificationVisible', 'isActivated',  'ls_NotificationVisible', 'isActivated');
learnicusOptionsCheck1 ('ghost','options','learnicusDictionaryID',        'isActivated',  'ls_DictionaryID',        'isActivated');


function learnicusOptionsCheck2 (c2g, c2oo, c2on, c2ln, c2la, c2a, c2d ){
  function gSound1(c2d) {
    window[c2oo].style.color      = c2d ? 'graytext' : 'black';            // The label color. Назви коьорів для "засіреня"
    window[c2oo][c2on].disabled   = c2d;                                   // The control manipulability.
    //document.getElementsByName('learnicusSoundOptions1')[c2on].disabled     = c2d;
  };
  window.addEventListener('load', function() {                                                                          // Initialize the option controls.
    window[c2oo][c2a].checked     = JSON.parse(localStorage.getItem(c2la));  // The display activation.
    window[c2oo][c2on].value      = localStorage.getItem(c2ln);                       // The display Sound1 value.
    if (!window[c2oo][c2a].checked) { gSound1(true); }                                    // Set the display Sound1 value.   // активація відображення і показу
    window[c2oo][c2a].onchange    = function() {
      localStorage.setItem(c2la, window[c2oo][c2a].checked);
      gSound1(!window[c2oo][c2a].checked);
    };
    window[c2oo][c2on].onchange   = function() {
      localStorage.setItem(c2ln, window[c2oo][c2on].value);
    };
  });
                    /*
                    var options = c2oo;
                    function gSound1(c2d) {
                      learnicusSoundOptions1.style.color        = c2d ? 'graytext' : 'black';            // The label color. Назви коьорів для "засіреня"
                      learnicusSoundOptions1[c2on].disabled     = c2d;                                   // The control manipulability.
                      //document.getElementsByName('learnicusSoundOptions1')[c2on].disabled     = c2d;
                    };
                    window.addEventListener('load', function() {                                                                          // Initialize the option controls.
                      learnicusSoundOptions1[c2a].checked       = JSON.parse(localStorage.getItem(c2la));  // The display activation.
                      learnicusSoundOptions1[c2on].value        = localStorage.ls_SoundLang1;                       // The display Sound1 value.
                      if (!learnicusSoundOptions1[c2a].checked) { gSound1(true); }                                    // Set the display Sound1 value.   // активація відображення і показу
                      learnicusSoundOptions1[c2a].onchange      = function() {
                        localStorage.learnicusSoundActivated1   = learnicusSoundOptions1[c2a].checked;
                        localStorage.setItem(c2la, learnicusSoundOptions1[c2a].checked);
                        gSound1(!learnicusSoundOptions1[c2a].checked);
                      };
                      learnicusSoundOptions1[c2on].onchange     = function() {
                        localStorage.ls_SoundLang1              = learnicusSoundOptions1[c2on].value;
                      };
                    });
                    */
};
learnicusOptionsCheck2 ('gSound1','learnicusSoundOptions1','learnicusSound1','ls_SoundLang1','learnicusSoundActivated1','learnicusSoundActivated1','learnicusSoundDeactivated1');
//learnicusOptionsCheck2 ('gSound2','learnicusSoundOptions2','ls_SoundLang2','learnicusSound2','learnicusSoundActivated2','learnicusSoundDeactivated2');




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