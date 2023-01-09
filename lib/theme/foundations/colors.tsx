import {
  mauve,
  mauveDark,
  plum,
  plumDark,
  gray,
  grayDark,
  plumA,
  plumDarkA,
  amber,
  amberDark,
  green,
  greenDark,
} from "@radix-ui/colors";

// consider these to be mostly light theme
export const colors = {
  ...gray,
  ...mauve,
  ...plumDark,
  ...plumDarkA,
  ...amberDark,
  ...green,
};

// override any light theme same key names
// try to keep shared colors within colors
export const darkColors = {
  ...grayDark,
  ...mauveDark,
  ...plum,
  ...plumA,
  ...amber,
  ...greenDark,
};