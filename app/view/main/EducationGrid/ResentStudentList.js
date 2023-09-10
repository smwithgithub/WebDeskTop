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
        { text: 'Depertment',  dataIndex: 'depertment',flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
