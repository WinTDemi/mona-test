import { Form, Input } from "antd";

type FormInputProps = {
    label: string;
    name: string;
    value: string | number;
    onChange: (name: string, value: string) => void;
    rules: any[];
    placeholder: string;
    type?: string;
}

const FormInput = ({ label, name, value, onChange, rules, placeholder, type }: FormInputProps) => {
    return (
        <Form.Item name={name} label={label} rules={rules}>
            <Input
                type={type}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                placeholder={placeholder}
            />
        </Form.Item>
    );
};

export default FormInput;
