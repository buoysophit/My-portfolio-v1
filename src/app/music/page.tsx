"use client";

import { useState, useRef, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  durationSec: number;
  file: string;
  cover: string;
}

const PLAYLIST: Track[] = [
  {
    id: 1,
    title: "Be Around",
    artist: "Blooom",
    album: "NCS Release",
    duration: "2:52", // Estimated, will override dynamically
    durationSec: 172,
    file: "/assets/music/Blooom - Be Around  Electronic  NCS - Copyright Free Music.mp3",
    cover: "/assets/img/Music.jpg",
  },
  {
    id: 2,
    title: "Howling (Andromedik Remix)",
    artist: "Cartoon, Jéja ft. Asena",
    album: "NCS Release",
    duration: "4:32",
    durationSec: 272,
    file: "/assets/music/Cartoon, Jéja - Howling (ft. Asena) (Andromedik Remix)  DnB  NCS - Copyright Free Music.mp3",
    cover: "/assets/img/Music.jpg",
  },
  {
    id: 3,
    title: "I Really Want To Stay At Your House",
    artist: "Cyberpunk Edgerunners",
    album: "80s REMIX",
    duration: "5:34",
    durationSec: 334,
    file: "/assets/music/Cyberpunk_ Edgerunners - I Really Want To Stay At Your House (80s REMIX).mp3",
    cover: "/assets/img/Music.jpg",
  },
  {
    id: 4,
    title: "Heart Afire",
    artist: "Defqwop ft. Strix",
    album: "NCS Release",
    duration: "3:40",
    durationSec: 220,
    file: "/assets/music/Defqwop - Heart Afire (ft. Strix).mp3",
    cover: "/assets/img/Music.jpg",
  },
  {
    id: 5,
    title: "精卫 (Tinh Vệ Remix)",
    artist: "DJ桃之助 / 一颗狼星",
    album: "TikTok Douyin",
    duration: "6:23",
    durationSec: 383,
    file: "/assets/music/精卫DJ (一颗狼星)  Tinh Vệ Remix  - DJ桃之助 Remix  Nhạc Nền Tu Tiên Hot Tiktok - Douyin.mp3",
    cover: "/assets/img/Music.jpg",
  },
];

function formatTime(sec: number) {
  if (isNaN(sec) || sec < 0) return "00:00";
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Track>(PLAYLIST[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [durationSec, setDurationSec] = useState(currentTrack.durationSec);
  const [volume, setVolume] = useState(80);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.error("Playback failed:", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const handleSelect = (track: Track) => {
    setCurrentTrack(track);
    setElapsed(0);
    setProgress(0);
    setDurationSec(track.durationSec); // Reset to estimated until loaded
    setIsPlaying(true);
  };

  const handleNext = () => {
    const idx = PLAYLIST.findIndex((t) => t.id === currentTrack.id);
    let nextTrack;
    if (shuffle) {
      const remainingTracks = PLAYLIST.filter(t => t.id !== currentTrack.id);
      nextTrack = remainingTracks[Math.floor(Math.random() * remainingTracks.length)];
    } else {
      nextTrack = PLAYLIST[(idx + 1) % PLAYLIST.length];
    }
    
    // If we're at the end of playlist and not shuffling/repeating, stop playing
    if (!shuffle && !repeat && idx === PLAYLIST.length - 1) {
      setCurrentTrack(nextTrack);
      setElapsed(0);
      setProgress(0);
      setIsPlaying(false);
      return;
    }
    
    // Otherwise play the next track
    setCurrentTrack(nextTrack);
    setElapsed(0);
    setProgress(0);
    if (!isPlaying) setIsPlaying(true);
  };

  const handlePrev = () => {
    const idx = PLAYLIST.findIndex((t) => t.id === currentTrack.id);
    const prev = PLAYLIST[(idx - 1 + PLAYLIST.length) % PLAYLIST.length];
    setCurrentTrack(prev);
    setElapsed(0);
    setProgress(0);
    if (!isPlaying) setIsPlaying(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || durationSec === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const newTime = ratio * durationSec;
    audioRef.current.currentTime = newTime;
    setElapsed(newTime);
    setProgress(ratio * 100);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      {/* Audio Element setup for Actual Playback */}
      <audio
        ref={audioRef}
        src={currentTrack.file}
        onTimeUpdate={(e) => {
          setElapsed(e.currentTarget.currentTime);
          setProgress((e.currentTarget.currentTime / durationSec) * 100);
        }}
        onEnded={() => {
          if (repeat && !shuffle) {
            if (audioRef.current) {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
            }
          } else {
            handleNext();
          }
        }}
        onLoadedMetadata={(e) => {
          setDurationSec(e.currentTarget.duration);
        }}
      />

      <BlurFade delay={BLUR_FADE_DELAY}>
        {/* Header */}
        <div className="space-y-1 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter">Music Player</h1>
          <p className="text-muted-foreground text-sm">
            MPD-style — what&apos;s on my playlist right now
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        {/* Now Playing Panel */}
        <div
          style={{
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
            background: "hsl(var(--card))",
            padding: "1.25rem 1.5rem",
          }}
        >
          {/* MPD-style status bar */}
          <div
            className="font-mono text-xs mb-4"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            <span
              style={{
                color: isPlaying ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
              }}
            >
              [{isPlaying ? "playing" : "paused"}]
            </span>{" "}
            #{currentTrack.id} &mdash; {currentTrack.artist} &mdash;{" "}
            {currentTrack.title}
          </div>

          {/* Cover art + track info */}
          <div className="flex items-start gap-5">
            {/* Album art */}
            <div
              style={{
                width: 96,
                height: 96,
                flexShrink: 0,
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                background: "hsl(var(--muted))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {currentTrack.cover ? (
                <Image
                  src={currentTrack.cover}
                  alt={currentTrack.album}
                  width={96}
                  height={96}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isPlaying ? "scale-105" : "scale-100"
                  }`}
                />
              ) : (
                <span className="text-2xl">🎵</span>
              )}
              {isPlaying && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 4,
                    right: 4,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "hsl(var(--foreground))",
                    animation: "ping 1.2s cubic-bezier(0,0,0.2,1) infinite",
                  }}
                />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 py-1">
              <p className="font-semibold text-base leading-tight truncate">
                {currentTrack.title}
              </p>
              <p
                className="text-sm truncate mt-1"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {currentTrack.artist}
              </p>
              <p
                className="text-xs truncate mt-0.5"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {currentTrack.album}
              </p>

              {/* Progress bar */}
              <div className="mt-4 space-y-1.5">
                <div
                  className="cursor-pointer group relative"
                  style={{
                    height: 4,
                    borderRadius: 2,
                    background: "hsl(var(--muted))",
                    overflow: "hidden",
                  }}
                  onClick={handleProgressClick}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${progress}%`,
                      background: "hsl(var(--foreground))",
                      borderRadius: 2,
                      transition: isPlaying ? "width 0.1s linear" : "none",
                    }}
                  />
                  {/* Hover effect for seek line */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div
                  className="flex justify-between font-mono text-[10px]"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  <span>{formatTime(elapsed)}</span>
                  <span>{formatTime(durationSec)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-5 flex items-center justify-between">
            {/* Left: shuffle + repeat */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setShuffle((s) => !s)}
                className="font-mono text-xs px-2 py-1 transition-colors"
                style={{
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "calc(var(--radius) - 2px)",
                  background: shuffle ? "hsl(var(--foreground))" : "transparent",
                  color: shuffle ? "hsl(var(--background))" : "hsl(var(--muted-foreground))",
                  cursor: "pointer",
                }}
              >
                shuf
              </button>
              <button
                onClick={() => setRepeat((r) => !r)}
                className="font-mono text-xs px-2 py-1 transition-colors"
                style={{
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "calc(var(--radius) - 2px)",
                  background: repeat ? "hsl(var(--foreground))" : "transparent",
                  color: repeat ? "hsl(var(--background))" : "hsl(var(--muted-foreground))",
                  cursor: "pointer",
                }}
              >
                rep
              </button>
            </div>

            {/* Center: prev/play/next */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="hover:scale-110 active:scale-95 transition-transform"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "hsl(var(--foreground))",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                }}
                aria-label="Previous"
              >
                ⏮
              </button>
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="hover:scale-105 active:scale-95 transition-transform"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--foreground))",
                  color: "hsl(var(--background))",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                onClick={handleNext}
                className="hover:scale-110 active:scale-95 transition-transform"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "hsl(var(--foreground))",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                }}
                aria-label="Next"
              >
                ⏭
              </button>
            </div>

            {/* Right: volume */}
            <div className="flex items-center gap-2">
              <span
                className="font-mono text-xs"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                vol
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                style={{ width: 64, accentColor: "hsl(var(--foreground))" }}
                aria-label="Volume"
              />
              <span
                className="font-mono text-xs w-6 text-right"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {volume}
              </span>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        {/* Playlist — MPD queue style */}
        <div
          style={{
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            className="grid font-mono text-[10px] sm:text-[11px] px-2 sm:px-4 py-2 grid-cols-[1.5rem_1fr_3rem] sm:grid-cols-[2rem_1fr_1fr_4rem] gap-2 sm:gap-4"
            style={{
              borderBottom: "1px solid hsl(var(--border))",
              background: "hsl(var(--muted))",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            <span>#</span>
            <span>title</span>
            <span className="hidden sm:block">artist</span>
            <span className="text-right">time</span>
          </div>

          {/* Tracks */}
          {PLAYLIST.map((track, i) => {
            const isActive = track.id === currentTrack.id;
            return (
              <div
                key={track.id}
                onClick={() => handleSelect(track)}
                className="grid items-center px-2 sm:px-4 py-2.5 cursor-pointer transition-colors grid-cols-[1.5rem_1fr_3rem] sm:grid-cols-[2rem_1fr_1fr_4rem] gap-2 sm:gap-4"
                style={{
                  background: isActive
                    ? "hsl(var(--accent))"
                    : i % 2 === 0
                    ? "hsl(var(--card))"
                    : "hsl(var(--background))",
                  borderBottom:
                    i < PLAYLIST.length - 1
                      ? "1px solid hsl(var(--border))"
                      : "none",
                  color: isActive
                    ? "hsl(var(--accent-foreground))"
                    : "hsl(var(--foreground))",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLDivElement).style.background =
                      "hsl(var(--muted))";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLDivElement).style.background =
                      i % 2 === 0
                        ? "hsl(var(--card))"
                        : "hsl(var(--background))";
                }}
              >
                <span
                  className="font-mono text-[10px] sm:text-xs"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {isActive && isPlaying ? "▶" : track.id}
                </span>
                <span className="text-sm font-medium truncate flex flex-col justify-center">
                  <span className="truncate">{track.title}</span>
                  {/* On mobile, show artist below title */}
                  <span className="block sm:hidden text-[10px] text-muted-foreground truncate font-normal mt-0.5">
                    {track.artist}
                  </span>
                </span>
                <span
                  className="hidden sm:block text-xs truncate"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {track.artist}
                </span>
                <span
                  className="font-mono text-[10px] sm:text-xs text-right"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {isActive ? formatTime(durationSec) : track.duration}
                </span>
              </div>
            );
          })}
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        {/* Footer status — like MPD status line */}
        <div
          className="font-mono text-[11px] flex items-center justify-between pt-1"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <span>
            {PLAYLIST.length} songs &mdash;{" "}
            {PLAYLIST.reduce((a, t) => a + t.durationSec, 0) >= 60
              ? `${Math.floor(
                  PLAYLIST.reduce((a, t) => a + t.durationSec, 0) / 60
                )} min`
              : ""}
          </span>
          <span>
            volume: {volume}% &nbsp;|&nbsp; shuffle:{" "}
            {shuffle ? "on" : "off"} &nbsp;|&nbsp; repeat: {repeat ? "on" : "off"}
          </span>
        </div>
      </BlurFade>
    </main>
  );
}

