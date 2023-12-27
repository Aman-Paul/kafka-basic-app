const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log('Admin connecting...');
    admin.connect();
    console.log('Admin connected Successfully...');
    
    console.log('Creating Topics [rider-updates]');
    
    await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2,
        }]
    });

    console.log('Topics [rider-updates] Created successfully...');

    console.log("Disconnecting Admin...");
    await admin.disconnect();
}

init();
