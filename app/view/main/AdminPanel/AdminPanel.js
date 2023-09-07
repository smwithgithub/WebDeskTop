Ext.define('SMDESKTOP.view.main.AdminPanel.AdminPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminpanel',

    layout:'column',
    bodyPadding: 10,

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

    ],

    viewModel: 'main',

    ui: 'navigation',

    items:[
        {
            // =======students count card=====================================
            xtype:'form',
            height:150,
            // width:400,
            columnWidth: 0.2,
            margin:'0 0 0 20',
            layout:'hbox',
            // bodyStyle:{'background-color': '#280138',
            //             // 'opacity':'80%'
            // },
            style: {
                borderColor:'#87cefa',
                borderStyle:'solid',
                borderWidth:'2px',
                borderRadius:'10px',
                // opacity:'80%',
                position:'cover'
                
            },
            
            items:[
                {
                    xtype:'image',
                    alt: 'student Count',
                    src: 'resources/images/eightyparsent.png',
                    margin:'15 0 0 0',
                    height:120,
                },
                {
                    xtype: 'component',
                    html: '<p style="color: black; font-size: 18px; font-weight: bold;">Total Number of<br>Students <a style="color: black; font-size: 15px; font-weight: 500;">15k</a> </p>',
                    margin:'40 0 0 10'
                    
                }
            ]
        },

        {
            // =======teachers count card=====================================
            xtype:'form',
            height:150,
            // width:400,
            columnWidth: 0.2,
            margin:'0 0 0 20',
            layout:'hbox',
            // bodyStyle:{'background-color': '#280138',
            //             // 'opacity':'80%'
            // },
            style: {
                borderColor:'#87cefa',
                borderStyle:'solid',
                borderWidth:'2px',
                borderRadius:'10px',
                // opacity:'80%',
                position:'cover'
                
            },

            items:[
                {
                    xtype:'image',
                    alt: 'student Count',
                    src: 'resources/images/hundredparsent.png',
                    margin:'15 0 0 0',
                    height:120,
                },
                {
                    xtype: 'component',
                    html: '<p style="color: black; font-size: 18px; font-weight: bold;">Total Number of<br>Teachers <a style="color: black; font-size: 15px; font-weight: 500;">25 teachers</a> </p>',
                    margin:'40 0 0 10'
                    
                }
            ]
        },

        {
            // =======complaints count card=====================================
            xtype:'form',
            height:150,
            // width:400,
            columnWidth: 0.2,
            margin:'0 0 0 20',
            layout:'hbox',
            // bodyStyle:{'background-color': '#280138',
            //             // 'opacity':'80%'
            // },
            style: {
                borderColor:'#87cefa',
                borderStyle:'solid',
                borderWidth:'2px',
                borderRadius:'10px',
                // opacity:'80%',
                position:'cover'
                
            },

            items:[
                {
                    xtype:'image',
                    alt: 'student Count',
                    src: 'resources/images/fivthtyparsent.png',
                    margin:'15 0 0 0',
                    height:120,
                },
                {
                    xtype: 'component',
                    html: '<p style="color: black; font-size: 18px; font-weight: bold;">Total Number of<br>Complaints<a style="color: black; font-size: 15px; font-weight: 500;"> 150</a> </p>',
                    margin:'40 0 0 10'
                    
                }
            ]
        },
        // ====null card to match column=============
        {
            xtype:'form',
            height:150,
            // width:400,
            columnWidth: 0.4,
        },

        {
            xtype:'resentstudentlist',
            columnWidth: 1,
            margin:'30 0 0 0'
        }

    ]
    
});
