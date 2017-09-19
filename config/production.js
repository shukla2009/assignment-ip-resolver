'use strict';
module.exports = {
    log: {
        level: process.env.LOG_LEVEL || 'info'
    },
    port : process.env.PORT || 8080
};