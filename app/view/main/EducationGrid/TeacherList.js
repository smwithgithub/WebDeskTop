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
        { text: 'Religious', dataIndex: 'religious', flex: 1 },
        { text: 'Qualification', dataIndex: 'qualification', flex: 1 },
        { text: 'Job Status', dataIndex: 'jobstatus', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
