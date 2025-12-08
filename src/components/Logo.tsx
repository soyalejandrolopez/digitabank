interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  color?: 'light' | 'dark' | 'gradient';
}

export default function Logo({
  className = '',
  size = 'md',
  variant = 'full',
  color = 'gradient'
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' },
    xl: { icon: 64, text: 'text-3xl' },
  };

  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;

  const textColors = {
    light: 'text-white',
    dark: 'text-gray-900',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500',
  };

  const IconSVG = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>

      {/* Main rounded square background */}
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="16"
        fill="url(#logoGradient)"
      />

      {/* Inner glow effect */}
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="12"
        fill="white"
        fillOpacity="0.1"
      />

      {/* D letter stylized as digital/bank symbol */}
      <path
        d="M20 18H32C40.8366 18 48 25.1634 48 34C48 42.8366 40.8366 50 32 50H20V18Z"
        fill="white"
        fillOpacity="0.9"
      />

      {/* Inner cutout for D */}
      <path
        d="M26 24H32C37.5228 24 42 28.4772 42 34C42 39.5228 37.5228 44 32 44H26V24Z"
        fill="url(#logoGradient)"
      />

      {/* Digital lines/circuit pattern */}
      <rect x="28" y="30" width="8" height="2" rx="1" fill="white" fillOpacity="0.9"/>
      <rect x="28" y="34" width="10" height="2" rx="1" fill="white" fillOpacity="0.9"/>
      <rect x="28" y="38" width="6" height="2" rx="1" fill="white" fillOpacity="0.9"/>

      {/* Small accent dots */}
      <circle cx="16" cy="32" r="2" fill="white" fillOpacity="0.6"/>
      <circle cx="16" cy="40" r="1.5" fill="white" fillOpacity="0.4"/>
    </svg>
  );

  const TextLogo = () => (
    <span className={`font-bold tracking-tight ${textSize} ${color === 'gradient' ? textColors.gradient : textColors[color]}`}>
      DIGI<span className={color === 'gradient' ? '' : ''}>BANK</span>
    </span>
  );

  if (variant === 'icon') {
    return (
      <div className={className}>
        <IconSVG />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        <TextLogo />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <IconSVG />
      <TextLogo />
    </div>
  );
}
