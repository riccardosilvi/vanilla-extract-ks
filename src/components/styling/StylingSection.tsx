import { CssVars } from "./cssVars";
import { Basics } from "./basics";
import { MediaQueries } from "./mediaQueries";
import { Selectors } from "./selectors";

export const StylingSection = () => {
  return (
    <div>
      <Basics />
      <CssVars />
      <MediaQueries />
      <Selectors />
    </div>
  );
};
