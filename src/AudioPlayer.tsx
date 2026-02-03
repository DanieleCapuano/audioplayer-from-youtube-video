import { useCallback, useEffect, useState, type SyntheticEvent } from "react";
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
                const time = (player.getCurrentTime() / player.getDuration()) * 100;
                setCurrentPlaybackState({ time });
            }, 500));
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
    ]);

    const manualBrowse: any = useCallback((ev: SyntheticEvent) => {
        if (!player) return;

        const { nativeEvent } = ev;
        const { offsetX, target }: any = nativeEvent as MouseEvent;
        const { size } = target.computedStyleMap();

        const newPos = offsetX / size;
        const newPosDur = newPos * player.getDuration();
        const time = newPos * 100;
        player.seekTo(newPosDur);
        setCurrentPlaybackState({ time });

    }, [player]);

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
            <div className="status-container" onClick={manualBrowse}>
                <div className="base"></div>
                <div className="status" style={{ width: 'calc(' + (currentPlaybackState.time || 0) + "%" + " - 20px" }}></div>
            </div>
        </div>
    );
}