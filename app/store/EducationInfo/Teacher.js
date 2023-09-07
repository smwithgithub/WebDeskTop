Ext.define('SMDESKTOP.store.EducationInfo.Teacher', {
    extend: 'Ext.data.Store',

    alias: 'store.teacher',

    model: 'SMDESKTOP.model.EducationModel.TeacherModel',

    data: { items: [
        { name: 'MD.Shourov', designation:'Vice-Chancellor', gender:'Male', religious:'Islam', qualification:'Post Doctorate', jobstatus:'Continue', email: "md.shourov@enterprise.com", phone: "555-111-1111" },
        
        { name: 'MD.Mizanur', designation:'Director', gender:'Male', religious:'Hindu', qualification:'Ph.D.', jobstatus:'Continue', email: "md.mizanur@enterprise.com", phone: "555-111-1111" },

        { name: 'MD.Zulfikar', designation:'Principal', gender:'Male', religious:'Islam', qualification:'M. Phil.', jobstatus:'Promoted', email: "md.zulfikar@enterprise.com", phone: "555-111-1111" },

        { name: 'MIS.Noyona', designation:'Associate Professor', gender:'Female', religious:'Christians', qualification:'Post Graduate', jobstatus:'Continue', email: "mis.noyona@enterprise.com", phone: "555-111-1111" },

        { name: 'MIS.Tithi', designation:'Lecturer (Selection Grade)', gender:'Female', religious:'Islam', qualification:'Under Graduate', jobstatus:'Continue', email: "mis.tithi@enterprise.com", phone: "555-111-1111" },

        { name: 'MD.Rezuan', designation:'Tutor', gender:'Male', religious:'Jains', qualification:'Under Graduate', jobstatus:'New Appointment', email: "md.rezuan@enterprise.com", phone: "555-111-1111" },


    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
