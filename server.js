'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:10780
});

// Add the route
server.route({
    method:'GET',
    path:'/salute',
    handler:function(request,h) {
        let msg="Hello welcome to TIPS splint zero."
        return h.response(msg);
    }
});

server.route({
    method:'GET',
    path:'/salute/{name}',
    handler:function(request,h) {
        let msg="Hello "+request.params.name+",welcome to TIPS splint zero."
        return h.response(msg);
    }
});


// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();