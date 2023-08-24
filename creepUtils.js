const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');


module.exports = {
    run(creeps) {
        for(const name in creeps) {
            const creep = Game.creeps[name];
            switch(creep.memory.role) {
                case 'harvester':
                    roleHarvester.run(creep);
                    break;
                case 'upgrader':
                    roleUpgrader.run(creep);
            }
        }
    }
};