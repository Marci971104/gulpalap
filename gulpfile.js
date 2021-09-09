const { src, dest, watch } = require("gulp");

function stream_Html(){
return src("src/*.html")
    .pipe(dest("public"));
    }

function stream_js(){
return src("src/js/*.js")
    .pipe(dest("public/js"));
    }

function stream_Jquery(){
    return src("node_modules/jquery/dist/jquery.min.js")
    .pipe(dest("public/lib"));
}    

    exports.stream_Html = stream_Html;
    exports.stream_Jquery=stream_Jquery;

exports.default = function(){
    watch("src/*.html",stream_Html);
    watch("src/js/*.js",stream_js);
}

  