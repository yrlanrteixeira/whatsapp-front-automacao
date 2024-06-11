export interface ITheme {
  COLORS: {
    MAIN_COLORS: {
      [key: string]: string;
      PRIMARY_DARKEST: string;
      PRIMARY_DARK: string;
      PRIMARY_PURE: string;
      PRIMARY_LIGHT: string;
      PRIMARY_LIGHTEST: string;
      SECONDARY_DARKEST: string;
      SECONDARY_DARK: string;
      SECONDARY_PURE: string;
      SECONDARY_LIGHT: string;
      SECONDARY_LIGHTEST: string;
      TERTIARY_DARKEST: string;
      TERTIARY_DARK: string;
      TERTIARY_PURE: string;
      TERTIARY_LIGHT: string;
      TERTIARY_LIGHTEST: string;
    };
    NEUTRAL_COLORS: {
      BLACK: string;
      DARKEST: string;
      DARK: string;
      MEDIUM: string;
      LIGHT: string;
      WHITE: string;
    };
    SIGNAL_COLORS: {
      [key: string]: string;
      DESTRUCTIVE_ACTION: string;
      LINK: string;
      SUCESS: string;
      ALERTA: string;
      ERRO: string;
    };
  };
  FONTS: {
    MAIN: string;
    SANS_PRO: string;
  };
}

export const THEME_DEFAULT: ITheme = {
  COLORS: {
    MAIN_COLORS: {
      PRIMARY_DARKEST: "#001633",
      PRIMARY_DARK: "#00449F",
      PRIMARY_PURE: "#136CE3",
      PRIMARY_LIGHT: "#4E9AFF",
      PRIMARY_LIGHTEST: "#E5EDF9",
      SECONDARY_DARKEST: "#003D3D",
      SECONDARY_DARK: "#007E7E",
      SECONDARY_PURE: "#18D1D1",
      SECONDARY_LIGHT: "#66FCFC",
      SECONDARY_LIGHTEST: "#EAFFFF",
      TERTIARY_DARKEST: "#0A0020",
      TERTIARY_DARK: "#18004D",
      TERTIARY_PURE: "#4A24A0",
      TERTIARY_LIGHT: "#8865D7",
      TERTIARY_LIGHTEST: "#DBCBFF",
      DESTRUCTIVE_ACTION: "#DD0B0B",
      LINK: "#1890FF",
      SUCESS: "#52C41A",
      ALERTA: "#FAAD14",
      ERRO: "#FF4D4F",
      COPIA: "#D53A8E",
    },
    NEUTRAL_COLORS: {
      BLACK: "#000000",
      DARKEST: "#141414",
      DARK: "#747880",
      MEDIUM: "#BFC1C7",
      LIGHT: "#D6D7DA",
      WHITE: "#FFFFFF",
    },
    SIGNAL_COLORS: {
      DESTRUCTIVE_ACTION: "#DD0B0B",
      LINK: "#1890FF",
      SUCESS: "#52C41A",
      ALERTA: "#FAAD14",
      ERRO: "#FF4D4F",
    },
  },

  FONTS: {
    MAIN: "Poppins, sans-serif",
    SANS_PRO: "Source Sans Pro",
  },
};
