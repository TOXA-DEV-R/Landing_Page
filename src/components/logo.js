/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src }) {
  return (
    <Link
      path={"/"}
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
    >
      <Image src={src} alt="next js landing page logo" />
    </Link>
  );
}
