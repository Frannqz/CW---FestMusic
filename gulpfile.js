//Src: sirve para identificar el archivo
//Dest: para guardar el archivo
//Pipe: compila
const { src, dest, watch } = require("gulp"); //Apunta al devDependencies del package.json
const sass = require('gulp-sass')(require('sass')); //Importamos
const plumber = require('gulp-plumber');

function css(done) {
    //src('src/scss/app.scss')//Identificar el archivo SASS 
    src('src/scss/**/*.scss') //Aqui recorre todos los carpetas/archivos .scss que esten en ese directorio
        .pipe(plumber())
        .pipe(sass())//Compilar    
        .pipe(dest("build/css")); //Almacenar en disco duro

    done();//Callback avisando a Gulp cuando llego el final
}

function dev(done) {//Funcion de desarrollo para el watch
    watch("'src/scss/**/*.scss", css);//Cuando cambie la ruta especificada, manda llamar la func css

    done();
}

exports.css = css;
exports.dev = dev;