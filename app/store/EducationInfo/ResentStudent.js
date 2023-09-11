Ext.define('SMDESKTOP.store.EducationInfo.ResentStudent', {
    extend: 'Ext.data.Store',

    alias: 'store.resentstudent',

    model: 'SMDESKTOP.model.EducationModel.ResentStudentModel',

    data: { items: [
        { name: 'Neo Was',   roll:'105660', registration:'1500000001', depertment:'Chemical', address:'Taout-Gram, Noyakhali', gender:'Male', email: "mr.neowas@enterprise.com",        phone: "555-444-4444" },

        { name: 'Abu Nasim',   roll:'103654', registration:'1500011101', depertment:'CSE', address:'Maal-Gram, Bogura', gender:'Male', email: "abu.nasim@enterprise.com",        phone: "555-444-4444" },

        { name: 'Akib',   roll:'143654', registration:'1502211101', depertment:'EEE', address:'JigaTola, Chadpur', gender:'Male', email: "mr.akib@enterprise.com",        phone: "555-222-4444" },

        { name: 'Nila Rayhan',   roll:'140054', registration:'1503331101', depertment:'Electrical', address:'Pirgacha, Rangpur', gender:'Female', email: "mis.nila@enterprise.com",        phone: "555-505-1111" },
        
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
