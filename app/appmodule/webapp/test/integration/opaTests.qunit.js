sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'charith/appmodule/test/integration/FirstJourney',
		'charith/appmodule/test/integration/pages/PoSetList',
		'charith/appmodule/test/integration/pages/PoSetObjectPage',
		'charith/appmodule/test/integration/pages/PoItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, PoSetList, PoSetObjectPage, PoItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('charith/appmodule') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePoSetList: PoSetList,
					onThePoSetObjectPage: PoSetObjectPage,
					onThePoItemSetObjectPage: PoItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);