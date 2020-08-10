let testElement = document.getElementById("test");

testElement.onclick = function(element) {
    function modifyDOM() {
        var regex = /var AF_initDataKeys =(.+?)]/;
        var head = document.head.innerHTML;
        var body = document.body.innerHTML;
        var datakeys = head.match(regex)[1].split('"');
        var last_datakey = datakeys[datakeys.length - 2];

        regex = new RegExp("AF_initDataCallback\\({key: '" + last_datakey + "'(.+?)data:(.+?)]");
        data = body.match(regex)[2].split(',');
        email = data[4];
        image = data[5];
        name = data[6];
        return 'Email: ' + email + '\nImage link: ' + image + '\nName: ' + name;
    }

    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        alert(results[0]);
    });
};