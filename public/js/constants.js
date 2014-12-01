var keyMirror = require('keymirror');

module.exports = {

    ActionTypes: keyMirror({
        CREATE_FEATURE: null,
        RECEIVE_RAW_CREATED_FEATURE: null,
        RECEIVE_RAW_FEATURES: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};