import type { RefObject } from 'react';
import feedPoster from '@/assets/nempo-feed-63/nempo-feed-63-bajidoran-dj.png.asset.json';
import storyPoster from '@/assets/nempo-feed-65/nempo-feed-65-bajidoran-story.png.asset.json';
import { nempoBajidoranFest as F } from './nempo-bajidoran-fest';
import './NempoAjakRequestSlide.css';
import './NempoBajidoranFestSlide.css';

/**
 * NEMPO Feed slide 63 (3:4): Bajidoran DJ poster, shown as the owner's finished poster image
 * (feed) or that poster on a blurred 9:16 extension (story, slide 65); the same files are downloaded.
 */
export function NempoBajidoranFestSlide({ exportRef, story = false }: { exportRef?: RefObject<HTMLElement | null>; story?: boolean }) {
  const { date, venue, info } = F;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nbx-root kmt-root${story ? ' nbx-story' : ''}`}
      aria-label={`${F.title} — ${F.activities.join(', ')}. ${date.weekday}, ${date.day} ${date.month} ${date.year}, ${F.schedule.map((s) => `${s.label} ${s.value}`).join(' ')} di ${venue.name}, ${venue.address}. ${info.label} ${info.number}`}
    >
      {/* The owner's finished poster (the original layer photos are locked in an old project). */}
      <img className="nbx-poster" src={story ? storyPoster.url : feedPoster.url} alt="" draggable={false} />
    </section>
  );
}
