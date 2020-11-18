function importJQuery() {

    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = '../javascript/jquery.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
        resolve();
    })
}

function init() {
    importJQuery().then(() => {
        setSize();
    })
}

function setSize() {
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );
    window.onload = function () {
        var width = document.getElementsByClassName("about-class-blocks")[0].offsetWidth;
        $('.about-class-blocks').css({
            'width': width + "px",
            'height': 2 * width / 3 + "px",
            "background-color": "yellow"
        });

        var blocks = document.getElementsByClassName('about-class-block-item');
        var colors = ['#EC3839', '#F7C100', '#00BAC9', '#C9A661', '#B2D135', '#7C5977'];
        var background_url = ['baby', 'soldier', 'student', 'baby', 'soldier', 'student']
        for (var i = 0; i < 6; i++) {
            blocks[i].style.backgroundColor = colors[i];
            blocks[i].style.backgroundImage = "url('../src/' + images[i] + '.png)";
            console.log(colors[i]);
        }

        $('.about-class-block-item').css({
            'width': width / 3 + "px",
            'height': width / 3 + "px",
            'position': 'relative',
        });
    }

}



init();