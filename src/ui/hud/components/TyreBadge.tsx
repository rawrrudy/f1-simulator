import { TyreCompound } from "../../../engine/tyres/TyreCompound";

type Props = {
    compound: TyreCompound;
};

export function TyreBadge({ compound }: Props) {
  let background = "#ffffff";
  let text = "H";

  switch (compound) {
    case TyreCompound.Soft:
      background = "#E10600";
      text = "S";
      break;

    case TyreCompound.Medium:
      background = "#FFD500";
      text = "M";
      break;

    case TyreCompound.Hard:
      background = "#F5F5F5";
      text = "H";
      break;
  }

  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: "50%",
        background,
        color: compound === TyreCompound.Hard ? "#111" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 9,
        fontWeight: 800,
        marginLeft: 6,
        flexShrink: 0,
      }}
    >
        {text}
    </div>
  );
}