// JavaScript Document

// TODO  Зробити ще одну бвзу в яку скормити білігву без парсера (тоді можна буде крутити його без обмеження по кількості слів)

// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodDZEYllPdHIzd3plV3JtTUkzYWMyMkE/od6/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB/db
// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodDZEYllPdHIzd3plV3JtTUkzYWMyMkE/od5/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB/db.beta
// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodHp2aVEzWV81VnQyRGpnTkN0WDhQUFE/od7/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB.en2uk/en2ua
// var JsonEvents ="https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodEhaUmFFRENXYUlKX3FOZk9TejV6VHc/od6/public/basic?alt=json-in-script&callback=learnicusJsonEvents"  // Learnicus.DB.en2uk.number
// localStorage.setItem('lsJsonEvents', JsonEvents); // ВИДАЛИТИ ПІСЛЯ v0.3.0
   localStorage.learnicusDictionaryID = 'https://spreadsheets.google.com/feeds/list/0As9SVzApMBjodHp2aVEzWV81VnQyRGpnTkN0WDhQUFE/od7/public/basic?alt=json-in-script&callback=learnicusJsonEvents';




// ########## RUN 'jquery.min.js'   
// var s=document.createElement('script');
s=document.createElement('script'); 
s.src=chrome.extension.getURL('js/jquery.min.js');
document.getElementsByTagName('head')[0].appendChild(s);

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


// ########## RUN 'learnicusJSON.js' 
// var s=document.createElement('script');
s=document.createElement('script');
s.src=chrome.extension.getURL('js/learnicusJSON.js');
document.getElementsByTagName('head')[0].appendChild(s);


/*
// ########## RUN 'база слів' 
// УВАГА!!! НЕ СТАВИТИ "АСИНХРОН" !!!!!!!! бо глючить закешовування!
var s=document.createElement('script');
s.src=localStorage.getItem('lsJsonEvents');
document.getElementsByTagName('head')[0].appendChild(s);
*/



// ########## RUN 'база слів'---v0.2.6 
// УВАГА!!! НЕ СТАВИТИ "АСИНХРОН" !!!!!!!! бо глючить закешовування!
// var s=document.createElement('script');
s=document.createElement('script');
s.src=localStorage.learnicusDictionaryID;
document.getElementsByTagName('head')[0].appendChild(s);

//document.createElement('script').src=localStorage.learnicusDictionaryID;
//document.getElementsByTagName('head')[0].appendChild(document.createElement('script'));



/*
console.log('GOTO1:');
GOTO1: if (localStorage.length >= 15) {
  console.log('localStorage.length = '+ localStorage.length);  
  // ########## RUN 'база слів'---v0.2.6 
  // УВАГА!!! НЕ СТАВИТИ "АСИНХРОН" !!!!!!!! бо глючить закешовування!
  // var s=document.createElement('script');
  var sDictionaryID=document.createElement('script');
  sDictionaryID.src=localStorage.learnicusDictionaryID;
  document.getElementsByTagName('head')[0].appendChild(sDictionaryID);
  console.log('AAAAAAAA localStorage.length = '+ localStorage.length);
} else {
  while (localStorage.length <=15){
  setTimeout(function() { console.log('1 сек') }, 10);
  console.log('перейшли на GOTO1?');
  break GOTO1;
  console.log('НЕ перейшли на GOTO1 :(');
  };
};
console.log('BBBBBBB sDictionaryIDLabel END '+ localStorage.length);
GOTO2:
*/

// ########## RUN 'buzz.js' 
//var s=document.createElement('script');
s=document.createElement('script');
s.src=chrome.extension.getURL('js/buzz.js');
document.getElementsByTagName('head')[0].appendChild(s);

// ########## RUN 'learnicusBackground.js' 
// var s=document.createElement('script');
s=document.createElement('script');
s.src=chrome.extension.getURL('js/learnicusBackground.js');
document.getElementsByTagName('head')[0].appendChild(s);





