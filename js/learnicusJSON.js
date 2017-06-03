var ThisFileName    = 'learnicusJSON';  // назва цього файла.
var ThisFileNameExt = 'js';            // тип цього файла. 

// localStorage.setItem('lsEn_id0', 'Завантажую базу');
// localStorage.setItem('lsTr_id0', 'зачекайте');
// localStorage.setItem('lsUk_id0', 'Час завантаження заледить від швидкості вашого інтернета, та розміру бази');

  localStorage.setItem('lsTitleId_0',   'Завантажую базу слів, зачекайте!');
  console.log('Записав в ЛС нульовий lsTitleId_0   = '+ localStorage.getItem('lsTitleId_0'));
  localStorage.setItem('lsContentId_0', 'Час завантаження залежить від швидкості з`єднання, та розміру бази');
  console.log('Записав в ЛС нульовий lsContentId_0 = '+ localStorage.getItem('lsContentId_0'));
  console.log('');

console.log('Щоб побачити скільки у нас є елементів пишемо: localStorage.length; а їх у нас зараз = '+localStorage.length);
console.log('Щоб ВСЕ вичистити в localStorage - пишемо в консолі: localStorage.clear();');
console.log('');


function learnicusJsonEvents(json) {
var dictTitle                                         = json.feed.title.$t;     // WORK-v2.0.01!! // зчитуємо з Г-документа його: "назву"
var dictUrl                                           = json.feed.id.$t;        // WORK-v2.0.01!! // зчитуємо з Г-документа його: "УРЛ"
var dictUpdated                                       = json.feed.updated.$t;   // WORK-v2.0.01!! // зчитуємо з Г-документа його: "дату останньої зміни"
var dictEntries                                       = json.feed.entry.length; // WORK-v2.0.01!! // зчитуємо з Г-документа його: "кількість обЄктів"
localStorage.ls_current_dictTitle                     = dictTitle;              // WORK-v2.0.01!! // вносимо в ЛС "назву" документа із змінної коди ми її записали
localStorage.ls_current_maxId                         = dictEntries;            // WORK-v2.0.01!! // вносимо в ЛС "кількість обЄктів" документа із змінної коди ми її записали
localStorage.setItem('ls_'+ dictTitle +'_dictTitle',    dictTitle);             // WORK-v2.0.01!! // вносимо в ЛС (для поточного документа) його "назву"
localStorage.setItem('ls_'+ dictTitle +'_dictUrl',      dictUrl);               // WORK-v2.0.01!! // вносимо в ЛС (для поточного документа) його "УРЛ"
localStorage.setItem('ls_'+ dictTitle +'_dictUpdated',  dictUpdated);           // WORK-v2.0.01!! // вносимо в ЛС (для поточного документа) його "дату останньої зміни"
localStorage.setItem('ls_'+ dictTitle +'_maxId',        dictEntries);           // WORK-v2.0.01!! // вносимо в ЛС (для поточного документа) його "кількість обЄктів"


// робимо перебір порядково документа, із внесеннням кожного параметра в змінну(і) віл 1 до "кількість обЄктів" в поточному документі
// це приклад структури документа:
// https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/values?alt=json-in-script&callback=learnicusJsonEvents
// а це власне САМ документ
// https://docs.google.com/spreadsheets/d/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc

console.log('Починаю опрацьовувати словник '+dictTitle+';');
  for (var i=0; i<dictEntries; i++) {
    var dictId      = json.feed.entry[i].gsx$dictid.$t;                         // WORK-v2.0.01!! // "dictid" - необовЯзковий параметр. Використовується для того щоб наочно розуміти який і де словник
    var lang1word   = json.feed.entry[i].gsx$lang1word.$t;                      // WORK-v2.0.01!! // "lang1word"  - оригінальне слово
    var lang2word   = json.feed.entry[i].gsx$lang2word.$t;                      // WORK-v2.0.01!! // "lang2word"  - переклад
    var lang1trans  = json.feed.entry[i].gsx$lang1trans.$t;                     // WORK-v2.0.01!! // "lang1trans" - оригінальна транскрипція
    var lang2trans  = json.feed.entry[i].gsx$lang2trans.$t;                     // WORK-v2.0.01!! // "lang2trans" - перекладна транскрипція
    var lang1mp3    = json.feed.entry[i].gsx$lang1mp3.$t;                       // WORK-v2.0.01!! // "lang1mp3"   - назва файлу звучання оригіналу 
    var lang2mp3    = json.feed.entry[i].gsx$lang2mp3.$t;                       // WORK-v2.0.01!! // "lang2mp3"   - назва файлу звучання перекладу

// виводимо в консоль змінні (закоментувати наступний рядок коли ВСЕ працюватиме!! - для збільшення швидкодії!)
    console.log('dictTitle/dictId='+dictTitle+'/'+dictId+'; lang(1/2)word='+lang1word+'/'+lang2word+'; lang(1/2)trans='+lang1trans+'/'+lang2trans+'/'+lang2word+'; lang(1/2)mp3='+lang1mp3+'/'+lang2mp3+';');
   
    //localStorage.setItem('ls_'+ dictTitle +'_dictId_'    +[i], dictId);         // WORK-v2.0.01!! "dictid" - необовЯзковий параметр. Тут закоментований, щоб не захаращувати ЛС непотрібними рядками.
    localStorage.setItem('ls_'+   dictTitle +'_lang1word_' +[i], lang1word);      // WORK-v2.0.01!! // пишемо в ЛС для (і-того номера) значення "lang1word"
    localStorage.setItem('ls_'+   dictTitle +'_lang2word_' +[i], lang2word);      // WORK-v2.0.01!! // пишемо в ЛС для (і-того номера) значення "lang2word"
    localStorage.setItem('ls_'+   dictTitle +'_lang1trans_'+[i], lang1trans);     // WORK-v2.0.01!! // пишемо в ЛС для (і-того номера) значення "lang1trans"
    localStorage.setItem('ls_'+   dictTitle +'_lang2trans_'+[i], lang2trans);     // WORK-v2.0.01!! // пишемо в ЛС для (і-того номера) значення "lang2trans"
    localStorage.setItem('ls_'+   dictTitle +'_lang1mp3_'  +[i], lang1mp3);       // WORK-v2.0.01!! // пишемо в ЛС для (і-того номера) значення "lang1mp3"
    localStorage.setItem('ls_'+   dictTitle +'_lang2mp3_'  +[i], lang2mp3);       // WORK-v2.0.01!! // пишемо в ЛС для (і-того номера) значення "lang2mp3"
  }
  console.log('Завантажив і підготував до вивчення словник '+dictTitle+';');
  console.log('');
};

console.log('Завантажив і підготував скрипт для завантаження словників');
console.log('FULL LOAD|js/learnicusJSON.js             |=OK!');
console.log('');

//document.write('<scr'+'ipt src="'+ localStorage.getItem('lsJsonEvents') +'" type="text/javascript" ></scr'+'ipt>');  // УВАГА!!! НЕ СТАВИТИ "АСИНХРОН" !!!!!!!! бо глючить закешовування!
//console.log('FULL LOAD|localStorage lsJsonEvents       |=OK!');


