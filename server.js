const { app } = require( './app' );


//------------------PORT config------------------//
const PORT = process.env.PORT || 8080;

const main = () => {
    try {
        app.listen( PORT, () => console.log( `Server on PORT: ${ PORT }.` ) );
    } catch (error) {
        console.log( `Error al intentar iniciar el servidor: ${ error }` );
    }
}

main();