// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Grays out or [whatever the opposite of graying out is called] the option
  field.
*/


//УВАГА! ВСЕ ПРОСТО! function learnicusOptionsCheck1 з приведеними параметрами, використовується для пакетної обробки "learnicusOptionsCheck1", що йдуть через 20 рядків нижче! 
function learnicusOptionsCheck1 (c101, c102, c103, c104, c105, c106){
  // для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
  function ghost(isDeactivated) {
    window[c102].style.color                                 = isDeactivated ? 'graytext' : 'black';   // The label color. Назви коьорів для "засіреня"
    window[c102].learnicusFrequency.disabled                 = isDeactivated;                          // The control manipulability.
    window[c102].learnicusNotificationVisible.disabled       = isDeactivated;                          // The control manipulability. //v0.2.6
    window[c102].learnicusDictionaryOptions.disabled         = isDeactivated;
    window[c102].learnicusDictionaryID.disabled              = isDeactivated;
  };

  window.addEventListener('load', function() {                               // Initialize the option controls.
    window[c102][c104].checked     = JSON.parse(localStorage.getItem(c106)); // The display activation.
    window[c102][c103].value       = localStorage.getItem(c105);             // The display frequency, in minutes.
    if (!window[c102][c104].checked){ghost(true);}                           // Set the display activation and frequency.   // активація відображення і показу
    window[c102][c104].onchange    = function() {
      localStorage.setItem(c106, window[c102][c104].checked);
      ghost(!window[c102][c104].checked);
    };
   window[c102][c103].onchange    = function() {
      localStorage.setItem(c105, window[c102][c103].value);
    };
  });
};

// визначення параметрів (c101,    c102,    c103,                           c104,         c105,                   c106)
learnicusOptionsCheck1   ('ghost','options','learnicusFrequency',          'isActivated','ls_frequency',          'isActivated');
learnicusOptionsCheck1   ('ghost','options','learnicusNotificationVisible','isActivated','ls_NotificationVisible','isActivated');
learnicusOptionsCheck1   ('ghost','options','learnicusDictionaryID',       'isActivated','ls_DictionaryID',       'isActivated');




function learnicusOptionsCheck2 (c201, c202, c203, c204, c205, c206, c207 ){
  function gSound1(c207) {
    window[c202].style.color       = c207 ? 'graytext' : 'black';             // The label color. Назви коьорів для "засіреня"
    window[c202][c203].disabled    = c207;                                    // The control manipulability.
    //document.getElementsByName('learnicusSoundOptions1')[c203].disabled     // = c207;
  };
  window.addEventListener('load',    function() {                             // Initialize the option controls.
    window[c202][c206].checked     = JSON.parse(localStorage.getItem(c205));  // The display activation.
    window[c202][c203].value       = localStorage.getItem(c204);              // The display Sound1 value.
    if (!window[c202][c206].checked) {gSound1(true);}                         // Set the display Sound1 value.   // активація відображення і показу
    window[c202][c206].onchange    = function() {
      localStorage.setItem(c205, window[c202][c206].checked);
      gSound1(!window[c202][c206].checked);
    };
    window[c202][c203].onchange    = function() {
      localStorage.setItem(c204, window[c202][c203].value);
    };
  });
                    /*
                    var options = c202;
                    function gSound1(c207) {
                      [c202].style.color        = c207 ? 'graytext' : 'black';            // The label color. Назви коьорів для "засіреня"
                      [c202][c203].disabled     = c207;                                   // The control manipulability.
                      //document.getElementsByName('learnicusSoundOptions1')[c203].disabled     = c207;
                    };
                    window.addEventListener('load', function() {                                                                          // Initialize the option controls.
                      learnicusSoundOptions1[c206].checked       = JSON.parse(localStorage.getItem(c205));  // The display activation.
                      learnicusSoundOptions1[c203].value        = localStorage.[c204];                       // The display Sound1 value.
                      if (!learnicusSoundOptions1[c206].checked) { gSound1(true); }                                    // Set the display Sound1 value.   // активація відображення і показу
                      learnicusSoundOptions1[c206].onchange      = function() {
                        localStorage.learnicusSoundActivated1   = learnicusSoundOptions1[c206].checked;
                        localStorage.setItem(c205, learnicusSoundOptions1[c206].checked);
                        gSound1(!learnicusSoundOptions1[c206].checked);
                      };
                      learnicusSoundOptions1[c203].onchange     = function() {
                        localStorage.[c204]              = learnicusSoundOptions1[c203].value;
                      };
                    });
                    */
};

// learnicusOptionsCheck2 (c201,      c202,                    c203,             c204,             c205,                     c206,                         c207 )
learnicusOptionsCheck2    ('gSound1','learnicusSoundOptions1','learnicusSound1','ls_SoundLang1', 'learnicusSoundActivated1','learnicusSoundActivated1',  'learnicusSoundDeactivated1');
learnicusOptionsCheck2    ('gSound2','learnicusSoundOptions2','learnicusSound2','ls_SoundLang2', 'learnicusSoundActivated2','learnicusSoundActivated2',  'learnicusSoundDeactivated2');





// для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
function gSound1(learnicusSoundDeactivated1) {
  learnicusSoundOptions1.style.color                            = learnicusSoundDeactivated1 ? 'graytext' : 'black'; // The label color. Назви коьорів для "засіреня"
  learnicusSoundOptions1.learnicusSound1.disabled               = learnicusSoundDeactivated1;                        // The control manipulability.
};
window.addEventListener('load', function() {                                                                          // Initialize the option controls.
  learnicusSoundOptions1.learnicusSoundActivated1.checked       = JSON.parse(localStorage.learnicusSoundActivated1);  // The display activation.
  learnicusSoundOptions1.learnicusSound1.value                  = localStorage.ls_SoundLang1;                         // The display Sound1 value.
  if (!learnicusSoundOptions1.learnicusSoundActivated1.checked) { gSound1(true); }                                    // Set the display Sound1 value.   // активація відображення і показу
  learnicusSoundOptions1.learnicusSoundActivated1.onchange      = function() {
    localStorage.learnicusSoundActivated1                       = learnicusSoundOptions1.learnicusSoundActivated1.checked;
    gSound1(!learnicusSoundOptions1.learnicusSoundActivated1.checked);
  };
  learnicusSoundOptions1.learnicusSound1.onchange               = function() {
    localStorage.ls_SoundLang1                                  = learnicusSoundOptions1.learnicusSound1.value;
  };
});




// для деактивації (засірення і блокування контенту/параметрів при ненатиснутому чекбоксі)
function gSound2(learnicusSoundDeactivated2) {
  learnicusSoundOptions2.style.color                            = learnicusSoundDeactivated2 ? 'graytext' : 'black';  // The label color. Назви коьорів для "засіреня"
  learnicusSoundOptions2.learnicusSound2.disabled               = learnicusSoundDeactivated2;                         // The control manipulability.
};
window.addEventListener('load', function() {                                                                          // Initialize the option controls.
  learnicusSoundOptions2.learnicusSoundActivated2.checked       = JSON.parse(localStorage.learnicusSoundActivated2);  // The display activation.
  learnicusSoundOptions2.learnicusSound2.value                  = localStorage.ls_SoundLang2;                         // The display frequency, in minutes.
  if (!learnicusSoundOptions2.learnicusSoundActivated2.checked) { gSound2(true); }                                    // Set the display activation and frequency.   // активація відображення і показу
  learnicusSoundOptions2.learnicusSoundActivated2.onchange      = function() {
    localStorage.learnicusSoundActivated2                       = learnicusSoundOptions2.learnicusSoundActivated2.checked;
    gSound2(!learnicusSoundOptions2.learnicusSoundActivated2.checked);
  };
  learnicusSoundOptions2.learnicusSound2.onchange               = function() {
    localStorage.ls_SoundLang2                                  = learnicusSoundOptions2.learnicusSound2.value;
  };
});



// рахує кількість переглянутих слів
learnicusWatchWordCounter = function learnicusWatchWordCounter() {
        document.getElementById('learnicusWatchWordCounter').textContent = localStorage.ls_current_WatchWordCounter;
    setInterval(function() {
        document.getElementById('learnicusWatchWordCounter').textContent = localStorage.ls_current_WatchWordCounter;
    }, localStorage.ls_frequency * 1000);
};


// Чистимо ЛС "в нуль"
learnicusClearLS = function learnicusClearLS(){
  document.getElementById('learnicusClearLS').addEventListener('click', function (){
    localStorage.clear();
    console.log('Запустили learnicusClearLS  =  OK!');
    console.log('Зараз елементів в ЛС        =  '+ localStorage.length);
    setTimeout(window.close(), 5000); // закрити вікно.
  });
};

learnicusRestart = function learnicusRestart(){
    document.getElementById('learnicusRestart').addEventListener('click', function (){
    console.log('Запустили learnicusRestart()    =  OK!');
    window.location.reload();
    console.log('window.location.reload();       =  OK!');
    document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/learnicusRun.js') +'" async type="text/javascript" ></scr'+'ipt>');
    setTimeout(window.close(), 5000); // закрити вікно.
  });
};

learnicusClearRestart = function learnicusClearRestart(){
   document.getElementById('learnicusClearRestart').addEventListener('click', function (){
    console.log('Запустили localStorage.clear();  =  OK!');
    localStorage.clear();
    console.log('Зараз елементів в ЛС             =  '+ localStorage.length);
    console.log('РЕСТАРТ відбудеться автоматично через 1 сек  =  OK!');
    document.write('<scr'+'ipt src="'+ chrome.extension.getURL('js/learnicusRun.js') +'" async type="text/javascript" ></scr'+'ipt>');
    setTimeout(window.close(), 1000); // закрити вікно.
  });
};



// ##### ЗАВАНТАЖУВАЧ ФУНКЦІЙ ЯКІ БЛОКУЮТЬСЯ БЕЗПЕКОЮ БРАУЗЕРА #####
// http://developer.chrome.com/extensions/contentSecurityPolicy.html
document.addEventListener('DOMContentLoaded', function () {
  learnicusWatchWordCounter();
  //learnicusClearLS();
  //learnicusClearRestart();
  //learnicusRestart();
});




// ##### ЗАВАНТАЖУВАЧ ФУНКЦІЙ ЯКІ БЛОКУЮТЬСЯ БЕЗПЕКОЮ БРАУЗЕРА - END #####

// ПЕРЕВІРИТИ ТЕ ЩО НИЖЧЕ - ЧОМУ НЕ ПРАЦЮЄ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log('FULL LOAD|js/learnicusOptions.js          |=OK!');