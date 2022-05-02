import { ChangeEvent, FC, SelectHTMLAttributes } from "react";
import { StyledSelect } from "./styles";

interface ISelect {
    name: string;
    id: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    others?: SelectHTMLAttributes<HTMLSelectElement>;
}

const Select: FC<ISelect> = (props) => {
    const { others } = props;

    return (
        <StyledSelect className="select-wrapper">
            <select {...props} {...others}>
                {props.options.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </StyledSelect>
    );
};

export default Select;
