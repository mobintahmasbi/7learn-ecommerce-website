import { createClient } from "redis";

const client = createClient();

client.on('error', err => console.log(err.message))

const connectToRedis = async () => {
    await client.connect()
    console.log('connect to redis successfully')
    
}

export {
    connectToRedis,
    client
};
