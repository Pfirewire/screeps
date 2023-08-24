const isFull = creep => creep.store.getFreeCapacity() === 0;
const upgrade = (creep, target) => {
    if (creep.upgradeController(target) === ERR_NOT_IN_RANGE) creep.moveTo(target);
};
const harvest = (creep, target) => {
    if (creep.harvest(target) === ERR_NOT_IN_RANGE) creep.moveTo(target);
};

module.exports = {
    run(creep) {
        const sources = creep.room.find(FIND_SOURCES);
        const closestSource = sources[0];
        isFull(creep) ? upgrade(creep, creep.room.controller) : harvest(creep, closestSource)
        if(isFull(creep)) {
            upgrade(creep, creep.room.controller)
        } else {
            harvest(creep, sources[0])
        }
    }
};