import { useState, useRef, useEffect, ReactNode } from "react";

interface VirtualScrollProps<T> {
  itemHeight: number;
  items: T[];
  viewportHeight: number;
  lookAheadCount?: number;
  renderItem: (item: T, index: number) => ReactNode;
}

export const VirtualScroll = <T,>({
  itemHeight,
  items,
  viewportHeight,
  lookAheadCount = 20,
  renderItem,
}: VirtualScrollProps<T>) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const totalHeight: number = items.length * itemHeight;
  const itemsInView: number = Math.ceil(viewportHeight / itemHeight);
  const startIndex: number = Math.max(
    Math.floor(scrollTop / itemHeight) - lookAheadCount,
    0
  );
  const endIndex: number = Math.min(
    startIndex + itemsInView + lookAheadCount * 2,
    items.length - 1
  );
  const visibleItems: T[] = items.slice(startIndex, endIndex);

  const handleScroll = () => {
    if (viewportRef.current) {
      setScrollTop(viewportRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.addEventListener("scroll", handleScroll);

      return () => {
        viewport.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      ref={viewportRef}
      style={{
        height: viewportHeight,
        overflowY: "auto",
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: 10,
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <div style={{ position: "absolute", top: startIndex * itemHeight }}>
          {visibleItems.map((item, index) => (
            <div
              key={startIndex + index}
              style={{
                height: itemHeight,
              }}
            >
              {renderItem(item, startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
