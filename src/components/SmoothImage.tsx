'use client';
import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './SmoothImage.module.css';

type SmoothImageProps = ImageProps & {
  wrapperClassName?: string;
};

export default function SmoothImage({ wrapperClassName, className, onLoad, ...props }: SmoothImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${styles.wrapper} ${wrapperClassName ?? ''}`}>
      <Image
        {...props}
        className={`${styles.image} ${loaded ? styles.loaded : ''} ${className ?? ''}`}
        onLoad={(e) => {
          setLoaded(true);
          if (onLoad) {
            (onLoad as (e: React.SyntheticEvent<HTMLImageElement>) => void)(e);
          }
        }}
      />
    </div>
  );
}
