
// localStorage.setItem('lsEn_id0', 'Завантажую базу');
// localStorage.setItem('lsTr_id0', 'зачекайте');
// localStorage.setItem('lsUk_id0', 'Час завантаження заледить від швидкості вашого інтернета, та розміру бази');

  localStorage.setItem('lsTitleId_0',   'Завантажую базу слів, зачекайте!');
  console.log('Записав в ЛС нульовий lsTitleId_0   = '+ localStorage.getItem('lsTitleId_0'));
  localStorage.setItem('lsContentId_0', 'Час завантаження залежить від швидкості з`єднання, та розміру бази');
  console.log('Записав в ЛС нульовий lsContentId_0 = '+ localStorage.getItem('lsContentId_0'));

console.log('Щоб побачити скільки у нас є елементів пишемо: localStorage.length; а їх у нас зараз = '+localStorage.length);
console.log('Щоб ВСЕ вичистити в localStorage - пишемо в консолі: localStorage.clear();');


function learnicusJsonEvents(json) {

var dictTitle                                         = json.feed.title.$t;     // WORK-v0.2.30!!
var dictUrl                                           = json.feed.id.$t;        // WORK-v0.2.30!!
var dictUpdated                                       = json.feed.updated.$t;   // WORK-v0.2.30!!
var dictEntries                                       = json.feed.entry.length; // WORK-v0.2.30!!
localStorage.ls_current_dictTitle                     = dictTitle;              // WORK-v0.2.30!!
localStorage.ls_current_maxId                         = dictEntries;            // WORK-v0.2.30!!
localStorage.setItem('ls_'+ dictTitle +'_dictTitle',    dictTitle);             // WORK-v0.2.30!!
localStorage.setItem('ls_'+ dictTitle +'_dictUrl',      dictUrl);               // WORK-v0.2.30!!
localStorage.setItem('ls_'+ dictTitle +'_dictUpdated',  dictUpdated);           // WORK-v0.2.30!!
localStorage.setItem('ls_'+ dictTitle +'_maxId',        dictEntries);           // WORK-v0.2.30!!

  for (var i=0; i<dictEntries; i++) {
    var dictId      = json.feed.entry[i].gsx$dictid.$t;                         // WORK-v0.2.30!! (необовЯзковий параметр)
    var lang1word   = json.feed.entry[i].gsx$lang1word.$t;
    var lang2word   = json.feed.entry[i].gsx$lang2word.$t;
    var lang1trans  = json.feed.entry[i].gsx$lang1trans.$t;
    var lang2trans  = json.feed.entry[i].gsx$lang2trans.$t;
    var lang1mp3    = json.feed.entry[i].gsx$lang1mp3.$t;
    var lang2mp3    = json.feed.entry[i].gsx$lang2mp3.$t;

    console.log('dictTitle = '+ dictTitle +'; dictId = '+ dictId +'; lang1word = '+ lang1word +'; lang2word = '+ lang2word);
   
    //localStorage.setItem('ls_'+ dictTitle +'_dictId_'    +[i], dictId);         // WORK-v0.2.30!! (необовЯзковий параметр)
    localStorage.setItem('ls_'+   dictTitle +'_lang1word_' +[i], lang1word);      // WORK-v0.2.30!!
    localStorage.setItem('ls_'+   dictTitle +'_lang2word_' +[i], lang2word);      // WORK-v0.2.30!!
    localStorage.setItem('ls_'+   dictTitle +'_lang1trans_'+[i], lang1trans);     // WORK-v0.2.30!!
    localStorage.setItem('ls_'+   dictTitle +'_lang2trans_'+[i], lang2trans);     // WORK-v0.2.30!!
    localStorage.setItem('ls_'+   dictTitle +'_lang1mp3_'  +[i], lang1mp3);       // WORK-v0.2.30!!
    localStorage.setItem('ls_'+   dictTitle +'_lang2mp3_'  +[i], lang2mp3);       // WORK-v0.2.30!!

    //var title     = lang1word +' ['+ lang1trans +'] ';                          // WORK!!! 0.2.23
    //var content   = lang2word;                                                  // WORK!!! 0.2.23
    //var fileName  = lang1mp3;                                                   // WORK!!! 0.2.23
    //localStorage.setItem('lsFileNameId_'+[i],   fileName);                      // WORK-v0.2.23!!
    //localStorage.setItem('lsTitleId_'+[i],      title);                         // WORK-v0.2.23!!
    //localStorage.setItem('lsContentId_'+[i],    content);                       // WORK-v0.2.23!!
    //localStorage.setItem('lsMaxId',             dictEntries);                   // WORK-v0.2.23!! (видаляти!)
    
  }
};

console.log('Завантажив і підготував до вивчення словник');
console.log('FULL LOAD|js/learnicusJSON.js             |=OK!');

// document.write('<scr'+'ipt src="'+ localStorage.getItem('lsJsonEvents') +'" type="text/javascript" ></scr'+'ipt>');  // УВАГА!!! НЕ СТАВИТИ "АСИНХРОН" !!!!!!!! бо глючить закешовування!
console.log('FULL LOAD|localStorage lsJsonEvents       |=OK!');





// ################## УСЕ ШО НИЖЧЕ - можна видаляти! ###########################


/*
  // http://spreadsheets.google.com/feeds/list/0AlO_LanGCFltdGlsa2hSNHhOdHlCYmpFeXdlY0ZNS2c/od6/public/values?alt=json-in-script&amp;callback=displayContent
  // http://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/basic?alt=json-in-script&callback=learnicusJsonEvents


//0,2,22 пишу цей повний запит у var нижче, пробую комбінації...
function getValue(entry, key) {
	//return entry["gsx$" + key]["$t"];  // оригінальна - не працює ((
	return entry["gsx$" + key]["$t"];
}


  var entries = root.feed.entry || [];
  
        //var feed = root.feed;
        //var entries = feed.entry || [];

  for (var i = 0; i < entries.length; ++i) {
    var entry = entries[i];
    //var id          = entry["gsx$id"]["$t"];
    //var id          = entry["gsx$id"];
    //var id_TEST     = (entry.gsx$id.$t);
    //console.log('id_TEST = '+ id_TEST );
    //var id          = entry["gsx$id"]["$t"];
    //var id          = entry.gsx$id.$t
    //var id          = entry["gsx$id"]["$t"];
    //var id          = json.feed.entry[i].gsx$id.$t
    
    //var lang1word   = entry["gsx$lang1word"];  // =UNDEFINED :-(
    //var lang1word   = entry.gsx$lang1word[$t]; // Uncaught ReferenceError: $t is not defined 
    //var lang1word   = entry.gsx$lang1word["$t"];  // Uncaught TypeError: Cannot read property '$t' of undefined 

    //var lang1word   = entry["gsx$lang1word"]["$t"];
    //var lang2word   = entry["gsx$lang2word"]["$t"];
    //var lang1trans  = entry["gsx$lang1trans"]["$t"];
    //var lang2trans  = entry["gsx$lang2trans"]["$t"];
    //var lang1mp3    = entry["gsx$lang1mp3"]["$t"];
    //var lang2mp3    = entry["gsx$lang2mp3"]["$t"];
              //var id          = getValue(entry, 'id');
              //var lang1word   = getValue(entry, 'lang1word');
              //var lang2word   = getValue(entry, 'lang2word');
              //var lang1trans  = getValue(entry, 'lang1trans');
              //var lang2trans  = getValue(entry, 'lang2trans');
              //var lang1mp3    = getValue(entry, 'lang1mp3');
              //var lang2mp3    = getValue(entry, 'lang2mp3');
                            //var id        = getValue(entry, 'id'),
                              //lang1word   = getValue(entry, 'lang1word'),
                              //lang2word   = getValue(entry, 'lang2word'),
                              //lang1trans  = getValue(entry, 'lang1trans'),
                              //lang2trans  = getValue(entry, 'lang2trans'),
                              //lang1mp3    = getValue(entry, 'lang1mp3'),
                              //lang2mp3    = getValue(entry, 'lang2mp3');
                            // TODO for ANT :)
    
    var title   = lang1word +' ['+ lang1trans +'] ';    // WORK!!! 0.2.22
    var content = lang2word;                            // WORK!!! 0.2.22
              //var title   = (entry.title.type   == 'text') ? entry.title.$t   : escape(entry.title.$t);    // WORK!!! 0.1.11
              //var content = (entry.content.type == 'text') ? entry.content.$t : escape(entry.content.$t);  // WORK!!! v0.0.5: юзається для вибірки мов.
                      //  var content = (entry.content.type == 'text') ? entry.content.gsx$ukr.$t : unescape(entry.content.gsx$ukr.$t);  // v0.1.7  НЕ ПРАЦЮЄ!! :(   // v0.1.7  Each column heading will be preceded by gsx$, and have a $t value, so you just need your JSONP callback function to iterate over feed.entry and parse gsx$date.$t and so on, which is pretty simple.   
                      //  var content = (entry.content.type == 'text') ? entry.gsx$ukr.$t : unescape(entry.gsx$ukr.$t);  // v0.1.7  НЕ ПРАЦЮЄ!! :(

// console.log('--------'+ entry.content.$t);
// var strTr = (entry.title.$t);  // 0,1,11 поставититытл title так (якщо глючитиме)



//var fileName = (entry.title.$t);                    // 0.2.10
var fileName = lang1mp3;                              // 0.2.22


/*
// закоментовано починаючи з 0,2,22 - у звЯзку з тим що на новій логіці ця перевірка вже непотрібна!
// ########## TITLE ##########
// console.log('JSON|ПЕРЕВІРЯЮ ДУЖКИ ТРАНСКРИПЦІЇ [ ] ');
if (fileName.match(/(?=\[)(.*)(?=\])/g)) {
    // console.log("Якщо є транскрипція - заміняю!");
    //console.log('fileName1='+ fileName +'|='+ fileName.length +'|');          // WORK-v0.1.11!!
    // var fileName  = fileName.replace(/(^|\s+)12345:(?=\s+|$)/g, '');         // WORK-v0.1.11!! // ПЕРЕЗАПИСУЄМО "12345:" порожнім "" -- Ні! Бо в title не виводиться у першому стовпчику! тому закоментовуємо!
    // var fileName  = fileName.replace(/(^|\s+)12345:(?=\s+|$)/g, '');         // WORK-v0.1.11!! // ПЕРЕЗАПИСУЄМО "12345:" порожнім "" -- Ні! Бо в title не виводиться у першому стовпчику! тому закоментовуємо!
    //console.log('fileName2='+ fileName +'|='+ fileName.length +'|');          // WORK-v0.1.11!!

    // console.log('--------1-----'+ fileName +'|');                            // WORK-v0.1.11!!
    //console.log('--------1-----'+ fileName.replace(/(?=\[)(.*$)/g, '') +'');  // WORK-v0.1.11!!
    var fileName  = fileName.replace(/(?=\[)(.*)(?=\])/g, '');                  // WORK-v0.1.11!! // ЗАЛИШАЄ: (.*) -- будь-яка кількість знаків;  (?=\[) --  значок відкриваючої квадратної дужки  "["  вона є перед транскрипцією, УВАГА її треба ЕКРАНУВАТИ ТАК: "\["  бо буде помилку кричати (Uncaught SyntaxError: Invalid regular expression: missing /);   тобто УСЕ що стоїть ПЕРЕД --- [ ---
    var fileName  = fileName.match(/(^.*)(?=\])/g);                             // WORK-v0.1.11!! // ЗАЛИШАЄ: (.*) -- будь-яка кількість знаків;  (?=\[) --  значок відкриваючої квадратної дужки  "["  вона є перед транскрипцією, УВАГА її треба ЕКРАНУВАТИ ТАК: "\["  бо буде помилку кричати (Uncaught SyntaxError: Invalid regular expression: missing /);   тобто УСЕ що стоїть ПЕРЕД --- [ ---
    //var fileName  = fileName.match(/(^.*)(?=\[)/g);                           // WORK-v0.1.11!! // ЗАЛИШАЄ: (.*) -- будь-яка кількість знаків;  (?=\[) --  значок відкриваючої квадратної дужки  "["  вона є перед транскрипцією, УВАГА її треба ЕКРАНУВАТИ ТАК: "\["  бо буде помилку кричати (Uncaught SyntaxError: Invalid regular expression: missing /);   тобто УСЕ що стоїть ПЕРЕД --- [ ---
    // console.log('--------2-----'+ fileName  +'|');                           // WORK-v0.1.11!!
    var fileName = fileName[0];                                                 // WORK-v0.1.11!! Присвоюємо масиву "fileName"="будь-яка кількість знаків" (перший набір)
    //console.log('fileName='+ fileName +'|='+ fileName.length +'|');           // WORK-v0.1.11!!
} else {
    // console.log('у fileName='+ fileName +' ----- ДУЖОК НЕМА!!!');
}
// А ДАЛІ ЯКЩО ДУЖОК ВЖЕ НЕМА однаково з якої причини
var fileName  = fileName.replace(/(^\s*)|(\s*)$/g, '');                         // WORK-v0.1.11!! // Видаляємо "пробіли" з переду і ззаду у масива "fileName"
//console.log('fileName3A2|'+ fileName +'|='+ fileName.length +'|');            // WORK-v0.1.11!!
var fileName  = fileName.replace(/(\s+)/g, '_');                                // WORK-v0.1.11!! // Видаляємо "пробіли" в середині на "_"
//console.log('fileName3B|'+ fileName +'|='+ fileName.length +'|');             // WORK-v0.1.11!!
localStorage.setItem('lsFileNameId_'+[i], fileName);                            // WORK-v0.1.11!!  записуємо оновлене значення в ЛС
// console.log('lsFileNameId_'+ [i] +'='+ localStorage.getItem('lsFileNameId_'+[i])); // WORK-v0.1.11!! 
// ########## TITLE END #########
*/

/*
// закоментовано починаючи з 0,2,22 - у звЯзку з тим що на новій логіці ця перевірка вже непотрібна!
// ########## CONTENT ##########
if (content.match(/(.+)/g)) {
    //console.log('content1='+ content +'|='+ content.length +'|');             // WORK!!
    var content  = content.replace(/(^|\s+)content:(?=\s+|$)/g, '');            // WORK!! // ПЕРЕЗАПИСУЄМО "content:" порожнім ""
    //console.log('content2='+ content +'|='+ content.length +'|');             // WORK!!
    var content  = content.replace(/(^\s*)|(\s*)$/g, '');                       // WORK!! // Видаляємо "пробіли"
    //console.log('content3|'+ content +'|='+ content.length +'|');             // WORK!!
} else {
    //console.log('content=|'+ content +'| довжина='+ content.length +'|');
    var content  = 'beta-тест: переклад буде пізніше';  
}
  localStorage.setItem('lsContentId_'+[i], content);                            // WORK!!  записуємо оновлене значення в ЛС
  // console.log('lsContentId_'+ [i] +'='+ localStorage.getItem('lsContentId_'+[i])); // WORK!! 
// ########## CONTENT END #######
*/

//localStorage.setItem('lsFileNameId_'+[i],   fileName);                // WORK-v0.2.22!!  записуємо оновлене значення в ЛС
//localStorage.setItem('lsTitleId_'+[i],      title);                   // v0.1.7
//localStorage.setItem('lsContentId_'+[i],    content);                 // v0.1.7
//localStorage.setItem('lsMaxId',             entries.length);          // v0.1.11
          //localStorage.lsFileNameId_ + i  = fileName;         // WORK-v0.2.22!!  записуємо оновлене значення в ЛС
          //localStorage.lsTitleId_ + i     = title;            // v0.1.7
          //localStorage.lsContentId_ + i   = content;          // v0.1.7
          //localStorage.lsMaxId            = entries.length;   // v0.1.11
                    // localStorage.setItem('lsID_id'+[i], title);            // WORK!!  // v0.1.5
                    //localStorage.setItem('lsID_idMax', entries.length);     // WORK!!  // v0.1.7 
                    // console.log('lsID_id'+ [i] +'='+ localStorage.getItem('lsID_id'+[i]) +'('+ localStorage.getItem('lsID_idMax') +') ' ); // WORK!! // v0.1.5
                
                



// http://javascript.ru/forum/misc/7321-udalit-slovo-iz-stroki-2.html
// http://javascript.ru/forum/misc/18887-udalenie-probelov-v-nachale-i-konce-stroki.html



/*
// PARSER 0.1.5  START  // v0.1.5

// console.log('--------'+ entry.content.$t);
// var str = (entry.content.$t);                                                // v0.1.5

//str.length; // Довжина рядка "str"
// console.log(i +'|str.length='+ str.length +'|'+ title  +'|'+ content);

// var strEn = (entry.content.$t); // англійська
// var strTr = (entry.content.$t); // транскрипція
// var strUk = (entry.content.$t); // українська

var strEnResult1  = strEn.match(/(.*)(?=, trans:)/g);                           // WORK!! // Виводить англійські слова (не вичешені)
var strEnResult1  = strEnResult1[0];                                            // WORK!!
//console.log('En1='+ strEnResult1 +'|='+ strEnResult1.length +'|');            // WORK!!
var strEnResult2  = strEnResult1.replace(/(^|\s+)en:(?=\s+|$)/g, '');           // WORK!! // ПЕРЕЗАПИСУЄМО "en:" порожнім ""
//console.log('En2='+ strEnResult2 +'|='+ strEnResult2.length +'|');            // WORK!!
var strEnResult3  = strEnResult2.replace(/(^\s*)|(\s*)$/g, '');                 // WORK!! // Видаляємо "пробіли"
// console.log('En|'+ strEnResult3 +'|='+ strEnResult3.length +'|');            // WORK!!
var en            = strEnResult3;                                               // WORK!!
localStorage.setItem('lsEn_id'+[i], en);                                        // WORK!!
// console.log('lsEn_id'+ [i] +'='+ localStorage.getItem('lsEn_id'+[i]));       // WORK!! 


var strTrResult1  = strTr.match(/(.*)(?=, uk:)/g);                              // WORK!! // Виводить транскрипцію слова, і УСЕ що стоїть ПЕРЕД ---, uk:---
var strTrResult1a = strTrResult1[0];                                            // WORK!!
//console.log('Tr1a='+ strTrResult1a +'|='+ strTrResult1a.length +'|');         // WORK!!
var strTrResult1b = strTrResult1a.replace(/(^.*)(?=trans:)/g, '');              // WORK!! 
//console.log('Tr1b='+ strTrResult1b +'|='+ strTrResult1b.length +'|');         // WORK!!
var strTrResult2  = strTrResult1b.replace(/(^|\s+)trans:(?=\s+|$)/g, '');       // WORK!! // ПЕРЕЗАПИСУЄМО "trans:" порожнім ""
//console.log('Tr2='+ strTrResult2 +'|='+ strTrResult2.length +'|');            // WORK!!
var strTrResult3  = strTrResult2.replace(/(^\s*)|(\s*)$/g, '');                 // WORK!! // Видаляємо "пробіли"
// console.log('Tr|'+ strTrResult3 +'|='+ strTrResult3.length +'|');            // WORK!!
var tr            = strTrResult3;                                               // WORK!! 
localStorage.setItem('lsTr_id'+[i], tr);                                        // WORK!!
// console.log('lsTr_id'+ [i] +'='+ localStorage.getItem('lsTr_id'+[i]));       // WORK!! 


var strUkResult1  = strUk.match(/(.*)(?=, offlineen01)/g);                      // WORK!! // Виводить переклад (не вичешений)
var strUkResult1a = strUkResult1[0];                                            // WORK!!
// console.log('Uk1a='+ strUkResult1a +'|='+ strUkResult1a.length +'|');        // WORK!!
var strUkResult1b = strUkResult1a.replace(/(^.*)(?=uk:)/g, '');                 // WORK!! 
// console.log('Uk1b='+ strUkResult1b +'|='+ strUkResult1b.length +'|');        // WORK!!
var strUkResult2  = strUkResult1b.replace(/(^|\s+)uk:(?=\s+|$)/g, '');          // WORK!! // ПЕРЕЗАПИСУЄМО "trans:" порожнім ""
// console.log('Uk2='+ strUkResult2 +'|='+ strUkResult2.length +'|');           // WORK!!
var strUkResult3  = strUkResult2.replace(/(^\s*)|(\s*)$/g, '');                 // WORK!! // Видаляємо "пробіли"
// console.log('Uk|'+ strUkResult3 +'|='+ strUkResult3.length +'|');            // WORK!!
var uk            = strUkResult3;                                               // WORK!! 
localStorage.setItem('lsUk_id'+[i], uk);                                        // WORK!!
// console.log('lsUk_id'+ [i] +'='+ localStorage.getItem('lsUk_id'+[i]));       // WORK!! 

// PARSER 0.1.5  END  // v0.1.5
*/


// ####################################################################################################################
// УВАГА!! ТЕСТУВАТИ КІНЦЕВИЙ СПИСОК ПАРСЕРА - ЦИМ!!!            
// console.log([i] +'('+ localStorage.getItem('lsID_idMax') +')='+ localStorage.getItem('lsEn_id'+[i]) +' ['+ localStorage.getItem('lsTr_id'+[i]) +'] '+ localStorage.getItem('lsUk_id'+[i])); // WORK!!  // v0.1.5
// console.log([i] +'('+ localStorage.getItem('lsMaxId') +') |'+ localStorage.getItem('lsTitleId_'+[i]) +' '+ localStorage.getItem('lsContentId_'+[i]) +''); // WORK!!  // v0.1.7
// ####################################################################################################################

