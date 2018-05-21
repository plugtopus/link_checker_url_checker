function status1(t) {
    var e = new XMLHttpRequest();
    try {
        return e.open("GET", t, !1), e.send(), e.status;
    } catch (t) {
        return e.status;
    }
}

function status2(t) {
    var e = new XMLHttpRequest();
    e.onreadystatechange = function () {
        4 == e.readyState && (e.status >= 400 && e.status <= 599 ? validLink(t) : 0 != e.status && validLink(t));
    }, e.open("GET", t.href, !0), e.send();
}

function validLink(t) {
    chrome.storage.sync.get(["greenBox", "greenBoxTime"], function (e) {
        1 == e.greenBox && (t.style["background-color"] = "lightgreen", t.style.color = "black", "2" == e.greenBoxTime ? setTimeout(function () {
            t.style = t.getAttribute("oldStyle");
        }, 2e3) : "5" == e.greenBoxTime && setTimeout(function () {
            t.style = t.getAttribute("oldStyle");
        }, 5e3));
    });
}

function invalidLink(t) {
    chrome.storage.sync.get(["unclickable", "strikethrough"], function (e) {
        1 == e.unclickable && t.removeAttribute("href"), 1 == e.strikethrough && t.style.setProperty("text-decoration", "line-through");
    });
}
for (links = document.getElementsByTagName("a"), i = 0; i < links.length; i++) links[i].onmouseover = function () {
    if (0 == this.hasAttribute("oldStyle")) {
        var t = this.getAttribute("style");
        this.setAttribute("oldStyle", t);
    }
    "" != this.href && (firstStatus = status1(this.href), firstStatus >= 200 && firstStatus <= 399 ? validLink(this) : 0 == firstStatus ? status2(this) : invalidLink(this));
};