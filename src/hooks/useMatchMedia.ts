// import { useState, useLayoutEffect } from "react";

// const queries = [
//   "(max-width: 766px)",
//   "(min-width: 767px) and (max-width: 1279px)",
//   "(min-width: 1280px)",
// ];
// const useMatchMedia = () => {
//   const mediaQueryLists = queries.map((query) => matchMedia(query));
//   // console.log('mediaQueryLists', mediaQueryLists);
//   const getValues = () => mediaQueryLists.map((mql) => mql.matches);
//   const [values, setValues] = useState(getValues);
//   const handler = () => setValues(getValues);
//   useLayoutEffect(() => {
//     mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

//     return () =>
//       mediaQueryLists.forEach((mql) =>
//         mql.removeEventListener("change", handler)
//       );
//   });

//   return ["isMobile", "isTablet", "isDesktop"].reduce(
//     (acc, screen, index) => ({
//       ...acc,
//       [screen]: values[index],
//     }),
//     {}
//   );
// };

// export default useMatchMedia;
import { useState, useLayoutEffect, useCallback } from "react";

const queries = [
  "(max-width: 766px)",
  "(min-width: 767px) and (max-width: 1279px)",
  "(min-width: 1280px)",
];

const useMatchMedia = (): Record<string, boolean> => {
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));

  const getValues = useCallback(
    () => mediaQueryLists.map((mql) => mql.matches),
    [mediaQueryLists]
  );

  const [values, setValues] = useState<boolean[]>(getValues);

  const handler = useCallback(() => setValues(getValues), [getValues]);

  useLayoutEffect(() => {
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

    return () => {
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
    };
  }, [handler, mediaQueryLists]);

  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {} as Record<string, boolean>
  );
};

export default useMatchMedia;
