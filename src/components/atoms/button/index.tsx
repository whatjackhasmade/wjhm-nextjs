import StyledButton from './button.styles';

type ButtonProps = {
  className?: string;
  children: any;
  disabled?: boolean;
  href?: string;
  onClick?: any;
  rel?: string;
  target?: string;
  type?: string;
};

const Button = (props: ButtonProps) => {
  const { className, children, disabled, href, onClick, rel, target, type } = props;
  if (href) {
    const BtnLink = StyledButton.withComponent(`a`);
    return (
      <BtnLink
        href={href}
        className={`button ${className} ${type}`}
        disabled={disabled}
        rel={target === `_blank` ? `noopener noreferrer` : rel}
        target={target}
        type={type}
      >
        {children}
      </BtnLink>
    );
  }

  return (
    <StyledButton className={`button ${className} ${type}`} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
