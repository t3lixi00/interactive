function callWebSocket() {

            var socket = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

            socket.onopen = function () {
                console.log("Hello, Connected To WS server");
            };

            socket.onmessage = function (e) {
                console.log("The message received is : " + e.data);
            };
            socket.onerror = function (e) {
                console.log("An error occured while connecting... " + e.data);
            };
            socket.onclose = function () {
                console.log("hello.. The coonection has been clsoed");
            };

        }