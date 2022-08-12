export type Theme = {
  colors: {
    primary?: string;
    background?: string;
    foreground?: string;
    gray?: string;
    subtext?: string;
    border?: string;
    danger?: string;
    success?: string;
    warning?: string;
  };
  text: {
    error_required?: string;
    error_min_chars?: string;
    error_max_chars?: string;
    error_regex?: string;
  };
};

export type MappedTheme = {
  '--color-primary': string;
  '--color-background': string;
  '--color-foreground': string;
  '--color-gray': string;
  '--color-subtext': string;
  '--color-border': string;
  '--color-danger': string;
  '--color-success': string;
  '--color-warning': string;
  [key: string]: string;
};

export const defaultTheme: Theme = {
    colors: {
        primary: '#fc5555',
        foreground: '#111111',
        subtext: '#2e2e2e',
        gray: '#7f7f7f',
        border: '#bfbfbf',
        background: '#fafafa',
        success: '#12dd70',
        warning: '#ffac2f',
        danger: '#ee4747',
    },
    text: {
        error_required: 'This field is required',
        error_min_chars: 'This field must have at least {} characters',
        error_max_chars: 'This field must have at most {} characters',
        error_regex: 'This field is invalid',
    },
};

export const darkTheme: Theme = extendTheme(defaultTheme, {
    colors: {
        primary: '#fc5555',
        background: '#111111',
        border: '#2e2e2e',
        gray: '#7f7f7f',
        subtext: '#bfbfbf',
        foreground: '#fafafa',
        success: '#12dd70',
        warning: '#ffac2f',
        danger: '#ee4747',
    },
    text: {},
});

export function extendTheme(base: Theme, extension: Theme): Theme {
    return {
        colors: {
            ...base.colors,
            ...extension.colors,
        },
        text: {
            ...base.text,
            ...extension.text,
        },
    };
}

export function mapTheme(theme: Theme): MappedTheme {
    return {
        '--color-primary':
      theme.colors.primary || defaultTheme.colors.primary || '',
        '--color-background':
      theme.colors.background || defaultTheme.colors.background || '',
        '--color-foreground':
      theme.colors.foreground || defaultTheme.colors.foreground || '',
        '--color-gray': theme.colors.gray || defaultTheme.colors.gray || '',
        '--color-subtext':
      theme.colors.subtext || defaultTheme.colors.subtext || '',
        '--color-border': theme.colors.border || defaultTheme.colors.border || '',
        '--color-danger': theme.colors.danger || defaultTheme.colors.danger || '',
        '--color-success':
      theme.colors.success || defaultTheme.colors.success || '',
        '--color-warning':
      theme.colors.warning || defaultTheme.colors.warning || '',
    };
}
