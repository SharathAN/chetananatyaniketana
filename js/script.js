window.onload = function () {
    loadHeader();
    loadFooter();
    stopLoadingFlux();
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

function stopLoadingFlux(){
waitForElementWithBoolean(15000, '#cnn-logo')
    .then(result  => {
        if (result.found) {
            setTimeout(loadingAnimationStop, 100);
        } else {
            setTimeout(loadingAnimationStop, 100);
        }
    });
}

function loadingAnimationStop(){
    var elem = document.getElementById('loading');
    console.log("Stopped Loading state animation.");
    elem.style.opacity="0";
    setTimeout(function() {
        elem.style.display = 'none';
    }, 500); // Adjust the time to match transition duration of transition: opacity 0.5s ease-out;
}

function highlightTabElement(selector) {
    waitForElementWithBoolean(15000, selector)
    .then(result  => {
        if (result.found) {
            result.elem.style.backgroundImage = "url('images/button-bgr-hover.jpg')";
        } else {
            console.log("Timeout reached, unable to highlight.");
        }
    });
}

//This funcation has boolean return type and a callback with element reference
function waitForElementWithBoolean(timeout, selector, interval = 100) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const intervalId = setInterval(() => {
            const elem = document.querySelector(selector)
            if (elem) {
                clearInterval(intervalId);
                resolve({ found: true, elem });
                console.info(`Element ${selector} found approx ${(Date.now() - startTime)} milliseconds`);
            } else if (Date.now() - startTime >= timeout) {
                clearInterval(intervalId);
                resolve({ found: false, elem: null }); // Timeout reached
                console.error(`Timeout occurred: Element ${selector} not found within ${(Date.now() - startTime)} milliseconds!`);
            }
        }, interval);
    });
}


//other ref //san
function testWaitFOrElement(){
        waitForElement(15000, '#homeTab', function (element) {
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
            console.info(`Element ${selector} found approx ${elapsedTime} milliseconds`);
        } else if (elapsedTime >= timeout) {
            clearInterval(interval);
            console.error(`Timeout occurred: Element ${selector} not found within ${timeout} milliseconds!`);
        }
    }, 100); // Check every 100 milliseconds
}

function testSampleFn() {
    fetch('./Footer.html').then(response => response.text()).then(html => {
        document.getElementById('footerFile').innerHTML = html;
    });
    document.getElementById('coursesTab').style.backgroundImage= "url('images/button-bgr-hover.jpg')";
}

