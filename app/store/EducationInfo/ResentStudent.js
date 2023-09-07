Ext.define('SMDESKTOP.store.EducationInfo.ResentStudent', {
    extend: 'Ext.data.Store',

    alias: 'store.resentstudent',

    model: 'SMDESKTOP.model.EducationModel.ResentStudentModel',

    data: { items: [
        { name: 'Neo Was',   roll:'105660', depertment:'Chemical',  email: "mr.neowas@enterprise.com",        phone: "555-444-4444" },
        { name: 'Abu Nasim',  roll:'105660', depertment:'CSE',   email: "abu.nasim@enterprise.com",  phone: "555-222-2222" },
        { name: 'Akib',   roll:'105660', depertment:'Chemical',  email: "mr.akib@enterprise.com",        phone: "555-444-4444" },
        
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
