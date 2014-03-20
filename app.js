/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'demo',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
	
	requires: [
        'Ext.tab.Panel',
        'Ext.form.*',
        'Ext.field.*',
        'Ext.data.*'
    ],
    launch: function() {
	//nitialize app UI 
        Ext.Viewport.add({
            xtype: 'tabpanel',
            fullscreen: true,
            tabBarPosition: 'bottom',
			
			items: [
                // home page
                {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    scrollable: true,
                    html: [
                        '<img height=260 src="resources/icons/med.jpg" />',
                        '<h1>Discharge Summarization Application</h1>',
                        "<p>Autogenerate your patient's discharge summary from OpenMRS</p>",
                        '<h2>View summary in desktop or mobile</h2>'
                    ].join("")
                },
				
				// Select Summary parameters in this page.
				{
                    xtype: 'formpanel',
                    title: 'Discharge Summary',
                    iconCls: 'user',                   
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Patient\'s information',                            

                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name',
                                    name: 'name'
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Id',
                                    name: 'Id'
                                },
								{
                                    xtype: 'textfield',
                                    label: 'GIS No.',
                                    name: 'GIS'
                                },
								{
                                    xtype: 'textfield',
                                    label: 'Hospital No.',
                                    name: 'Hospital',
                                },
								{
                                    xtype: 'textfield',
                                    label: 'Date',
                                    name: 'date',
									value: getDate()
                                },
								
                                
                            ]
                        },
						
						{
                                    xtype: 'selectfield',
                                    label: 'Option',
									mode: 'MULTI',
                                    name: 'select',
									options: [{
									text: 'Option1',
									value: 0
									}, 
									{
									text: 'Option2',
									value: 1
									}, 
									{
									text: 'Option3',
									value: 14
									}], // options
									
						},	
								
                        {
                            xtype: 'button',
                            text: 'Generate Summary',
                            ui: 'confirm',                           
                            
                        }
                    ]
                }
			]
		});
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

function getDate(){
    var currentTime = new Date();
    var month = addZero(currentTime.getMonth() + 1);
    var day = addZero(currentTime.getDate());
    var year = currentTime.getFullYear();
    return(day + "/" + month + "/" + year);
}
function addZero(num)
{
    (String(num).length < 2) ? num = String("0" + num) :  num = String(num);
    return num;        
}