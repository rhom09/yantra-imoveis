import { LucideIcon } from 'lucide-react';

interface ContactChannelCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle: string;
  actionLabel: string;
  href: string;
  isExternal?: boolean;
}

export default function ContactChannelCard({
  icon: Icon,
  label,
  value,
  subtitle,
  actionLabel,
  href,
  isExternal = false,
}: ContactChannelCardProps) {
  const isEmail = href.startsWith('mailto:');

  return (
    <div className="bg-off-white border border-border-yantra rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out p-6 flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex items-center gap-4 flex-grow">
        <div className="w-12 h-12 rounded-full bg-verde-salvia/20 flex items-center justify-center text-verde-escuro flex-shrink-0">
          <Icon size={24} />
        </div>
        <div>
          <span className="block text-xs tracking-[0.2em] uppercase font-sans font-medium text-dourado mb-1">
            {label}
          </span>
          <h3 className="font-serif text-2xl text-verde-profundo leading-tight break-all">
            {value}
          </h3>
          <p className="font-sans text-sm font-light text-verde-escuro opacity-80 mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dourado
          ${isEmail
            ? 'border border-verde-escuro text-verde-escuro hover:bg-verde-escuro hover:text-white'
            : 'bg-dourado text-white hover:bg-dourado-light'
          }`}
      >
        {actionLabel}
      </a>
    </div>
  );
}
