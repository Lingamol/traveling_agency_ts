// import React from "react";

// import css from "./TripAssets.module.scss";

// import Include from "../Include";
// type Props = { list: Include[] };
// const TripAssets: React.FC<Props> = ({ list }) => {
//   return (
//     <div className={css.container}>
//       <ul className={css.list}>
//         {list.map((item) => (
//           <li key={item.id} className={css.item}>
//             <svg className={css.icon}>
//               <use xlinkHref={`icons/symbol-defs.svg#${item.iconName}`} />
//             </svg>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default TripAssets;
import React from "react";
import css from "./TripAssets.module.scss";
import Include from "../Include";

type Props = { list: Include[] };

const TripAssets: React.FC<Props> = ({ list }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {list.map((item) => (
          <li
            key={item.id}
            className={css.item}
            style={
              { "--bg-color": `var(${item.color})` } as React.CSSProperties
            }
          >
            <svg className={css.icon}>
              <use xlinkHref={`icons/symbol-defs.svg#${item.iconName}`} />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripAssets;
