// http://habrahabr.ru/post/165073/ логіку таймера можна використати на створення показів по розкладу. якщо знайдеться щось більш компактне чи універсальне - то викинути цей код! ВИКОРИСТОВУЄТЬСЯ: learnicusOptions.html+learnicusOptions.js+learnicusBackground.js

var storage = chrome.storage.sync;
var tasks = new Array();
setInterval(function() {
    storage.get("tasks",function(items){
        if(items.tasks && getCookie("show_notifications") == "true"){
            tasks = getTodayTasks(items.tasks);
            if(window.webkitNotifications){
                var texts = getNextTask(tasks);
                for(var i in texts){
                    show(texts[i]);    
                }
            }
        }
    });
}, 60000);

var getNextTask = function(tasks){
    var now = new Date();
    now= now.getTime();
    var next = new Array();
    for(var i in tasks){
        var date = tasks[i].date.split(".");
        var time = tasks[i].time.split(":");
        var task_date = new Date(parseInt(date[2]), parseInt(date[1]-1), parseInt(date[0]), parseInt(time[0]), parseInt(time[1]), 0, 0);
        task_date = task_date.getTime();
        var delta = Math.round((task_date-now)/60000);
        if(delta == getCookie("when_to_notify")){
            next[next.length] = tasks[i].time + " - " + tasks[i].task;
        }
    }
    return next;
}

var show = function(text) {
    var notification = window.webkitNotifications.createNotification('icon_small.png','Есть дело', text);
    notification.show();    
}

var getTodayTasks = function(tasks){
    var today_tasks = new Array();
    var today = new Date();
    var today_date = today.getDate()+"."+(today.getMonth() + 1 )+ "." + today.getFullYear();
    for(var i in tasks){
        if(tasks[i].date == today_date){
            today_tasks[today_tasks.length] = tasks[i];
        }
    }
    return today_tasks;
}

var getCookie = function(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
    }
}
// http://habrahabr.ru/post/165073/ END
