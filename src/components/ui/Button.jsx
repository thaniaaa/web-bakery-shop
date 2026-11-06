const variants = {
  primary:
    'bg-cocoa-900 text-white shadow-[0_12px_30px_rgba(46,25,20,0.2)] hover:-translate-y-0.5 hover:bg-cocoa-800 hover:shadow-[0_16px_34px_rgba(46,25,20,0.25)]',
  secondary:
    'border border-cocoa-900/20 bg-white/70 text-cocoa-900 hover:-translate-y-0.5 hover:border-cocoa-900/40 hover:bg-white',
};

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel-500 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
