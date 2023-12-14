//Src: sirve para identificar el archivo
//Dest: para guardar el archivo
//Pipe: compila
const { src, dest, watch } = require("gulp"); //Apunta al devDependencies del package.json
const sass = require('gulp-sass')(require('sass')); //Importamos


function css(done) {
    src('src/scss/app.scss')//Identificar el archivo SASS 
        .pipe(sass())//Compilar    
        .pipe(dest("build/css")); //Almacenar en disco duro

    done();//Callback avisando a Gulp cuando llego el final
}

function dev(done) {//Funcion de desarrollo para el watch
    watch("src/scss/app.scss", css);//Cuando cambie la ruta especificada, manda llamar la func css

    done();
}

exports.css = css;
exports.dev = dev;