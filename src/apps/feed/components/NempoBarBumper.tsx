import { useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nempoLogo from '@/assets/nempo-bumper-logo-white.png';
import './NempoBarBumper.css';

/** One CSS loop: dark room, sweeping spotlights, bass-hit logo slam, brand line. */
export const NBB_LOOP_SECONDS = 8;
const NBB_BARS = 28;

/**
 * Reusable NEMPO event bumper: a DJ-bar style opening — a dark room with sweeping spotlights and a
 * pulsing level meter, a flash and logo slam on the first beat, then the brand line and handle.
 * No dates, event names or performer copy, so the same clip can be played at every event.
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
        <span className="nbb-bg" aria-hidden="true" />
        <span className="nbb-haze" aria-hidden="true" />
        <span className="nbb-floor" aria-hidden="true" />
        <span className="nbb-beam nbb-beam--l" aria-hidden="true" />
        <span className="nbb-beam nbb-beam--r" aria-hidden="true" />
        <span className="nbb-beam nbb-beam--cl" aria-hidden="true" />
        <span className="nbb-beam nbb-beam--cr" aria-hidden="true" />
        <span className="nbb-glow" aria-hidden="true" />
        <span className="nbb-ring" aria-hidden="true" />
        <img className="nbb-logo" src={nempoLogo} alt="NEMPO" draggable={false} />
        <p className="nbb-tagline">SOUND · VISUAL · EVENT</p>
        <p className="nbb-handle"><b>@nempo.id</b><span>·</span>GARUT</p>
        <span className="nbb-eq" aria-hidden="true">
          {Array.from({ length: NBB_BARS }, (_, i) => (
            <i key={i} style={{ animationDelay: `-${(i % 7) * 0.09}s`, animationDuration: `${0.42 + (i % 5) * 0.07}s` }} />
          ))}
        </span>
        <span className="nbb-flash" aria-hidden="true" />
        <span className="nbb-out" aria-hidden="true" />
      </div>
    </section>
  );
}
