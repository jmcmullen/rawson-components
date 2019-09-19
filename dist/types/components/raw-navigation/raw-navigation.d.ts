import { EventEmitter } from '../../stencil.core';
export declare class Navigation {
    steps: Array<any>;
    links: Array<any>;
    selectedStep: string;
    onSelectedStep: EventEmitter;
    setSelectedStep(step: any): void;
    render(): any;
}
