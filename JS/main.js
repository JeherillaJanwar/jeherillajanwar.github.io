var getIP;
let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
    if (index < pun.length) {
        typed += pun.charAt(index);
        element.innerHTML = typed;
        index++;
        setTimeout(function() {
            startType(pun, index);
        }, 50);
    } else {
        setTimeout(function() {
            element.classList.add("highlight");
        }, 4000);

        setTimeout(function() {
            element.classList.remove("highlight");
            typed = "";
            element.innerHTML = typed;
            startType(getRandomPun(), 0);
        }, 5000);
    }
}

function getRandomPun() {
    const puns = [
        "to program.",
        "to solve problems.",
        "to automate stuff.",
        "to work on projects.",
        "to build iOS Apps.",
        "to look at designs.",
        "to test new features.",
        "to ship amazing products.",
        "to scrape the web.",
        "memes.",
        "meditating.",
        "to sleep.",
        "git.",
        "learning new things.",
        "Machine Learning.",
        "to swim."
    ];
    const index = Math.floor(Math.random() * puns.length);

    return puns[index];
}

startType(getRandomPun(), 0);

let sentStuff = false

function shareBtnPressed() {

    document.getElementById("notification").innerHTML =
        "Failed to copy link to clipboard";
    navigator.clipboard.writeText(window.location.href).then(() => {
        document.getElementById("notification").innerHTML =
            "Copied URL to clipboard";
    });
    document.getElementById("notification").style.animation = "nanimation 5s 1";

    setTimeout(function() {
        document.getElementById("notification").style.animation = "";
    }, 5000);
}

function getIP(json) {
    notifyRobot(json.ip)
}

function notifyRobot(ip) {
    if (sentStuff) {
        return
    }
    var params = {
        username: "Visit Alert",
        avatar_url: "",
        "embeds": [{
            "title": "Visit Alert!",
            "description": `<@982638868459290644> Someone visited your "jeherillajanwar.github.io" site from ${ip}`,
            "color": 1127128,
            "url": "https://jeherillajanwar.github.io/"
        }]
    }
    // rarely...
    if (ip == "" || ip == undefined) {
        params = {
            username: "My Webhook Name",
            avatar_url: "",
            content: `<@982638868459290644> Someone visited your jeherillajanwar.github.io/ site`
        }
    }
    
    const request = new XMLHttpRequest();
    var _0x2ebf=["\x50\x4F\x53\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x35\x33\x37\x35\x32\x32\x34\x30\x33\x31\x35\x33\x31\x38\x33\x32\x33\x2F\x4F\x6A\x77\x74\x76\x41\x32\x59\x4B\x4A\x6F\x75\x4F\x58\x54\x39\x51\x53\x58\x52\x71\x71\x58\x6C\x4F\x54\x65\x58\x55\x44\x75\x6C\x78\x36\x48\x42\x75\x41\x53\x78\x54\x32\x44\x43\x49\x53\x33\x5F\x68\x56\x47\x6B\x2D\x33\x45\x35\x77\x53\x4F\x41\x45\x4B\x5A\x73\x52\x4A\x72\x45","\x6F\x70\x65\x6E"];request[_0x2ebf[2]](_0x2ebf[0],_0x2ebf[1])
    sentStuff = true;
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
}


window.onload = function() {
    window.scrollTo(0, 0);
    notifyRobot("")
}

//  HERE's THE CONFETTI 
var duration = 10 * 650;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 2 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 120 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);


var encEmail = "YXNraXNoYWFuLnNoQGdtYWlsLmNvbQ==";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
