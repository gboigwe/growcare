import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2, Heart } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', loading, disabled, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95';

    const variants = {
      default: 'bg-gradient-to-r from-ig-pink to-ig-purple hover:from-ig-magenta hover:to-ig-purple-dark text-white focus:ring-ig-pink shadow-lg hover:shadow-xl warm-glow',
      outline: 'border-2 border-ig-pink/30 bg-ig-pink/10 hover:bg-ig-pink/20 text-white focus:ring-ig-pink/50 backdrop-blur-sm',
      ghost: 'text-white hover:bg-white/10 focus:ring-white/50',
      danger: 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white focus:ring-red-500 shadow-lg hover:shadow-xl',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <div className="mr-2 h-4 w-4 bg-ig-pink/50 rounded-full animate-pulse">
            <Heart className="h-4 w-4 text-white animate-bounce" />
          </div>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
