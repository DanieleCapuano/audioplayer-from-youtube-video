declare global {
    interface Window {
        YT: any;
    }
}
export declare function setupVideo(vid: any): Promise<unknown>;
export declare function playVideo(): Promise<void>;
export declare function pauseVideo(): Promise<void>;
export declare function stopVideo(): Promise<void>;
