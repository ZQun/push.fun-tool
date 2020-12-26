import { ILifeCycle, IMidwayApplication, IMidwayContainer } from '@midwayjs/core';
import { Config, Configuration, ALL, Inject, App } from '@midwayjs/decorator';
import { join } from 'path';

@Configuration({
    namespace: 'TOOL',
    importConfigs: [
        join(__dirname, 'config')
    ],
    imports: []
})
export class TOOLConfiguration implements ILifeCycle {

    @App()
    app: IMidwayApplication

    @Config(ALL)
    config: any

    @Inject()
    appDir: any
    
    async onReady(content: IMidwayContainer) {

    }
}