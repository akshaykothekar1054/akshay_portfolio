import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#8B5CF6",
          }}
        >
          {"</>"}
        </div>
      </div>
    ),
    { ...size }
  );
}
