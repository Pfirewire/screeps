module.exports = {
    isFull(creep) {
        return creep.store.getFreeCapacity() === 0;
    },
    isEmpty(creep) {
        return creep.store.getFreeCapacity() === creep.store.getCapacity();
    },
    moveTo(creep, target) {
        creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
    },
    harvest(creep, target) {
        if(creep.harvest(target) === ERR_NOT_IN_RANGE) this.moveTo(creep, target);
    },
    build(creep, target) {
        if(creep.build(target) === ERR_NOT_IN_RANGE) this.moveTo(creep, target);
    },
    transfer(creep, target) {
        if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) this.moveTo(creep, target);
    },
    upgrade(creep, target) {
        if (creep.upgradeController(target) === ERR_NOT_IN_RANGE) this.moveTo(creep, target);
    }
};