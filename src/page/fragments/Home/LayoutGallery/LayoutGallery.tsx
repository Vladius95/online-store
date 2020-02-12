import "./LayoutGallery.scss";

import * as React from "react";
import { Arrow } from "src/page/components/Arrow/Arrow";
import { useStopwatch } from "src/hooks/useStopwatch";

export interface LayoutGalleryProps {
  width: number;
  height: number;
  imgs: string[];
}

export function LayoutGallery({ width, height, imgs }: LayoutGalleryProps) {
  const [index, setIndex] = React.useState(0);

  const { tick, onStart, onPause, onReset, onResume } = useStopwatch({
    time: 2000,
    onEnd: () => {
      setIndex(prevIndex => {
        const next = prevIndex + 1;
        if (next === imgs.length) {
          return 0;
        }

        return next;
      });
    },
    autostart: false,
    repeat: true
  });

  return (
    <article className="layout-gallery" style={{ width: width, height: height }}>
      <ul
        className="layout-gallery__image-list"
        style={{ width: width * imgs.length, transform: `translateX(-${width * (index + 1)}px)` }}
      >
        <li className="layout-gallery__item">
          <img className="layout-gallery__image" src={imgs[imgs.length - 1]} style={{ width: width, height: height }} />
        </li>
        {imgs.map((src, i) => (
          <li className="layout-gallery__item">
            <img className="layout-gallery__image" src={src} style={{ width: width, height: height }} />
          </li>
        ))}
        <li className="layout-gallery__item">
          <img className="layout-gallery__image" src={imgs[0]} style={{ width: width, height: height }} />
        </li>
      </ul>

      <Arrow
        direction="left"
        onClick={() => setIndex(prevIndex => prevIndex - 1)}
        size="x32"
        extraClass="layout-gallery__arrow layout-gallery__arrow--prev"
      />
      <Arrow
        direction="right"
        onClick={() => setIndex(prevIndex => prevIndex + 1)}
        size="x32"
        extraClass="layout-gallery__arrow layout-gallery__arrow--next"
      />
    </article>
  );
}
