export function Spinner({ className = '', color = '#888' }: { className?: string, color?: string }) {
  return (
    <div className={'min-w-60 min-h-60 w-full h-full flex justify-center items-center'}>
      <svg
        className={`animate-spin ${className}`}
        viewBox="0 0 50 50"
        width="40"
        height="40"
        style={{ display: 'inline-block' }}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeDasharray="90 150"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}