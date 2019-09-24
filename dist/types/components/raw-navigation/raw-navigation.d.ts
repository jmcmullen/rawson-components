import { EventEmitter } from '../../stencil.core';
export declare class Navigation {
    /**
     * Steps in navigation
     * @type {Array<MenuItem>}
     */
    steps: Array<MenuItem>;
    /**
     * Navigation links
     * @type {Array<MenuItem>}
     */
    links: Array<MenuItem>;
    /**
     * Currently selected step in navigation
     */
    selectedStep: string;
    /**
     * Event fires when selected step changes
     */
    onSelectedStep: EventEmitter;
    /**
     * Set selected step of navigation
     * @param {MenuItem} - step
     */
    setSelectedStep: (step: MenuItem) => void;
    /**
     * Render steps of navigation
     */
    renderSteps: () => any[];
    /**
     * Render links of navigation
     */
    renderLinks: () => any[];
    /**
     * Render navigation
     */
    render: () => any;
}
