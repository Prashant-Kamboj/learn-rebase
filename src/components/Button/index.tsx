import { css } from "../../../styled-system/css";

const btnStyle = css({
  cursor: "pointer",
  height: "100px",
  width: "400px",
  borderRadius: "50px",
  background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
  boxShadow: "20px 20px 40px #b5bec4,-20px -20px 40px #f5ffff",
  _hover: {
    borderRadius: "50p",
    background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
    boxShadow: "20px 20px 40px #bebebe,-20px -20px 40px #ffffff",
  },
  _active: {
    borderRadius: "50px",
    background: "#e0e0e0",
    boxShadow: "inset 20px 20px 40px #bebebe,inset -20px -20px 40px #ffffff",
  },
});

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={btnStyle}>
      {children}
    </button>
  );
};
