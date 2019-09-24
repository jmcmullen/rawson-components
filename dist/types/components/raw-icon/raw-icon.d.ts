export declare class RawIcon {
    icon: string | Icon;
    foundIcon: Icon;
    /**
     * Find our icon if a string is provided on load.
     */
    componentWillLoad(): void;
    render(): any;
}
