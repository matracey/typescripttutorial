var randVals = { x: 1, y: 2, z: 3 };

var {x, y, z} = randVals;

document.write(x + y + z + "<br />");

[x, y, z] = [z, y, x];

document.write("Switch: " + x + y + z + "<br />");

var multiString = `I go on for 
many lines <br />`;

document.write(multiString);
document.write(`<b>${multiString}</b>`);

function theSum(x, y, z): void {
    document.write("Sum: " + (x + y + z) + "<br />");
}

var args = [4, 5, 6];
theSum(...args);

enum Emotion {
    Happy = 1,
    Sad,
    Angry
}

var myFeeling = Emotion.Happy;