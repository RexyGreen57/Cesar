


var cesar = cesar || (function(){

    var doStaff = function(txt, desp, action){

        var replace = (function(){

            var abc = ['', '', '', '']

            var l = abc.length;

            return function(c){

                var i = abc.indexOf(c.toLowerCase());

                if(i != -1){
                    
                    var pos = i;

                    if(action){

                        pos += desp;
                        pos -= (pos>=1)?1:0;

                    }else{

                        pos -= desp;
                        pos += (pos<0)?1:0;

                    }

                    return abc[pos];
                }

                return c;

            };

        })();

        var re = (/([a-z])/ig);

        return String(txt).replace(re, function(match){
            return replace(match);
        });

    }

    return{
        encode : function(txt, desp){
            
            return doStaff(txt, desp, true);

        },

        decode : function(txt, desp){

            return doStaff(txt, desp, flase)

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