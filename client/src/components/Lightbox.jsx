import { useCallback, useEffect, useRef, useState } from 'react';
import images from '../content/images.generated.json';

// Opens a photo full size in a native <dialog>. Esc or the backdrop closes it;
// the arrow buttons and keys move through the set.
//
//   const lightbox = useLightbox(names);
//   <button onClick={() => lightbox.open(i)}>…</button>
//   {lightbox.dialog}
export function useLightbox(names) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  const open = useCallback((i) => {
    setIndex(i);
    ref.current?.showModal();
  }, []);
  const step = useCallback((d) => setIndex((i) => (i + d + names.length) % names.length), [names.length]);
  const close = () => ref.current?.close();

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [step]);

  const name = names[index];
  const img = images[name];
  const largest = img ? img.widths[img.widths.length - 1] : null;

  const dialog = (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Photo viewer"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {img && <img src={`/images/${name}-${largest}.webp`} alt={img.alt} width={img.width} height={img.height} />}
      <button type="button" className="lightbox-close" onClick={close} aria-label="Close photo">
        ×
      </button>
      {names.length > 1 && (
        <>
          <button type="button" className="lightbox-prev" onClick={() => step(-1)} aria-label="Previous photo">
            ‹
          </button>
          <button type="button" className="lightbox-next" onClick={() => step(1)} aria-label="Next photo">
            ›
          </button>
        </>
      )}
    </dialog>
  );

  return { open, dialog };
}
