import { useCallback, useEffect, useRef, useState, type SyntheticEvent } from "react";
import { setupVideo, playVideo, pauseVideo, stopVideo } from "./utils/yt";
import { PlayArrow, Pause, Stop } from '@mui/icons-material';
import "./style.scss";

const PLAYBACK_PADDING = 20;    //20px padding as shown in style.scss

export function AudioPlayer({ videoId }: { videoId: string }) {
    const [currentState, setCurrentState] = useState<string>("stop");
    const [player, setPlayer] = useState<any>(null);
    const [currentPlaybackState, setCurrentPlaybackState] = useState<any>({});
    const [playbackStateInterval, setPlaybackStateInterval] = useState<any>(null);
    const [offsetPercVal, setOffsetPercVal] = useState(0);

    const playbackRef = useRef(document.createElement('div'));

    useEffect(() => {
        if (!videoId) return;
        setupVideo(videoId).then(pl => {
            setPlayer(pl);
        });
    }, [videoId]);

    useEffect(() => {
        if (!playbackRef?.current) return;
        const { current } = playbackRef;
        const { size } = current.computedStyleMap();
        const off = (100 / size) * PLAYBACK_PADDING;
        setOffsetPercVal(off);
    }, [playbackRef]);

    useEffect(() => {
        if (!player || !currentState) return;
        if (currentState === 'start' && !playbackStateInterval) {
            setPlaybackStateInterval(setInterval(() => {
                const time = ((player.getCurrentTime() / player.getDuration()) * 100) - offsetPercVal;
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
        currentState,
        offsetPercVal
    ]);

    const manualBrowse: any = useCallback((ev: SyntheticEvent) => {
        if (!player) return;

        const { nativeEvent } = ev;
        const { offsetX, target }: any = nativeEvent as MouseEvent;
        const { size } = target.computedStyleMap();

        const off01 = offsetPercVal / 100;
        const newPos = (offsetX + off01) / size;
        const newPosDur = newPos * player.getDuration();
        const time = (newPos * 100);
        player.seekTo(newPosDur);
        setCurrentPlaybackState({ time });
    }, [
        player,
        offsetPercVal
    ]);

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
            <div className="status-container"
                ref={playbackRef}
                onClick={manualBrowse}
            >
                <div className="base"></div>
                <div className="status" style={{ width: (currentPlaybackState.time || 0) + "%" }}></div>
            </div>
        </div>
    );
}