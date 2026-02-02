import { useCallback, useEffect, useState } from "react";
import { setupVideo, playVideo, pauseVideo, stopVideo } from "./utils/yt";
import { PlayArrow, Pause, Stop } from '@mui/icons-material';
import "./style.scss";

export function AudioPlayer({ videoId }: { videoId: string }) {
    const [currentState, setCurrentState] = useState<string>("stop");
    const [player, setPlayer] = useState<any>(null);
    const [currentPlaybackState, setCurrentPlaybackState] = useState<any>({});
    const [playbackStateInterval, setPlaybackStateInterval] = useState<any>(null);

    useEffect(() => {
        if (!videoId) return;
        setupVideo(videoId).then(pl => {
            setPlayer(pl);
        });
    }, [videoId]);

    useEffect(() => {
        if (!player || !currentState) return;
        if (currentState === 'start' && !playbackStateInterval) {
            setPlaybackStateInterval(setInterval(() => {
                const time = player.getCurrentTime();
                setCurrentPlaybackState({ time });
            }, 1000));
        }
        else {
            clearInterval(playbackStateInterval);
            setPlaybackStateInterval(null);
            if (currentState === 'stop') {
                setCurrentPlaybackState({ time: 0 });
            }
        }
    }, [
        player,
        currentState
    ])

    const setCtl = useCallback((ctlval: string) => {
        setCurrentState(ctlval);
        const cmds: any = {
            start: playVideo,
            pause: pauseVideo,
            stop: stopVideo
        };

        cmds[ctlval]();
    }, [currentState]);


    return (
        <div className="audio-player">
            <div className="controls">
                <div className={`ctl start ${currentState === 'start' && 'active'}`} onClick={() => setCtl('start')}>
                    <PlayArrow></PlayArrow>
                </div>
                <div className={`ctl pause ${currentState === 'pause' && 'active'}`} onClick={() => setCtl('pause')}>
                    <Pause></Pause>
                </div>
                <div className={`ctl stop ${currentState === 'stop' && 'active'}`} onClick={() => setCtl('stop')}>
                    <Stop></Stop>
                </div>
            </div>
            <div className="status-container">
                <div className="base"></div>
                <div className="status" style={{ width: (currentPlaybackState.time || 0) }}></div>
            </div>
        </div>
    );
}