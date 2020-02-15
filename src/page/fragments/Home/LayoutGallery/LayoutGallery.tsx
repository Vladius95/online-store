import "./LayoutGallery.scss";

import * as React from "react";
import cn from "classnames";
import { Arrow } from "src/page/components/Arrow/Arrow";
import { useStopwatch } from "src/hooks/useStopwatch";
import { useEventListener } from "src/hooks/useEventListener";
import { SlideIndicator } from "../SlideIndicator/SlideIndicator";

export interface LayoutGalleryProps {
  width: number;
  height: number;
  imgs: string[];
}

export function LayoutGallery({ width, height, imgs, children }: React.PropsWithChildren<LayoutGalleryProps>) {
  const [index, setIndex] = React.useState(0);
  const [animationEnabled, setAnimationEnabled] = React.useState(true);

  const galleryElement = React.useRef<HTMLUListElement>();

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

  const onPrev = React.useCallback(() => {
    setIndex(prevIndex => prevIndex - 1);
  }, [setIndex]);

  const onNext = React.useCallback(() => {
    setIndex(prevIndex => prevIndex + 1);
  }, [setIndex]);

  const setIndexWithoutAnimation = React.useCallback((index: number) => {
    setAnimationEnabled(false);
    setIndex(index);

    window.setTimeout(() => setAnimationEnabled(true), 0);
  }, []);

  const onTransitionEnd = React.useCallback(() => {
    console.log(index);
    if (index === imgs.length) {
      setIndexWithoutAnimation(0);
    } else if (index === -1) {
      setIndexWithoutAnimation(imgs.length - 1);
    }
  }, [index]);

  useEventListener("transitionend", onTransitionEnd, galleryElement.current);

  return (
    <article className="layout-gallery" style={{ width: width, height: height }}>
      <ul
        ref={galleryElement}
        className={cn("layout-gallery__image-list", {
          "layout-gallery__image-list--animated": animationEnabled
        })}
        style={{ width: width * imgs.length, transform: `translateX(-${width * (index + 1)}px)` }}
      >
        <li key={-1} className="layout-gallery__item">
          <img className="layout-gallery__image" src={imgs[imgs.length - 1]} style={{ width: width, height: height }} />
        </li>
        {imgs.map((src, i) => (
          <li key={i} className="layout-gallery__item">
            <img className="layout-gallery__image" src={src} style={{ width: width, height: height }} />
          </li>
        ))}
        <li key={imgs.length} className="layout-gallery__item extra-last">
          <img className="layout-gallery__image" src={imgs[0]} style={{ width: width, height: height }} />
        </li>
      </ul>

      <button onClick={onPrev} className="layout-gallery__control layout-gallery__control--prev">
        <Arrow direction="left" size="x32" extraClass="layout-gallery__arrow layout-gallery__arrow--prev" />
      </button>

      <button onClick={onNext} className="layout-gallery__control layout-gallery__control--next">
        <Arrow direction="right" size="x32" extraClass="layout-gallery__arrow layout-gallery__arrow--next" />
      </button>

      <SlideIndicator count={imgs.length} active={index} extraClass="layout-gallery__indicator" />
      {children}
    </article>
  );
}
