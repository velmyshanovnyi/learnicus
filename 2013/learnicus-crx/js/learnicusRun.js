var ThisFileName    = 'learnicusRun';  // назва цього файла.
var ThisFileNameExt = 'js';            // тип цього файла. 

// TODO  Зробити ще одну бвзу в яку скормити білігву без парсера (тоді можна буде крутити його без обмеження по кількості слів)

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
    console.log(ThisFileName +': LOAD = OK! ( '+FileName+'.'+FileExt+' ) - Створили виклик в <HEAD>'); 
  } 
  else {
    console.log(ThisFileName +': ERROR!'+FileName+' = '+FileRef+' ) - НЕ Створили виклик в <HEAD>' ); 
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
LoadFileHead('learnicusGoogleAnalytics','js');
LoadFileHead('learnicusJSON','js');
LoadFileHead('dict.en2uk.number', 'DictUrl','en','uk','https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/values?alt=json-in-script&callback=learnicusJsonEvents');
LoadFileHead('dict.en2uk.number2','DictUrl','en','uk','https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodHpKOXFrdUp2TE5peWhGbTJ5bXVJTmc/od6/public/values?alt=json-in-script&callback=learnicusJsonEvents');
LoadFileHead('buzz','js');
LoadFileHead('learnicusBackground','js');




// ################ ВСЕ ЩО НИЖЧЕ - ВИДАЛИТИ ПІСЛЯ v0.2.30

/*
// ########## RUN 'jquery.min.js'   
// var s=document.createElement('script');
s=document.createElement('script');
// s.src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
s.src=chrome.extension.getURL('js/jquery.min.js');
document.getElementsByTagName('head')[0].appendChild(s);
*/
/*
// ########## RUN 'google-analytics' 
// google-analytics START
// READ MORE : http://code.google.com/chrome/extensions/trunk/tut_analytics.html
console.log('google-analytics START');
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-476439-12']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);
  _gaq.push(['_trackPageLoadTime']); // швидкість завантаження
  //_gaq.push(['_trackSocial', socialNetwork, socialAction]);
  _gaq.push(['_setDomainName', 'learnicus.tk']);
  _gaq.push(['_setDomainName', 'dl.dropbox.com']);
  _gaq.push(['_setDomainName', 'google.com']);
(function() {
  var ga=document.createElement('script');
  // ga.src = 'https://ssl.google-analytics.com/ga.js';
  ga.src=chrome.extension.getURL('js/ga.js');
  ga.async = true;
  ga.type = 'text/javascript';
  //document.getElementsByTagName('head')[0].appendChild(s);
  //document.getElementsByTagName('head')[0].parentNode.insertBefore(ga, s);
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();
console.log('google-analytics END');
// google-analytics END
*/


/*
// ########## RUN 'learnicusJSON.js' 
// var s=document.createElement('script');
s=document.createElement('script');
s.src=chrome.extension.getURL('js/learnicusJSON.js');
document.getElementsByTagName('head')[0].appendChild(s);
*/


/*
// ########## RUN 'база слів'---v0.2.6 
// УВАГА!!! НЕ СТАВИТИ "АСИНХРОН" !!!!!!!! бо глючить закешовування!
// var s=document.createElement('script');
s=document.createElement('script');
s.src=localStorage.learnicusDictionaryID;
document.getElementsByTagName('head')[0].appendChild(s);
//document.createElement('script').src=localStorage.learnicusDictionaryID;
//document.getElementsByTagName('head')[0].appendChild(document.createElement('script'));
*/

/*
// ########## RUN 'buzz.js' 
//var s=document.createElement('script');
s=document.createElement('script');
s.src=chrome.extension.getURL('js/buzz.js');
document.getElementsByTagName('head')[0].appendChild(s);
*/

/*
// ########## RUN 'learnicusBackground.js' 
// var s=document.createElement('script');
s=document.createElement('script');
s.src=chrome.extension.getURL('js/learnicusBackground.js');
document.getElementsByTagName('head')[0].appendChild(s);
*/




