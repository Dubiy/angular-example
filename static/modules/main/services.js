app.factory('lipsum', function() {
        console.log('Service created');

        var messages = [];

        var lipsumGenerator = {};

        lipsumGenerator.id = parseInt(Math.random() * 1000000);

        lipsumGenerator.sayHello = (word) => {
            console.log(word);
        };

        lipsumGenerator.getMsgs = () => {
            return messages;
        };

        lipsumGenerator.addMsg = (msg) => {
            messages.push(msg);
            return messages
        };




    return lipsumGenerator;
    });