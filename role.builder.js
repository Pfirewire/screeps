const creepUtils = require('creepUtils');


module.exports = {
    run: function(creep) {
        if(creep.memory.building && creepUtils.isEmpty(creep)) {
            creep.memory.building = false;
            creep.say('harvest');
        }
        if(!creep.memory.building && creepUtils.isFull(creep)) {
            creep.memory.building = true;
            creep.say('build');
        }

        if(creep.memory.building) {
            const buildTargets = creep.room.find(FIND_CONSTRUCTION_SITES);
            const closestBuildTarget = buildTargets[0];
            if(buildTargets.length) creepUtils.build(creep, closestBuildTarget);
        } else {
            const sources = creep.room.find(FIND_SOURCES);
            const closestSource = sources[0];
            creepUtils.harvest(creep, closestSource);
        }
    }
};