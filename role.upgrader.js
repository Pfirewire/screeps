const creepUtils = require('creepUtils');

module.exports = {
    run(creep) {
        const sources = creep.room.find(FIND_SOURCES);
        const closestSource = sources[0];
        creepUtils.isFull(creep) ? creepUtils.upgrade(creep, creep.room.controller) : creepUtils.harvest(creep, closestSource)
    }
};