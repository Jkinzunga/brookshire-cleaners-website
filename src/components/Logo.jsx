export default function Logo({ height = 38, variant = 'dark' }) {
  const src = variant === 'white' ? '/brookshire_logo_white.png' : '/brookshire_logo.png';
  return (
    <img
      src={src}
      alt="Brookshire's Cleaners — Charlotte, NC"
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
