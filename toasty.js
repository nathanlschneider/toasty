var toasty = (function () {

    var T = {
        pic: 'https://portal.mhgi.net/portal/toastie/toasty.png',
        audio: 'https://portal.mhgi.net/portal/toastie/toasty.mp3',
        style: 'position:fixed;bottom:0;right:0;z-index:100;'
    }

    var elem = document.getElementById('nav-access');

    elem.insertAdjacentHTML('beforebegin', '<img id="toaster" style=' + T.style + ' src=' + T.pic + '>');

    var audio = new Audio(T.audio);

    audio.play();

    setTimeout(function () {

        (function () {
            var dan = document.getElementById('toaster');
            //var elem = document.getElementById("myAnimation"); 
            var pos = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (pos == 200) {
                    if (pos > 199) {
                        document.getElementById('toaster').remove();
                    }
                    clearInterval(id);
                } else {
                    pos += 5;

                    dan.style.right = "-" + pos + 'px';
                }
            }

        })();

        //dan.style = "position:fixed;bottom:0;right:-" + i + "px;z-index:100;"; 
    }, 800)


})();
