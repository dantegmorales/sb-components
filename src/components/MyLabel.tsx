import "./mylabel.css";

export interface MyLabelProps {
  /**
   * El texto mostrado
   */
  label: string;
  /**
   * El tamaño del label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Si el texto esta capitalizado
   */
  allCaps?: boolean;
  /**
   * Color del label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color personalizado
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      style={{ color: fontColor }}
      className={`label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
