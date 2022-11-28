import { StyledButton } from "./styles"

const Button = ({ children, onClick }) => {
    return <Button onClick={onClick}>
        {children}
    </Button>
}

export default Button