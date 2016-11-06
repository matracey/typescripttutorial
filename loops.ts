var randomArray = [5, 6, 7, 8];

for (var val in randomArray) {
    document.write(val + "<br />");
}

var strArray = randomArray.map(String);

for (var val of strArray) {
    document.write(val + "<br />");
}