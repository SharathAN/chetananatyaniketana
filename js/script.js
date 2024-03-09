window.onload = function () {
    loadHeader();
    loadFooter();
    setTimeout(loadingAnimation, 100);
};
// san

function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './Header.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('headerFile').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function loadFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './Footer.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('footerFile').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function loadingAnimation(){
    document.getElementById("loading").style.display = "none";
}

function highlightTabElement(elementId) {
    waitForElement(5000, elementId, function (element) {
        element.style.backgroundImage = "url('images/button-bgr-hover.jpg')";
    });
}

function waitForElement(timeout, selector, callback) {
    var elapsedTime = 0;
    var interval = setInterval(function () {
        var element = document.querySelector(selector);
        elapsedTime += 100;
        if (element) {
            clearInterval(interval);
            callback(element);
        } else if (elapsedTime >= timeout) {
            clearInterval(interval);
            handleTimeout(selector, timeout);
        }
    }, 100); // Check every 100 milliseconds
}

function handleTimeout(selector, timeout) {
    console.error(`Timeout occurred: Element ${selector} not found within ${timeout} milliseconds!`);
}




//other ref
function sampleTestFn() {
    fetch('./Footer.html').then(response => response.text()).then(html => {
        document.getElementById('footerFile').innerHTML = html;
    });
    document.getElementById('coursesTab').style.backgroundImage= "url('images/button-bgr-hover.jpg')";
}

//san