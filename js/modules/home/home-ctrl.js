/**
* Home controller definition
*/
define([
    './module'
], function(module) {

module.controller('HomeController', function(
    $scope,
    $timeout,
    $localStorage,
    $http,
    $sce
) {
        var $$ = $scope;
        window.scope = $scope;
        
        
        window.http = $http;
        
        $http.get('/samplePreset.lrtemplate')
            .then(function(res){
                $$.templateText = res.data;
                $$.templateData = parseJSONfromTemplate( $$.templateText );
                log( $$.templateData );
                // parseTemplateText( res.data );
                // testReplace( res.data );
                // log(JSON.parse(res.data));
              // $scope.todos = res.data;                
            });
            
        String.prototype.replaceAt = function(index, character) {
            return this.substr(0, index) + character + this.substr(index+character.length);
        }

        $$.safeBind = $sce.trustAsHtml;

        function parseJSONfromTemplate( text ) {

            let str = text,
                json = null;

            str = str
                // get rid of the "s = " at start of document
                    .slice(text.indexOf('{'))
                // Reduce indentation width
                    .replace(/\t|\n/gi, "")
                // Make sure key names conform to JSON `id = ` becomes `"id": `
                    .replace(/([A-z\d]+?)(\ =\ )(.+?)/gim, '"$1": $3')
                // Replace double-curlies with single curly
                    .replace(/{{/gi,"[{")
                    .replace(/,}/gi,"}")
                    .replace(/\}\}/gi,"}]")
                    .replace(/(?:{)(\d)/gi, '[$1')
                    .replace(/(\d)(?:})/gi, '$1]')
                    .trim()
            ;

            // One of the above regexes accidentally terminates the root object
            // with a ], this fixes that (HACK)
            if (str.charAt( str.length - 1) !== '}') {
                str = str.slice(0, str.length - 1) + '}'
            }

            // log(str);
            // log( str.substr( 1184, 100 ));

            // return JSON.parse( str );

            try {
                json = JSON.parse( str );
                return json;

            } catch( err ) {

                let e = err.toString();

                // console.error(e); return;

                if (/position/.test(e)) {

                    let styled = str;

                    let c = parseInt( e.split(' ').pop() ),
                        char = str.charAt(c);

                    // styled = str.replaceAt(c, '<b>'+char+'</b>');

                    log(styled);
                    // log(styled);
                    log(styled.substr( c - 30, 60 ));
                    $$.errText = styled.substr( c - 30, 60 );
                    // document.write( styled.substr( c - 30, c + 30 ) );

                    // let pos = e.match(/(?position)( [0-9])/)
                } else {
                    console.err(err);
                }

            }

            // log(str)
            // var s = str.substr(400,200);

            // // log(s);

            // s = s.replace(/\n|\t| /gi, "")
            //      .replace(/{{/gi,"{");

            // // s = s.replace( / *\{[^}]*\) /, "{");

            // log(s);
        }
            
        function parseTemplateText( text ) {
            
            var str = text;
                // get rid of the "s = " at start of document
                str = text.slice(text.indexOf('{'));
                // Reduce indentation width
                str = str.replace(/\t/gi, "   ");
                // Make sure key names conform to JSON `id = ` becomes `"id": `
                str = str.replace(/([A-z\d]+?)(\ =\ )(.+?)/gim, '"$1": $3')
                // Make sure Arrays use [ ], instead of { }
                // foo = str.match(/(\{)(.+?)\/(.+?)(\})/g);
                // str.replace(/({)[^+]?(})/gim, "[ $2 ]")
                // log(foo);

                // str = str.replace()
                
                String.prototype.nextCharIs = function( i, searchChar ) {
                    var char = this.charAt(i),
                    nextChar = this.slice(i+1).replace(/\s/g, "");
                    // log(char + '---' + nextChar)
                    if ( i === nextChar) {
                        this.replaceAt( i, '');
                    }
                    return this;
                }
                
                var lastWasBracket = false,
                    lastWasComma = false,
                    i = 0;
                
                while(i < str.length ) {
                    var char = str.charAt(i);
                    
                    // if (/\n|\t/i.test(char))
                    //     continue;
                    
                    if (char === '{') {

                        lastWasBracket = true;

                        if (lastWasBracket) {
                            str.replaceAt( i, '[')
                        }
                    }
                    
                    if (char === ',') {
                        // log(',')
                    }
                    
                    if (char === ',' && str.nextCharIs(i, '}')) {
                        str.replaceAt(i, ' ');
                        // log(str.charAt(i))
                    }
                    
                    i++;
                }
            
            // log(str.match(/([A-z\d]+)(\ =\ )(.+)/g));
            // var match = str.match(/([A-z\d]+)(\ =\ )(.+)/g)[0];
            
            // match.replace()
            
            // str = "\n\n\n\n\n" + str;
            // log(str);
            
            // document.write(str);
            document.getElementById("contents").innerHTML = str;
        }

    });

});
