import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {

    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['solid-lab-13739-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'c29saWQtbGFiLTEzNzM5JAr53K4lG27W0s80dYtKNTXHMMnTXW0ymBgLpnCn270',
                    password: 'X2cpc4ZfxoNwMQU98VKVbECptyu7f96ttPcpRcf8QViauZed7A1jZETPxadybgZftt296w==',
                },
                ssl: true,
            }
        })
    }

    async onModuleDestroy() {
        
        await this.close();

    }    

}