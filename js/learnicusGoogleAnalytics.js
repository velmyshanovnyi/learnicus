// JavaScript Document
// learnicusGoogleAnalytics.js
var ThisFileName = 'learnicusGoogleAnalytics.js'; // назва цього файла. 

// google-analytics START
// READ MORE : http://code.google.com/chrome/extensions/trunk/tut_analytics.html
// READ MORE : http://developer.chrome.com/extensions/tut_analytics.html
console.log(ThisFileName+' google-analytics START');
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
  var ga = document.createElement('script');
  // ga.src = 'https://ssl.google-analytics.com/ga.js';
  ga.src = chrome.extension.getURL('js/ga.js');
  ga.async = true;
  ga.type = 'text/javascript';
  //document.getElementsByTagName('head')[0].appendChild(s);
  //document.getElementsByTagName('head')[0].parentNode.insertBefore(ga, s);
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();
console.log(ThisFileName+' google-analytics END');
// google-analytics END

// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################

console.log('FULL LOAD|js/learnicusGoogleAnalytics.js  |=OK!');