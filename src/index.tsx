import * as React from 'react';

export type Config = {
  skip?: boolean
  onClickOutside: (evt: MouseEvent) => any
}

export default function useClickOutside(
  ref: HTMLElement | null,
  { skip = false, onClickOutside }: Config,
  deps: any[] = []
) {
  React.useEffect(() => {
    if (!skip) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
    function handleClickOutside(evt: MouseEvent) {
      if (ref && !ref.contains(evt.target as Node)) {
        evt.preventDefault();
        evt.stopPropagation();
        onClickOutside(evt);
      }
    }
  }, [...deps, onClickOutside, skip]);
}