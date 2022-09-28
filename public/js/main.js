// var str = 'Some very long string';
// if(str.length > 10) str = str.substring(0,10);
function limitDate(str){
    if(str.length > 16){
        return str.substring(0,15)
    }
}