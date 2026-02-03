import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { setupVideo, playVideo, pauseVideo, stopVideo } from "./utils/yt";
import { PlayArrow, Pause, Stop } from '@mui/icons-material';
import "./style.scss";
export function AudioPlayer({ videoId }) {
    const [currentState, setCurrentState] = useState("stop");
    const [player, setPlayer] = useState(null);
    const [currentPlaybackState, setCurrentPlaybackState] = useState({});
    const [playbackStateInterval, setPlaybackStateInterval] = useState(null);
    useEffect(() => {
        if (!videoId)
            return;
        setupVideo(videoId).then(pl => {
            setPlayer(pl);
        });
    }, [videoId]);
    useEffect(() => {
        if (!player || !currentState)
            return;
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
    const manualBrowse = useCallback((ev) => {
        if (!player)
            return;
        const { nativeEvent } = ev;
        const { offsetX, target } = nativeEvent;
        const { size } = target.computedStyleMap();
        const newPos = offsetX / size;
        const newPosDur = newPos * player.getDuration();
        const time = newPos * 100;
        player.seekTo(newPosDur);
        setCurrentPlaybackState({ time });
    }, [player]);
    const setCtl = useCallback((ctlval) => {
        setCurrentState(ctlval);
        const cmds = {
            start: playVideo,
            pause: pauseVideo,
            stop: stopVideo
        };
        cmds[ctlval]();
    }, [currentState]);
    return (_jsxs("div", { className: "audio-player", children: [_jsxs("div", { className: "controls", children: [_jsx("div", { className: `ctl start ${currentState === 'start' && 'active'}`, onClick: () => setCtl('start'), children: _jsx(PlayArrow, {}) }), _jsx("div", { className: `ctl pause ${currentState === 'pause' && 'active'}`, onClick: () => setCtl('pause'), children: _jsx(Pause, {}) }), _jsx("div", { className: `ctl stop ${currentState === 'stop' && 'active'}`, onClick: () => setCtl('stop'), children: _jsx(Stop, {}) })] }), _jsxs("div", { className: "status-container", onClick: manualBrowse, children: [_jsx("div", { className: "base" }), _jsx("div", { className: "status", style: { width: 'calc(' + (currentPlaybackState.time || 0) + "%" + " - 20px" } })] })] }));
}
