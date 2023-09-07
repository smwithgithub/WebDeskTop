Ext.define('SMDESKTOP.view.main.EducationGrid.StudentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentlist',

    requires: [
        'SMDESKTOP.store.EducationInfo.Student'
    ],

    title: 'All Student List',
    id:'studentlist',

    store: {
        type: 'student'
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
