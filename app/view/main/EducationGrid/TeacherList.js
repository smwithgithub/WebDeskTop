Ext.define('SMDESKTOP.view.main.EducationGrid.TeacherList', {
    extend: 'Ext.grid.Panel',
    xtype: 'teacherlist',

    requires: [
        'SMDESKTOP.store.EducationInfo.Teacher',
    ],

    title: 'All Teachers List',
    id:'teacherlist',

    store: {
        type: 'teacher'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name',flex: 1 },
        { text: 'Designation',  dataIndex: 'designation',flex: 1 },
        { text: 'Gender',  dataIndex: 'gender',flex: 1 },
        { text: 'Qualification', dataIndex: 'qualification', flex: 1 },
        
        // 'name', 'designation', 'gender', 'religious', 'qualification','jobstatus', 'address', 'email', 'phone'
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

                            '<li style=" margin-bottom: 25px; color: #140e5f; font-weight: bold; font-size: 25px;">'+ 'Personal Details of '+ record.get('name') +'</li>' +

                            '<li style="margin-bottom: 15px;">'+ 'Designation : ' + record.get('designation') +'</li>' +

                            '<li style="margin-bottom: 15px;">'+ 'Gender : ' + record.get('gender') +'</li>' +

                            '<li style="margin-bottom: 15px;">' +'Religious : ' + record.get('religious')+'</li>' +

                            '<li style="margin-bottom: 15px;">'+ 'Qualification : ' + record.get('qualification') +'</li>' +

                            '<li style="margin-bottom: 15px;">'+ 'address : ' + record.get('address') +'</li>' +

                            '<li style="margin-bottom: 15px;">'+ 'Job-Status : ' + record.get('jobstatus') +'</li>' +

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
        },
        
    }
});
