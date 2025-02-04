import React from "react";
import "./input.scss";

interface InputInterface {
    label: any;
    value: string;
    name: string;
    onChange?: (e) => void;
    description?: string;
    className?: any;
    placeholder?: string;
    Error?: string;
    disabled?: boolean;
}

export default function Input({
                                  label,
                                  value,
                                  onChange,
                                  description,
                                  className,
                                  placeholder,
                                  Error,
                                  name,
                                  disabled,
                              }: InputInterface) {
    return (
        <div className="inputContainer">
            <div className="inputLabel">{label}</div>
            <input
                onChange={(e) => onChange(e)}
                className={className}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                name={name}
            />
            <div className="inputDesc">{description}</div>
            {Error && <div className="inputError">{Error}</div>}
        </div>
    );
}
