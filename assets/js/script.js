! function() {
    "use strict";
    var e = document.querySelector(".scroll-to-top");
    e && window.addEventListener("scroll", (function() {
        var o = window.pageYOffset;
        e.style.display = o > 100 ? "block" : "none"
    }));
    var o = document.querySelector("#mainNav");
    if (o) {
        var n = o.querySelector(".navbar-collapse");
        if (n) {
            var t = new bootstrap.Collapse(n, { toggle: !1 }),
                r = n.querySelectorAll("a");
            for (var a of r) a.addEventListener("click", (function(e) { t.hide() }))
        }
        var c = function() {
            (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > 100 ? o.classList.add("navbar-shrink") : o.classList.remove("navbar-shrink")
        };
        c(), document.addEventListener("scroll", c)
    }
}();

function copyfunction() {
    var copyText = document.getElementById("copytext");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}