import * as React from 'react';

export type Config = {
  skip?: boolean
  onClickOutside: (evt: MouseEvent) => any
}

export function useClickOutside(
  ref: {current: HTMLElement | null},
  { skip = false, onClickOutside }: Config,
  deps: any[] = []
) {
  // @ts-ignore
  React.useEffect(() => {
    if (!skip) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
    function handleClickOutside(evt: MouseEvent) {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        evt.preventDefault();
        evt.stopPropagation();
        onClickOutside(evt);
      }
    }
  }, [...deps, onClickOutside, skip]);
}