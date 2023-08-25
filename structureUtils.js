module.exports = {
    isFull(structure, resource = "") {
        return structure.store.getFreeCapacity(resource) === 0;
    },
    isEmpty(structure) {
        return structure.store.getFreeCapacity() === structure.store.getCapacity();
    }
}