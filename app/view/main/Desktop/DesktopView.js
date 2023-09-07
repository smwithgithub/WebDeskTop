
Ext.define('SMDESKTOP.view.main.Desktop.DesktopView', {
    extend: 'Ext.panel.Panel',
    xtype: 'desktopview',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SMDESKTOP.view.main.MainModel',
        'SMDESKTOP.view.main.Desktop.DesktopController',
        'SMDESKTOP.view.main.AdminPanel.AdminPanel'
    ],

    controller: 'desktop',
    viewModel: 'main',

    ui: 'navigation',
    layout:'column',

    bodyStyle:{
        'background-image':'url(resources/images/background2.jpg)',
        'backgroundSize': '100% 100%',
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'cover',
            
        },

// ===================================================items of main panel==================================================================
    items:[
        // ==============Student Button============================
        {
            xtype:'panel',
            cls:'student',
            id:'student',
            draggable: true,
            // x: -320, 
            // y: 340,
            margin:'10 0 0 10',
            title:'STUDENT',
            headerPosition:'bottom',
            height:115,
            width:80,
            bodyStyle:{
                'background-color':'transparent',
                    
                },
            items: [
                {
                    xtype: 'image',
                    height: 80,
                    width: 80,
                    margin: '0 0 0 0',
                    alt: 'student',
                    src: Ext.theme.name === "Aria" ? 'resources/images/student.png' : 'resources/images/student.png',
                    align:'center',
                    pack:'middle',
                }
            ],
            // ===========opening student window======================

            listeners: {
                render: function (panel) {
                        panel.getEl().on('click', function () {
                        // Open the window
                            var myWindow = Ext.create('Ext.window.Window', {
                            title: 'STUDENT MODULE',
                            width: 700,
                            height: 500,
                            scrollable: true,
                            bodyPadding: 10,
                            maximizable: true, 
                            minimizable: true, 
                            closable: true,
                            layout:'column',
                            items: [
                                {
                                    xtype:'studentlist',
                                    columnWidth: 1,
                                }
                            ],
                            listeners: {
                                minimize: function(window) {
                                    window.hide();
                                },
                                close: function(window) {
                                    var newStudentbtn = Ext.getCmp('newStudentbtn');
                                    var myToolbar = Ext.getCmp('newBtnForm');
                                        myToolbar.remove(newStudentbtn);
                                }
                            }
                        });
                        var myToolbar = Ext.getCmp('newBtnForm');
                                    // When the window is minimized, add a button or text to your toolbar
                                    minimizeButton=myToolbar.add({
                                        xtype: 'button',
                                        margin:'0 0 0 10',
                                        cls:'newStudentbtn',
                                        id:'newStudentbtn',
                                        text: 'STUDENT',
                                        style:{
                                            backgroundColor:'transparent'
                                        },
                                        handler: function() {
                                            myWindow.show();
                                            // myToolbar.remove(minimizeButton);
                                        }
                                    });
                        
                        myWindow.show();
                    });
                }
            }

            
        },

        // ==============Teacher Button============================
        {
            xtype:'panel',
            cls:'teacher',
            id:'teacher',
            draggable: true,
            x: -90,
            y: 120,
            margin:'10 0 0 10',
            title:'TEACHER',
            headerPosition:'bottom',
            height:115,
            width:80,
            bodyStyle:{
                'background-color':'transparent',
                    
                },
            items: [
                {
                    xtype: 'image',
                    height: 80,
                    width: 80,
                    margin: '0 0 0 0',
                    alt: 'teacher',
                    src: 'resources/images/teacher.png',
                    align:'center',
                    pack:'middle',
                }
            ],
            listeners: {
                render: function (panel) {
                        panel.getEl().on('click', function () {
                        // Open the window
                            var myWindow = Ext.create('Ext.window.Window', {
                            title: 'TEACHERS MODULE',
                            width: 700,
                            height: 500,
                            scrollable: true,
                            bodyPadding: 10,
                            maximizable: true, 
                            minimizable: true, 
                            closable: true,
                            layout:'column',
                            items: [
                                {
                                    xtype:'teacherlist',
                                    columnWidth: 1,
                                    
                                }
                            ],
                            listeners: {
                                minimize: function(window) {
                                    window.hide();
                                },
                                close: function(window) {
                                    var newTeacherbtn = Ext.getCmp('newTeacherbtn');
                                    var myToolbar = Ext.getCmp('newBtnForm');
                                        myToolbar.remove(newTeacherbtn);
                                }
                            }
                        });
                        var myToolbar = Ext.getCmp('newBtnForm');
                                    // When the window is minimized, add a button or text to your toolbar
                                    minimizeButton=myToolbar.add({
                                        xtype: 'button',
                                        margin:'0 0 0 10',
                                        cls:'newTeacherbtn',
                                        id:'newTeacherbtn',
                                        text: 'TEACHER',
                                        style:{
                                            backgroundColor:'transparent'
                                        },
                                        handler: function() {
                                            myWindow.show();
                                        }
                                    });
                        
                        myWindow.show();
                    });
                }
            }
            
            
        },

        // ==============Admin Button============================
        {
            xtype:'panel',
            cls:'admin',
            id:'admin',
            draggable: true,
            x: -180,
            y: 235,
            margin:'10 0 0 10',
            title:'ADMIN',
            headerPosition:'bottom',
            height:115,
            width:80,
            bodyStyle:{
                'background-color':'transparent',
                    
                },
            items: [
                {
                    xtype: 'image',
                    height: 80,
                    width: 80,
                    margin: '0 0 0 0',
                    alt: 'admin',
                    src: 'resources/images/admin.png',
                    align:'center',
                    pack:'middle',
                }
            ],
            listeners: {
                render: function (panel) {
                        panel.getEl().on('click', function () {
                        // Open the window
                            var myWindow = Ext.create('Ext.window.Window', {
                            title: 'ADMIN MODULE',
                            width: 700,
                            height: 500,
                            scrollable: true,
                            bodyPadding: 10,
                            maximizable: true, 
                            minimizable: true, 
                            closable: true,
                            layout:'column',
                            items: [
                                {
                                    xtype:'adminpanel',
                                    columnWidth: 1,
                                }
                            ],
                            listeners: {
                                minimize: function(window) {
                                    window.hide();
                                },
                                close: function(window) {
                                    var newAdminbtn = Ext.getCmp('newAdminbtn');
                                    var myToolbar = Ext.getCmp('newBtnForm');
                                        myToolbar.remove(newAdminbtn);
                                }
                            }
                        });
                        var myToolbar = Ext.getCmp('newBtnForm');
                                    // When the window is minimized, add a button or text to your toolbar
                                    minimizeButton=myToolbar.add({
                                        xtype: 'button',
                                        margin:'0 0 0 10',
                                        cls:'newAdminbtn',
                                        id:'newAdminbtn',
                                        text: 'ADMIN',
                                        style:{
                                            backgroundColor:'transparent'
                                        },
                                        handler: function() {
                                            myWindow.show();
                                        }
                                    });
                        
                        myWindow.show();
                    });
                }
            }
            
        }
        // =========button elements end of main window

        
    ], // ======end items of main window

    // =========bottom bar of main window
    bbar: {

        cls:'bbardesign',
        id:'bbarid',

        items:[

            // ===========windows button of bbar===================
            {
                xtype: 'button',
                cls:'windowsbtn',
                icon:'resources/images/windows.png',
                style:{
                    backgroundColor:'transparent'
                },
                listeners: {
                    click: function (button) {
                        button.el.setStyle('background-color', '#070058 ');

                        var popupWindow = Ext.create('Ext.window.Window', {
                            id:'popupwindows',
                            width: 250,
                            height: 400,
                            x:0,
                            y:315,
                            layout: 'vbox',
                            draggable: false,
                            resizable: false,
                            bodyStyle:{'background-color': '#191970',
                                    // 'opacity':'70%'
                                },
                            style:{'background-color': '#191970',
                                // 'opacity':'80%'
                            },
                            items: [
                                {
                                xtype: 'button',
                                text: 'Log-Out',
                                icon: 'resources/images/logout.png',
                                margin:'320 0 0 0',
                                style:{'background-color': 'transparent',
                                        'border-color': 'transparent',
                                },
                                // handler: function(){
                                        
                                //         // Close the window
                                //         window.close();
        
                                //         // Find the parent desktop view and destroy it
                                //         var desktopView = window.up('desktopview');
                                //         desktopView.destroy();
        
                                //         // Redirect to the login page
                                //         Ext.create('Ext.container.Viewport',{
                                //             layout:'fit',
                                //             items:[
                                //                 {
                                //                     xtype:'login'
                                //                 }
                                //             ],
                                //         });
                                // },
                                
                            }]

                    });
                    popupWindow.show();
                }
            }
          
            },
            
            // ===============search bar of bbar===================
            {
                xtype: 'textfield',
                emptyText: 'Search...',
                fieldStyle: 'background-color: #312d6c;',
                width: 200 
            },

            {
                xtype: 'button',
                text: 'Search',
                iconCls: 'x-fa fa-search',
                style:{'background-color': '#312d6c;'},
                margin: '0 0 0 -10', 
                handler: function () {
                    // Add your search logic here
                }
            },

            {
                xtype: 'form',
                id:'newBtnForm',
                width:'800',
                bodyStyle:{'background-color': 'transparent',
        },
                margin: '0 0 0 0', 
                items:[

                ]
            },
            
            // ============notification button of bbar===============
            '->', //to set element at the right of the bar=====
            {
                xtype: 'button',
                iconCls:'fas fa-comment-alt',
                cls:'notification',
                handler:'onNotification',
                listeners: {
                    click: function (button) {
                        button.el.setStyle('background-color', '#070058');
                    }
                }
            },
            
            
        ]

    } //===============bbar code==========================================
        
    
    
});
