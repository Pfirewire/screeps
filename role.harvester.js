const creepUtils = require('creepUtils');
const structureUtils = require('structureUtils');

module.exports = {
    run(creep) {
        const sources = creep.room.find(FIND_SOURCES);
        const closestSource = sources[0];
        const targets = creep.room.find(FIND_STRUCTURES, {
            filter: structure => {
                console.log(structureUtils.isFull(structure, RESOURCE_ENERGY))
                return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) && !structureUtils.isFull(structure, RESOURCE_ENERGY)
            }
        });
        const closestTarget = targets[0];
        console.log(closestTarget);
        if(creepUtils.isFull(creep)) if(targets.length) creepUtils.transfer(creep, closestTarget)
        else creepUtils.harvest(creep, closestSource)
    }
};