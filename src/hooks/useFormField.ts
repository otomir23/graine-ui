import {useState} from "react";
import {useTheme} from "../Theme/ThemeProvider";
import {defaultTheme} from "../Theme";

export type FormFieldProps = {
    id: string,
    label?: string,
    placeholder?: string,
    type?: "number" | "text" | "email" | "password",
    defaultValue?: string,
    onChange?: (s: string | undefined) => void,
    validation: {
        required?: boolean,
        minLength?: number,
        maxLength?: number,
        pattern?: RegExp,
        validate?: (value: string) => {
            status: boolean,
            message?: string
        }
    }
}

export type FormFieldData = {
    value: string,
    valid: boolean,
    id: string,
    label?: string,
    placeholder?: string,
    type?: "number" | "text" | "email" | "password",
    error?: string
    onChange: (e: any) => void,
    setValue: (value: string | undefined) => void
}

export default function useFormField(props: FormFieldProps): FormFieldData {
    const [value, setValue] = useState<string | undefined>(props.defaultValue || undefined)
    const texts = useTheme()?.text;
    let error = undefined;
    if (props.validation.required && value === "") {
        error = texts?.error_required || defaultTheme.text.error_required;
    } else if (props.validation.minLength && value && value.length < props.validation.minLength) {
        error = (texts?.error_min_chars || defaultTheme.text.error_min_chars)?.replace("{}", props.validation.minLength.toString());
    } else if (props.validation.maxLength && value && value.length > props.validation.maxLength) {
        error = (texts?.error_max_chars || defaultTheme.text.error_max_chars)?.replace("{}", props.validation.maxLength.toString());
    } else if (props.validation.pattern && value && !props.validation.pattern.test(value)) {
        error = texts?.error_regex || defaultTheme.text.error_regex;
    } else if (props.validation.validate && value) {
        const {status, message} = props.validation.validate(value)
        if (!status) {
            if (message) error = message
            else error = texts?.error_regex || defaultTheme.text.error_regex;
        }
    }

    return {
        value: value || "",
        valid: (Boolean(value) || !props.validation.required) && !error,
        id: props.id,
        label: props.label,
        placeholder: props.placeholder,
        type: props.type,
        error,
        setValue: (e: string | undefined) => {
            setValue(e)
        },
        onChange: (e: any) => {
            setValue(e.target.value);
            if (props.onChange) props.onChange(e.target.value);
        },
    }
}