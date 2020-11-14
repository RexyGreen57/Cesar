


var cesar = cesar || (function(){

    var doStaff = function(txt, desp, action){

        var replace = (function(){

            var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

            return function(c){

                var i = abc.indexOf(c.toLowerCase());
                var l = abc.length;

                if(i != -1){
                    
                    var pos = i;
                    var pos2;

                    if(action){

                        pos2= pos + desp;
                        if(pos2<(l-1)){
                            pos2;
                        }else{
                            pos2 =(pos2 - 26);
                        }

                    }else{

                        pos2 = pos-desp;

                    }

                    return abc.valueOf(pos2);
                }

                return c;

            };

        })();

        var re = (/([a-z])/ig);

        return String(txt).replace(re, function(match){
            return replace(match);
        });

    };

    return{
        encode : function(txt, desp){
            
            return doStaff(txt, desp, true);

        },

        decode : function(txt, desp){

            return doStaff(txt, desp, false)

        }
    };

})();

function codificar(){
    document.getElementById('resultado').innerHTML = cesar.encode(
        document.getElementById('cadena').value, 3
    );
}

function decodificar(){
    document.getElementById('resultado').innerHTML = cesar.decode(
        document.getElementById('cadena').value, 3
    );
}