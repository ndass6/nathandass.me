window.onload = function () {

    setTimeout( function() {
        var logoTitle = 'Nathan Dass';
        var logoRandom = '';
        var logoTitleContainer = $('.name-text')[0];
        console.log(logoTitleContainer)
        var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";

        function generateRandomTitle(i, logoRandom) {
            setTimeout( function() {
                logoTitleContainer.innerHTML = logoRandom;
            }, i*70 );
        }

        for( var i=0; i < logoTitle.length+1; i++ ) {
            logoRandom = logoTitle.substr(0, i);
            for( var j=i; j < logoTitle.length; j++ ) { 
                logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
            }
            generateRandomTitle(i, logoRandom);
            logoRandom = '';
        }

    }, 500 );

}