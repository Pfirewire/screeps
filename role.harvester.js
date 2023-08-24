const isFull = creep => creep.store.getFreeCapacity() === 0;
const transfer = (creep, target) => {
    if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(target);
};
const harvest = (creep, target) => {
    if (creep.harvest(target) === ERR_NOT_IN_RANGE) creep.moveTo(target);
};

module.exports = {
    run(creep) {
        const sources = creep.room.find(FIND_SOURCES);
        const closestSource = sources[0];
        isFull(creep) ? transfer(creep, Game.spawns['Spawn1']) : harvest(creep, closestSource)
        if(isFull(creep)) {
            transfer(creep, Game.spawns['Spawn1'])
        } else {
            harvest(creep, sources[0])
        }
    }
};