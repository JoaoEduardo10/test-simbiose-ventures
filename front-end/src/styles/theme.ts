export const theme = {
  colors: {
    primary_color: "#222",
    secondary_color: "#FFFF",
    light_gray: "#f9f9f9",
    blue: "#227bd4",
  },
  font: {
    sizes: {
      small: "1.6rem",
      extra_small: "3.2rem",
      large: "4.8rem",
      extra_large: "6.4rem",
      big: "8rem",
      extra_big: "9.6rem",
    },
    family: {
      primary: "'Plus Jakarta Sans'",
    },
  },
  media: {
    lteMedium: "(max-width: 768px)",
    phone: "(max-width: 780px)",
    tablet: "(max-width: 950px)",
    lapTop: "(max-width: 1500px)",
  },
  media_screen_size: {
    small_phones: "@media (max-width: 480px)",
    phone: "@media (min-width: 481px) and (max-width: 767px)",
    tablet: "@media (min-width: 768px) and (max-width: 1023px)",
    lapTop: "@media (min-width: 1024px) and (max-width: 1500px)",
  },
  padding: {
    small: "1.6rem",
    extra_small: "3.2rem",
    large: "4.8rem",
    extra_large: "6.4rem",
    big: "8rem",
    extra_big: "9.6rem",
  },
} as const;
