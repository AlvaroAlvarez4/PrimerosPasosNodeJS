/* Un callback es una funcion que llama a otra funcion */

function hagoAlgo(callback){
    console.log('1');
    callback();
    console.log('2');

}
hagoAlgo(
    function algo(){
        console.log('Hola Codehouse');
    }
)