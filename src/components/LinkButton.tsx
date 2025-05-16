import Link from "next/link";
import Button from "@mui/material/Button";

interface LinkButtonProps {
  my?: string;
  color?: string;
  display?: string;
  width?: string;
  padding?: string;
  textDecoration?: string;
  textAlign?: string;
  href: string;
  label: string;
}

export default function LinkButton({
  label,
  my,
  color,
  display,
  href,
  width,
  padding,
  textDecoration,
  textAlign,
}: LinkButtonProps) {
  if (my !== undefined && color !== undefined && display !== undefined) {
    return (
      <Link href={href} passHref>
        <Button sx={{ my: { my }, color: { color }, display: { display } }}>
          {label}
        </Button>
      </Link>
    );
  } else if (my !== undefined && color !== undefined && display == undefined) {
    return (
      <Link href={href} passHref>
        <Button sx={{ my: { my }, color: { color } }}>{label}</Button>
      </Link>
    );
  } else if (my !== undefined && color == undefined && display !== undefined) {
    return (
      <Link href={href} passHref>
        <Button sx={{ my: { my }, display: { display } }}>{label}</Button>
      </Link>
    );
  } else if (my == undefined && color !== undefined && display !== undefined) {
    return (
      <Link href={href} passHref>
        <Button sx={{ color: { color }, display: { display } }}>{label}</Button>
      </Link>
    );
  } else if (my === undefined && color === undefined && display !== undefined) {
    return (
      <Link href={href} passHref>
        <Button sx={{ display: { display } }}>{label}</Button>
      </Link>
    );
  } else if (my == undefined && color !== undefined && display == undefined) {
    return (
      <Link href={href} passHref>
        <Button sx={{ color: { color } }}>{label}</Button>
      </Link>
    );
  } else if (
    width !== undefined &&
    padding !== undefined &&
    textDecoration !== undefined &&
    textAlign !== undefined
  ) {
    return (
      <Link href={href} passHref>
        <Button
          sx={{
            width: { width },
            padding: { padding },
            textDecoration: { textDecoration },
            textAlign: { textAlign },
          }}
        >
          {label}
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href={href} passHref>
        <Button sx={{ my: { my } }}>{label}</Button>
      </Link>
    );
  }
}
