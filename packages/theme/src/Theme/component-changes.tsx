import { Icons } from '@masknet/icons'
import {
    alpha,
    buttonClasses,
    radioClasses,
    checkboxClasses,
    inputBaseClasses,
    menuItemClasses,
    PaletteMode,
    ThemeOptions,
    InputBase as MuiInputBase,
    switchClasses,
    tooltipClasses,
    alertClasses,
    linearProgressClasses,
} from '@mui/material'
import type { MaskColor } from './colors.js'

export const Button = (mode: PaletteMode, colors: MaskColor): ThemeOptions => ({
    components: {
        MuiButton: {
            defaultProps: {
                size: 'medium',
                disableElevation: true,
                variant: 'contained',
            },
            variants: [
                {
                    props: {
                        size: 'small',
                    },
                    style: {
                        padding: '8px 12px',
                        borderRadius: 6,
                        fontSize: 12,
                        lineHeight: '16px',
                    },
                },
                {
                    props: {
                        size: 'medium',
                    },
                    style: {
                        padding: '11px 18px',
                        borderRadius: 8,
                        fontSize: 14,
                        lineHeight: '18px',
                    },
                },
                {
                    props: {
                        size: 'large',
                    },
                    style: {
                        padding: '14px 20px',
                        borderRadius: 10,
                        fontSize: 16,
                        lineHeight: '20px',
                    },
                },
                {
                    props: {
                        variant: 'contained',
                    },
                    style: {
                        backgroundColor: colors.maskColor.main,
                        ['&:hover']: {
                            backgroundColor: colors.maskColor.main,
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: colors.maskColor.primaryMain,
                            opacity: 0.6,
                            color: colors.background.paper,
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                    },
                    style: {
                        backgroundColor: colors.maskColor.thirdMain,
                        color: colors.maskColor.main,
                        border: 'none!important',
                        ['&:hover']: {
                            background: colors.maskColor.bottom,
                            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.1)',
                            border: 'none',
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.main,
                            background: colors.maskColor.thirdMain,
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                    },
                    style: {
                        color: colors.maskColor.main,
                        ['&:hover']: {
                            background: colors.maskColor.thirdMain,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            opacity: 0.4,
                        },
                    },
                },
                // info button
                {
                    props: {
                        variant: 'contained',
                        color: 'info',
                    },
                    style: {
                        background: colors.maskColor.primary,
                        color: colors.maskColor.white,
                        ['&:hover']: {
                            background: colors.maskColor.primary,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.primary, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.primary, 0.3),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'info',
                    },
                    style: {
                        backgroundColor: alpha(colors.maskColor.primary, 0.1),
                        color: colors.maskColor.primary,
                        border: 'none!important',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.primary, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.primary, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.primary,
                            background: alpha(colors.maskColor.primary, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        color: 'info',
                    },
                    style: {
                        color: colors.maskColor.primary,
                        ['&:hover']: {
                            background: alpha(colors.maskColor.primary, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.primary,
                            opacity: 0.4,
                        },
                    },
                },

                // warn button
                {
                    props: {
                        variant: 'contained',
                        color: 'warning',
                    },
                    style: {
                        backgroundColor: colors.maskColor.warn,
                        color: colors.maskColor.white,
                        ['&:hover']: {
                            background: colors.maskColor.warn,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.warn, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.warn, 0.5),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'warning',
                    },
                    style: {
                        backgroundColor: alpha(colors.maskColor.warn, 0.1),
                        color: colors.maskColor.warn,
                        border: 'none!important',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.warn, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.warn, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.warn,
                            background: alpha(colors.maskColor.warn, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        color: 'warning',
                    },
                    style: {
                        color: colors.maskColor.warn,
                        ['&:hover']: {
                            background: alpha(colors.maskColor.warn, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.warn,
                            opacity: 0.4,
                        },
                    },
                },

                // success button
                {
                    props: {
                        variant: 'contained',
                        color: 'success',
                    },
                    style: {
                        background: colors.maskColor.success,
                        color: colors.maskColor.white,
                        ['&:hover']: {
                            background: colors.maskColor.success,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.success, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.success, 0.5),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'success',
                    },
                    style: {
                        background: alpha(colors.maskColor.success, 0.1),
                        color: colors.maskColor.success,
                        border: 'none',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.success, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.success, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.success,
                            background: alpha(colors.maskColor.success, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        color: 'success',
                    },
                    style: {
                        color: colors.maskColor.success,
                        ['&:hover']: {
                            background: alpha(colors.maskColor.success, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.success,
                            opacity: 0.4,
                        },
                    },
                },

                // error button
                {
                    props: {
                        variant: 'contained',
                        color: 'error',
                    },
                    style: {
                        backgroundColor: colors.maskColor.danger,
                        color: colors.maskColor.white,
                        ['&:hover']: {
                            background: colors.maskColor.danger,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.danger, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.danger, 0.5),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                        color: 'error',
                    },
                    style: {
                        backgroundColor: alpha(colors.maskColor.danger, 0.1),
                        color: colors.maskColor.danger,
                        border: 'none',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.danger, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.danger, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.danger,
                            background: alpha(colors.maskColor.danger, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'text',
                        color: 'error',
                    },
                    style: {
                        color: colors.maskColor.danger,
                        ['&:hover']: {
                            background: alpha(colors.maskColor.danger, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.danger,
                            opacity: 0.4,
                        },
                    },
                },

                // rounded button
                {
                    props: {
                        variant: 'roundedContained',
                    },
                    style: {
                        backgroundColor: colors.maskColor.main,
                        borderRadius: 99,
                        ['&:hover']: {
                            backgroundColor: colors.maskColor.main,
                            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.2)',
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: colors.maskColor.primaryMain,
                            opacity: 0.6,
                            color: colors.maskColor.bottom,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedDark',
                    },
                    style: {
                        backgroundColor: colors.maskColor.dark,
                        color: colors.maskColor.white,
                        borderRadius: 99,
                        ['&:hover']: {
                            backgroundColor: colors.maskColor.dark,
                            boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: colors.maskColor.secondaryDark,
                            opacity: 0.6,
                            color: colors.maskColor.white,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedOutlined',
                    },
                    style: {
                        borderRadius: 99,
                        backgroundColor: colors.maskColor.thirdMain,
                        color: colors.maskColor.main,
                        border: 'none!important',
                        ['&:hover']: {
                            background: colors.maskColor.bottom,
                            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.1)',
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            opacity: 0.4,
                            color: colors.maskColor.main,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedText',
                    },
                    style: {
                        color: colors.maskColor.main,
                        borderRadius: 99,
                        ['&:hover']: {
                            background: colors.maskColor.thirdMain,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedContained',
                        color: 'info',
                    },
                    style: {
                        background: colors.maskColor.primary,
                        color: colors.maskColor.white,
                        borderRadius: 99,
                        ['&:hover']: {
                            background: colors.maskColor.primary,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.primary, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.primary, 0.3),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedOutlined',
                        color: 'info',
                    },
                    style: {
                        backgroundColor: alpha(colors.maskColor.primary, 0.1),
                        color: colors.maskColor.primary,
                        borderRadius: 99,
                        border: 'none!important',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.primary, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.primary, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.primary,
                            background: alpha(colors.maskColor.primary, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedText',
                        color: 'info',
                    },
                    style: {
                        color: colors.maskColor.primary,
                        borderRadius: 99,
                        ['&:hover']: {
                            background: alpha(colors.maskColor.primary, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.primary,
                            opacity: 0.4,
                        },
                    },
                },
                // warn button
                {
                    props: {
                        variant: 'roundedContained',
                        color: 'warning',
                    },
                    style: {
                        borderRadius: 99,
                        backgroundColor: colors.maskColor.warn,
                        color: colors.maskColor.white,
                        ['&:hover']: {
                            background: colors.maskColor.warn,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.warn, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.warn, 0.5),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedOutlined',
                        color: 'warning',
                    },
                    style: {
                        borderRadius: 99,
                        backgroundColor: alpha(colors.maskColor.warn, 0.1),
                        color: colors.maskColor.warn,
                        border: 'none!important',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.warn, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.warn, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.warn,
                            background: alpha(colors.maskColor.warn, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedText',
                        color: 'warning',
                    },
                    style: {
                        color: colors.maskColor.warn,
                        borderRadius: 99,
                        border: 'none',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.warn, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.warn,
                            opacity: 0.4,
                        },
                    },
                },

                // success button
                {
                    props: {
                        variant: 'roundedContained',
                        color: 'success',
                    },
                    style: {
                        borderRadius: 99,
                        background: colors.maskColor.success,
                        color: colors.maskColor.white,
                        ['&:hover']: {
                            background: colors.maskColor.success,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.success, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.success, 0.5),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedOutlined',
                        color: 'success',
                    },
                    style: {
                        borderRadius: 99,
                        background: alpha(colors.maskColor.success, 0.1),
                        color: colors.maskColor.success,
                        border: 'none!important',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.success, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.success, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.success,
                            background: alpha(colors.maskColor.success, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedText',
                        color: 'success',
                    },
                    style: {
                        borderRadius: 99,
                        color: colors.maskColor.success,
                        ['&:hover']: {
                            background: alpha(colors.maskColor.success, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.success,
                            opacity: 0.4,
                        },
                    },
                },

                // error button
                {
                    props: {
                        variant: 'roundedContained',
                        color: 'error',
                    },
                    style: {
                        borderRadius: 99,
                        backgroundColor: colors.maskColor.danger,
                        color: colors.maskColor.white,
                        ['&:hover']: {
                            background: colors.maskColor.danger,
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.danger, 0.3)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            background: alpha(colors.maskColor.danger, 0.5),
                            opacity: 0.6,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedOutlined',
                        color: 'error',
                    },
                    style: {
                        borderRadius: 99,
                        backgroundColor: alpha(colors.maskColor.danger, 0.1),
                        color: colors.maskColor.danger,
                        border: 'none!important',
                        ['&:hover']: {
                            background: alpha(colors.maskColor.danger, 0.2),
                            boxShadow: `0 8px 25px ${alpha(colors.maskColor.danger, 0.1)}`,
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.danger,
                            background: alpha(colors.maskColor.danger, 0.1),
                            opacity: 0.4,
                        },
                    },
                },
                {
                    props: {
                        variant: 'roundedText',
                        color: 'error',
                    },
                    style: {
                        borderRadius: 99,
                        color: colors.maskColor.danger,
                        ['&:hover']: {
                            background: alpha(colors.maskColor.danger, 0.1),
                        },
                        [`&.${buttonClasses.disabled}`]: {
                            color: colors.maskColor.danger,
                            opacity: 0.4,
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    fontWeight: 700,
                    color: colors.background.paper,
                },
            },
        },
    },
})

export const Radio = (mode: PaletteMode, colors: MaskColor): ThemeOptions => ({
    components: {
        MuiRadio: {
            defaultProps: {
                size: 'medium',
                icon: <Icons.RadioButtonUnChecked />,
                checkedIcon: <Icons.RadioButtonChecked />,
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                    color: colors.maskColor.secondaryLine,
                    [`&.${radioClasses.checked} svg`]: {
                        filter: 'drop-shadow(0px 4px 10px rgba(28, 104, 243, 0.2))',
                    },
                    [`&.${radioClasses.disabled} svg`]: {
                        color: colors.maskColor.secondaryLine,
                        '& circle': {
                            fill: `${colors.maskColor.bg} !important`,
                        },
                    },
                },
            },
        },
    },
})

export const Checkbox = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiCheckbox: {
            defaultProps: {
                size: 'medium',
                checkedIcon: <Icons.Checkbox />,
                icon: <Icons.CheckboxBlank />,
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    color: colors.maskColor.secondaryLine,
                    [`&.${checkboxClasses.checked} svg`]: {
                        filter: 'drop-shadow(0px 4px 10px rgba(28, 104, 243, 0.2))',
                    },
                    [`&.${checkboxClasses.disabled} svg`]: {
                        color: colors.maskColor.secondaryLine,
                        fill: colors.maskColor.bg,
                    },
                    [`&.${checkboxClasses.checked}.${checkboxClasses.disabled} svg`]: {
                        filter: 'none',
                        fill: colors.maskColor.secondaryMain,
                        color: colors.maskColor.secondaryMain,
                    },
                },
            },
        },
    },
})

export const InputBase = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiInputBase: {
            defaultProps: {
                size: 'medium',
            },
            variants: [
                {
                    props: {
                        size: 'small',
                    },
                    style: {
                        [`& .${inputBaseClasses.input}`]: {
                            padding: 8,
                            height: 16,
                        },
                    },
                },
                {
                    props: {
                        size: 'medium',
                    },
                    style: {
                        [`& .${inputBaseClasses.input}`]: {
                            padding: 11,
                            height: 18,
                        },
                    },
                },
                {
                    props: {
                        size: 'large',
                    },
                    style: {
                        [`& .${inputBaseClasses.input}`]: {
                            padding: 14,
                            height: 20,
                        },
                    },
                },
                {
                    props: {
                        color: 'error',
                    },
                    style: {
                        [`&.${inputBaseClasses.focused} > .${inputBaseClasses.input}`]: {
                            outline: `2px solid ${alpha(colors.maskColor.danger, 0.2)}`,
                            border: `1px solid ${alpha(colors.maskColor.danger, 0.5)}`,
                        },
                        [`& .${inputBaseClasses.input}`]: {
                            outline: `2px solid ${alpha(colors.maskColor.danger, 0.2)}`,
                            border: `1px solid ${alpha(colors.maskColor.danger, 0.5)}`,
                        },
                    },
                },
                {
                    props: {
                        color: 'warning',
                    },
                    style: {
                        [`&.${inputBaseClasses.focused} > .${inputBaseClasses.input}`]: {
                            outline: `2px solid ${alpha(colors.maskColor.warn, 0.2)}`,
                            border: `1px solid ${alpha(colors.maskColor.warn, 0.5)}`,
                        },
                        [`& .${inputBaseClasses.input}`]: {
                            outline: `2px solid ${alpha(colors.maskColor.warn, 0.2)}`,
                            border: `1px solid ${alpha(colors.maskColor.warn, 0.5)}`,
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    [`&.${inputBaseClasses.focused} > .${inputBaseClasses.input}`]: {
                        outline: `2px solid ${alpha(colors.maskColor.primary, 0.2)}`,
                        border: `1px solid ${alpha(colors.maskColor.primary, 0.5)}`,
                    },
                    [`&.${inputBaseClasses.error} > .${inputBaseClasses.input}`]: {
                        outline: `2px solid ${alpha(colors.maskColor.danger, 0.2)}`,
                        border: `1px solid ${alpha(colors.maskColor.danger, 0.5)}`,
                    },
                    [`&.${inputBaseClasses.disabled} > .${inputBaseClasses.input}`]: {
                        WebkitTextFillColor: 'unset',
                        '&::placeholder': {
                            opacity: '0.5',
                        },
                    },
                },
                input: {
                    borderRadius: 8,
                    backgroundColor: colors.maskColor.input,
                    '&::placeholder': {
                        color: colors.maskColor.third,
                    },
                },
            },
        },
    },
})

export const Select = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiSelect: {
            defaultProps: {
                IconComponent: null,
                input: <MuiInputBase />,
            },
        },
    },
})

export const MenuItem = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    [`&.${menuItemClasses.selected}`]: {
                        backgroundColor: `${colors.maskColor.bg}!important`,
                    },
                },
            },
        },
    },
})

export const Slider = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiSlider: {
            styleOverrides: {
                root: {
                    color: colors.maskColor.primary,
                },
                rail: {
                    opacity: 1,
                    backgroundColor: colors.maskColor.thirdMain,
                },
            },
        },
    },
})

export const Switch = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiSwitch: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    padding: 8,
                },
                switchBase: {
                    padding: 12,
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                    [`&.${switchClasses.checked}`]: {
                        color: colors.maskColor.white,
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        [`&+.${switchClasses.track}`]: {
                            backgroundColor: colors.maskColor.success,
                            opacity: 1,
                        },
                        [`&.${switchClasses.disabled}`]: {
                            color: colors.maskColor.white,
                        },
                    },
                    [`&.${switchClasses.disabled}`]: {
                        color: colors.maskColor.white,
                        [`&+.${switchClasses.track}`]: {
                            opacity: 0.5,
                        },
                    },
                },
                track: {
                    borderRadius: 11,
                    backgroundColor: colors.maskColor.primaryMain,
                    opacity: 1,
                    '&:before, &:after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 16,
                        height: 16,
                    },
                },
                thumb: {
                    width: 14,
                    height: 14,
                },
            },
        },
    },
})

export const Tooltip = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiTooltip: {
            defaultProps: {
                arrow: true,
            },
            styleOverrides: {
                tooltip: {
                    padding: 10,
                    fontSize: 14,
                    lineHeight: '18px',
                    backgroundColor: colors.maskColor.tips,
                    color: colors.maskColor.bottom,
                },
                arrow: {
                    color: colors.maskColor.tips,
                },
                popper: {
                    // `variants` can't override placement prop, So here we use css selector.
                    [`&[data-popper-placement*="top-start"] .${tooltipClasses.arrow}`]: {
                        transform: 'translate3d(10px, 0, 0)!important',
                    },
                    [`&[data-popper-placement*="top-end"] .${tooltipClasses.arrow}`]: {
                        transform: 'translate3d(300px, 0, 0)!important',
                    },
                },
            },
        },
    },
})

export const Alert = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    info: <Icons.Info size={20} />,
                    warning: <Icons.WarningTriangle size={20} />,
                    success: <Icons.FillSuccess size={20} />,
                    error: <Icons.Warning size={20} />,
                },
                variant: 'standard',
            },
            styleOverrides: {
                root: {
                    padding: '4px 12px',
                    backdropFilter: 'blur(10px)',
                },
                standardInfo: {
                    backgroundColor: colors.maskColor.bg,
                    color: colors.maskColor.main,
                    [`& .${alertClasses.icon}`]: {
                        color: colors.maskColor.main,
                    },
                },
                standardWarning: {
                    backgroundColor: alpha(colors.maskColor.warn, 0.1),
                    color: colors.maskColor.warn,
                },
                standardError: {
                    backgroundColor: alpha(colors.maskColor.danger, 0.1),
                    color: colors.maskColor.danger,
                },
                standardSuccess: {
                    backgroundColor: alpha(colors.maskColor.success, 0.1),
                    color: colors.maskColor.success,
                },
                icon: {
                    padding: '8px 0',
                    marginRight: 6,
                    width: 20,
                    height: 20,
                },
            },
        },
    },
})

export const LinearProgress = (mode: PaletteMode, colors: MaskColor) => ({
    components: {
        MuiLinearProgress: {
            styleOverrides: {
                determinate: {
                    height: 6,
                    borderRadius: 8,
                    backgroundColor: colors.maskColor.bg,
                    [`& .${linearProgressClasses.bar}`]: {
                        backgroundColor: colors.maskColor.success,
                    },
                },
            },
        },
    },
})
