import { ReactElement } from "react";

type ISignupTabPanel = {
    value: Number;
    index: Number;
    children: ReactElement | ReactElement[];
}

function SignupTabPanel({ value, index, children }: ISignupTabPanel) {
    return (
        <div>
            {index === value ? children : ""}
        </div>
    )
}

export default SignupTabPanel;