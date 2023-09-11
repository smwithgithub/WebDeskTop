Ext.define('SMDESKTOP.view.main.EducationGrid.ResentStudentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'resentstudentlist',

    requires: [
        'SMDESKTOP.store.EducationInfo.ResentStudent'
    ],

    title: 'Recently Added Students',
    id:'resentstudentlist',

    store: {
        type: 'resentstudent'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name',flex: 1 },
        { text: 'Roll',  dataIndex: 'roll',flex: 1 },
        { text: 'Registration',  dataIndex: 'registration',flex: 1 },
        { text: 'Depertment',  dataIndex: 'depertment',flex: 1 },
        
        // 'name', 'roll','registration', 'depertment','address', 'gender', 'email', 'phone' (All Feilds of the student info)
    ],

    listeners: {
            itemdblclick: function(view,record) {
                var existingDetailsWindow= Ext.getCmp('detailesWindow');
                if(!existingDetailsWindow){
                    var studentDetailsWindow = Ext.create('Ext.window.Window', {
                        title: 'Personal Details',
                        width: 600,
                        height: 400,
                        id:'detailesWindow',
                        scrollable: true,
                        bodyPadding: 10,
                        maximizable: true, 
                        closable: true,
                        alwaysOnTop: true,
                        layout:{
                            type:'vbox',
                            align:'center',
                            pack:'middle'
                        },
                        items:[
                            {
                                xtype: 'panel',
                                html: '<ul style="list-style-type: disc; color: black; font-weight: 600; font-size: 18px;">' +

                                '<li style="margin-bottom: 25px; color: #140e5f; font-weight: bold; font-size: 25px;">'+ 'Personal Details of '+ record.get('name') +'</li>' +

                                '<li style="margin-bottom: 15px;">'+ 'Roll : ' + record.get('roll') +'</li>' +

                                '<li style="margin-bottom: 15px;">'+ 'Registration : ' + record.get('registration') +'</li>' +

                                '<li style="margin-bottom: 15px;">' +'Department : ' + record.get('depertment')+'</li>' +

                                '<li style="margin-bottom: 15px;">'+ 'Address : ' + record.get('address') +'</li>' +

                                '<li style="margin-bottom: 15px;">'+ 'Gender : ' + record.get('gender') +'</li>' +

                                '<li style="margin-bottom: 15px;">' +'Email : '+ record.get('email')+'</li>' +
                                
                                '<li style="margin-bottom: 15px;">' +'Phone : ' + record.get('phone') + '</li>' +
                                '</ul>',
                                padding: 10
                            }
                        ],
                        listeners: {
                            // leave the toolbar height and maximize the window
                            maximize: function(window) {
                                var desktopView = Ext.getCmp('desktopView');
                                var bbarHeight = desktopView.query('toolbar[dock="bottom"]')[0].getHeight();
                                var windowHeight = window.getHeight();
                                window.setHeight(windowHeight-bbarHeight);
                                
                            },
                        }
                    });
                    studentDetailsWindow.show();
                }else{
                    existingDetailsWindow.close();
                }
            }
        }

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
