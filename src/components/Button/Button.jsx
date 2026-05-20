import "./Button.css";

export default function Button({ mode = "filled", Icon, children, ...props }) {
  let cssClasses = `button ${mode}-button`;

  if (Icon) {
    cssClasses += ` icon-button`;
  }

  return (
    <>
      <button className={cssClasses} {...props}>
        {children}
      </button>
    </>
  );
}
