'use strict'

// var gData=[{high:180,low:120,time:1575493971739},{high:180,low:120,time:1575493971739},{high:180,low:120,time:1575493971739}];
var gData=null;
function loadBPData(){
    gData=loadFromStorage('data');
    if (gData.length === 0) {
        gData=[{high:180,low:120,time:1575493971739},{high:180,low:120,time:1575493971739},{high:180,low:120,time:1575493971739}];
    }

  return gData
}
function addNewData(hi,low){
    var newDataItem = {high:hi,low:low,time:Date.now()};
    gData.push(newDataItem);
}

function deleteItem(time){
    var itemIndexToDelete = findItemIDxByTimeStamp(time);
    gData.splice(itemIndexToDelete,1);
}

function findItemIDxByTimeStamp(time){
    gData.forEach(function(item,i){
        if(item.time===time) return i
    })
}