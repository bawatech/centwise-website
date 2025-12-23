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
      className={`base-gradient text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-all font-semibold text-sm transform hover:-translate-y-0.5
        ${className}`}
    >
      {children}
    </button>
  );
}
