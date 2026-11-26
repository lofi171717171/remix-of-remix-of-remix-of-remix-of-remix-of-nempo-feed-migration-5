import { useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nempoLogo from '@/assets/nempo-bumper-logo-white.png';
import './NempoBarBumper.css';

/** One CSS loop: a retro city-pop billboard cityscape with NEMPO as the hero sign. */
export const NBB_LOOP_SECONDS = 8;

const NBB_TAPE_A = 'ネンポ ★ パーティー ★ イベント ★ サウンド ★ ビジュアル ★ NEMPO ★ ';

/**
 * Reusable NEMPO event bumper: a 1980s city-pop signboard cityscape — cobalt sky, stacked
 * billboards, scrolling marquee tapes and a striped pedestrian railing — with the NEMPO mark on
 * the hero billboard. No dates, event names or performer copy, so the same clip can be played at
 * every event.
 */
export function NempoBarBumper() {
  const [playing, setPlaying] = useState(true);
  const [version, setVersion] = useState(0);
  return (
    <section className="nbb-tool" aria-label="Bumper acara NEMPO">
      <div className="nbb-controls">
        <Button variant="outline" size="icon" title={playing ? 'Jeda' : 'Putar'} aria-label={playing ? 'Jeda bumper' : 'Putar bumper'} onClick={() => setPlaying(!playing)}>
          {playing ? <Pause /> : <Play />}
        </Button>
        <Button variant="outline" size="icon" title="Putar ulang" aria-label="Putar ulang bumper" onClick={() => { setVersion(version + 1); setPlaying(true); }}><RotateCcw /></Button>
      </div>
      <div key={version} className={`nbb-stage${playing ? '' : ' is-paused'}`} aria-label={`Bumper NEMPO ${NBB_LOOP_SECONDS} detik`}>
        <span className="nbb-sky" aria-hidden="true" />
        <span className="nbb-cloud nbb-cloud--a" aria-hidden="true" />
        <span className="nbb-cloud nbb-cloud--b" aria-hidden="true" />
        <span className="nbb-cloud nbb-cloud--c" aria-hidden="true" />
        <span className="nbb-tower" aria-hidden="true" />
        <span className="nbb-monolith" aria-hidden="true" />
        <p className="nbb-roofsign" aria-hidden="true">スタート</p>
        <p className="nbb-vsign" aria-hidden="true">イベント</p>
        <span className="nbb-stand" aria-hidden="true" />
        <div className="nbb-hero">
          <span className="nbb-hero-slats" aria-hidden="true" />
          <span className="nbb-badge" aria-hidden="true">NEW</span>
          <img className="nbb-logo" src={nempoLogo} alt="NEMPO" draggable={false} />
          <p className="nbb-kata">ネンポ</p>
        </div>
        <p className="nbb-tagline"><span>EVENT ORGANIZER</span><span>TIM KREATIF</span></p>
        <div className="nbb-marquee nbb-marquee--pink" aria-hidden="true">
          <div className="nbb-ticker"><span>{NBB_TAPE_A}{NBB_TAPE_A}</span><span>{NBB_TAPE_A}{NBB_TAPE_A}</span></div>
        </div>
        <span className="nbb-railing" aria-hidden="true" />
        <p className="nbb-handle"><b>@nempo.id</b><span>·</span>GARUT</p>
        <span className="nbb-glint nbb-glint--1" aria-hidden="true" />
        <span className="nbb-glint nbb-glint--2" aria-hidden="true" />
        <span className="nbb-glint nbb-glint--3" aria-hidden="true" />
        <span className="nbb-flash" aria-hidden="true" />
        <span className="nbb-out" aria-hidden="true" />
      </div>
    </section>
  );
}
