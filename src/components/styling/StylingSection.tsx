import { CssVars } from "./cssVars";
import { Basics } from "./basics";
import { MediaQueries } from "./mediaQueries";

export const StylingSection = () => {
  return (
    <div>
      <Basics />
      <CssVars />
      <MediaQueries />
    </div>
  );
};
