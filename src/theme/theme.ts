import { colors } from "./colors";
import { spcing } from "./spacing";

export const theme = {
  colors: { ...colors },
  spacing: { ...spcing },
};

export type Theme = typeof theme;
