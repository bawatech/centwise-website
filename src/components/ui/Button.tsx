type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2.5 rounded-lg font-medium transition
        bg-primary-600 text-white hover:bg-primary-700
        ${className}`}
    >
      {children}
    </button>
  );
}
