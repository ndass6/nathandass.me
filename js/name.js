window.onload = function () {
    var l = Snap('#logo');

    setTimeout( function() {
        var logoTitle = 'Nathan Dass';
        var logoRandom = '';
        var logoTitleContainer = l.text(0, '98%', '');
        var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
        logoTitleContainer.attr({
            fontSize: 315,
            fontFamily: 'Open Sans',
            fontWeight: '600',
            color: '#ffffff'
        });

        function generateRandomTitle(i, logoRandom) {
            setTimeout( function() {
                logoTitleContainer.attr({ text: logoRandom });
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