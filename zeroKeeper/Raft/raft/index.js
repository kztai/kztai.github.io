// import './raft.js';
// import './log.follower.js';
// import './log.leader.js';
// import './log.node.js';
// import './selections.js'
// require('./raft');
require('./selections');
require('./log.node');
require('./log.leader');
require('./log.follower');

const Raft = require('./raft');
module.exports = Raft;
