import { useState, useEffect, useCallback } from "react";

export default function useMedia(queries, values, defaultValue) {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return values?.[index] || defaultValue;
  }, [defaultValue, mediaQueryLists, values]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => {
      if (Boolean(mql.addEventListener)) {
        mql.addEventListener(`change`, handler);
      } else {
        mql.addListener(handler);
      }
    });

    return () =>
      mediaQueryLists.forEach((mql) => {
        if (Boolean(mql.removeEventListener)) {
          mql.removeEventListener(`change`, handler);
        } else {
          mql.removeListener(handler);
        }
      });
  }, [getValue, mediaQueryLists]);

  return value;
}
