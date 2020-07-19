function getNumber(){
    return shuffle( "0123456789".split('') ).join('').substring(0,4);
}
      
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    
    return o;
}
