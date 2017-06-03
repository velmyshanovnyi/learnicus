var ThisFileName    = 'learnicusRun';  // назва цього файла.
var ThisFileNameExt = 'js';            // тип цього файла. 

// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodDZEYllPdHIzd3plV3JtTUkzYWMyMkE/od6/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB/db
// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodDZEYllPdHIzd3plV3JtTUkzYWMyMkE/od5/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB/db.beta
// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodHp2aVEzWV81VnQyRGpnTkN0WDhQUFE/od7/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB.en2uk/en2ua
// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB.en2uk.number
// localStorage.setItem('lsJsonEvents', JsonEvents); // ВИДАЛИТИ ПІСЛЯ v0.3.0
//OLD:
   //localStorage.learnicusDictionaryID = 'https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodDZEYllPdHIzd3plV3JtTUkzYWMyMkE/od5/public/values?alt=json-in-script&callback=learnicusJsonEvents';
//NEW1:
   //localStorage.learnicusDictionaryID = 'https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodHp2aVEzWV81VnQyRGpnTkN0WDhQUFE/od7/public/basic?alt=json-in-script&callback=learnicusJsonEvents';
//NEW2:
   //localStorage.learnicusDictionaryID = 'https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/values?alt=json-in-script&callback=learnicusJsonEvents';

// Виклик в <HEAD>+<BODY>
function LoadFileHead(FileName,FileExt,DictSoundLang1,DictSoundLang2,DictIDurl){
  if (FileExt=="js"){ //if filename is a external JavaScript file
    var FileRef=document.createElement('script');
    FileRef.setAttribute("src", chrome.extension.getURL('js/' + FileName + '.' + FileExt));
    FileRef.setAttribute("type", "text/javascript");
    FileRef.setAttribute("charset", "UTF-8");
    //FileRef.setAttribute("async", '');
  }
  else if (FileExt=="css"){ //if filename is an external CSS file
    var FileRef=document.createElement("link");
    FileRef.setAttribute("href", chrome.extension.getURL('css/'+FileName+'.'+FileExt));
    FileRef.setAttribute("rel", "stylesheet");
    FileRef.setAttribute("type", "text/css");
    FileRef.setAttribute("charset", "UTF-8");
  }
    else if (FileExt=="url"){ //if filename is an external URL
    var FileRef=document.createElement("script");
    FileRef.setAttribute("src", FileName);
    FileRef.setAttribute("type", "text/javascript");
    FileRef.setAttribute("charset", "UTF-8");
    //FileRef.setAttribute("async", '');
  }
    else if (FileExt=="DictUrl"){ //if filename is an external URL
    var FileRef=document.createElement("script");
    FileRef.setAttribute("src", DictIDurl);
    FileRef.setAttribute("type", "text/javascript");
    FileRef.setAttribute("charset", "UTF-8");
    FileRef.setAttribute("id", FileName);
    //FileRef.setAttribute("async", '');
    localStorage.ls_DictionaryID          = DictIDurl;
    localStorage.ls_SoundLang1            = DictSoundLang1;              // чи озвучувати оригінал
    localStorage.ls_SoundLang2            = DictSoundLang2;              // чи озвучувати переклад
  }
  if (typeof FileRef!="undefined") {
    document.getElementsByTagName("head")[0].appendChild(FileRef);
    console.log(ThisFileName +': LOAD = OK! - Створили виклик в <HEAD> : ('+FileName+'.'+FileExt+')'); 
  } 
  else {
    console.log(ThisFileName +': ERROR!  - НЕ Створили виклик в <HEAD> : '+FileName+' = '+FileRef+' )' ); 
  };  
};
function LoadFileBody(FileName, FileExt){
  if (FileExt=="div"){ //if filename is a external JavaScript file
    var FileRef=document.createElement('div');
    FileRef.setAttribute("id", FileName);
    FileRef.setAttribute("class", FileName);
    FileRef.setAttribute("style", "");
  }
  if (typeof FileRef!="undefined")
  document.getElementsByTagName("body")[0].appendChild(FileRef);
  console.log(ThisFileName +': LOAD = OK! ( '+FileName+'.'+FileExt+' ) - Створили елемент в <BODY>'); 
};

//LoadFileHead('https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js', 'url'); // Виклик через Оригінальний файл (зберігаю його провсяк випадок)
LoadFileHead('jquery.min','js');
LoadFileHead('learnicusOptions','js'); 
LoadFileHead('learnicusGoogleAnalytics','js');
LoadFileHead('learnicusJSON','js');
LoadFileHead('dict.en2uk.number', 'DictUrl','en','uk','https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/values?alt=json-in-script&callback=learnicusJsonEvents');
// наступний рядок закоментований для того щоб можна було тестувати, потім або розкоментувати, або якщо буде нормально реалізований механізм автозавантеження - то й видалити взагалі його.
// LoadFileHead('dict.en2uk.number2','DictUrl','en','uk','https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodHpKOXFrdUp2TE5peWhGbTJ5bXVJTmc/od6/public/values?alt=json-in-script&callback=learnicusJsonEvents');
LoadFileHead('buzz','js'); // бібліотека для генерації звуку з мп3. можливо замінити її на більш сучасну чи спробувати грати самим бракузером - треба тестити!!!
LoadFileHead('learnicusBackground','js'); 
LoadFileHead('learnicusStyle','css'); 

