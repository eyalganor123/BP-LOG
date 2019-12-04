'use strict'

function renderData() {
    var strHtmls = `<tr>`
    for (let index = 0; index < gData.length; index++) {
        const high = gData[index].high;
        const low = gData[index].low;
        var eventTime = gData[index].time;
        var time = new Date(eventTime).toDateString();
        
        strHtmls += `<th scope="row">${index}</th>`
        strHtmls += `<td>${high}</td>`
        strHtmls += `<td>${low}</td>`
        strHtmls += `<td class="time" onclick="onDeleteItem('${time}')">${time}</td></tr>`
    }
    document.querySelector('.data-display').innerHTML = strHtmls;
}

function onAddNew() {
    var high = document.querySelector('.high-entry').value;
    var low = document.querySelector('.low-entry').value;
    addNewData(high, low);
    renderData();
}

function onDeleteItem(time) {
        deleteItem(time);
        saveToStorage('data',gData);
        renderData();
}

function rUSure() {
    confirm('are you sure?');
}