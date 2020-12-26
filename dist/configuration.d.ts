import { ILifeCycle, IMidwayApplication, IMidwayContainer } from '@midwayjs/core';
export declare class TOOLConfiguration implements ILifeCycle {
    app: IMidwayApplication;
    config: any;
    appDir: any;
    onReady(content: IMidwayContainer): Promise<void>;
}
