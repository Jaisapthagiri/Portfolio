const Li = ({ to, label, className = '' }) => {
  const baseClass =
    "text-blue-500 text-xl hover:text-gray-500/80 transition cursor-pointer font-bold";

  return (
    <li>
      <a href={to} className={`${baseClass} ${className}`}>
        {label}
      </a>
    </li>
  );
};

export default Li;
