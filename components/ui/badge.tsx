import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

const badgeVariants = cva(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default:
                    'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary:
                    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                destructive:
                    'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                outline: 'text-foreground',
                icon: `
                      border-transparent bg-muted text-foreground hover:bg-muted/70 
                      w-12 h-12 rounded-full flex items-center justify-center 
                      overflow-hidden relative shadow-sm
                    `,
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
    /** Only for icon variant — pass a React node (e.g., an icon component) */
    icon?: React.ReactNode;
    /** Only for icon variant — label shown on hover */
    label?: string;
}


function Badge({className, variant, icon, label, ...props}: BadgeProps) {
    const isIcon = variant === 'icon';

    return (
        <div className={cn(badgeVariants({variant}), className)} {...props}>
            {isIcon ? (
                <div className="group relative flex items-center justify-center" title={label}>
                    {icon}
                </div>
            ) : (
                props.children
            )}
        </div>
    );
}

export {Badge, badgeVariants};
