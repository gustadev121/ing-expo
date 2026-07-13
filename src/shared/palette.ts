/**
 * Standardized pastel color palette.
 *
 * Every color in the presentation MUST come from this palette.
 * Each base color has a `text` and `border` variant for contrast.
 */

export const palette = {
  purple: {
    base: "#eaddff",
    text: "#6b21a8",
    border: "#c9b8e8",
  },
  rose: {
    base: "#f8d8d1",
    text: "#9f1239",
    border: "#e8b8ad",
  },
  amber: {
    base: "#ffefb7",
    text: "#92400e",
    border: "#f5dc7a",
  },
  green: {
    base: "#def8b4",
    text: "#3f6212",
    border: "#c5e88e",
  },
  teal: {
    base: "#daf3e7",
    text: "#115e59",
    border: "#a8e4c8",
  },
  blue: {
    base: "#d6edfa",
    text: "#1e40af",
    border: "#a8d5f0",
  },
  pink: {
    base: "#fcdef1",
    text: "#9d174d",
    border: "#f5b5d8",
  },
  magenta: {
    base: "#ffe7f6",
    text: "#9d174d",
    border: "#f5c0e3",
  },
  gray: {
    base: "#f8fafc",
    text: "#1e293b",
    muted: "#64748b",
    border: "#e2e8f0",
    light: "#f1f5f9",
  },
  white: "#ffffff",
} as const;

export type PaletteKey = keyof typeof palette;
