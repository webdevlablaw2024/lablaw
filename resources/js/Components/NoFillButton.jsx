export default function NoFillButton({ className = '', disabled, children, ...props }) {
  return (
      <button
          {...props}
          className={
              `inline-flex items-center px-4 py-2 border-2 rounded-md font-semibold text-xs text-black uppercase tracking-widest hover:bg-gray-300 focus:bg-gray-00 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 ${
                  disabled && 'opacity-25'
              } ` + className
          }
          disabled={disabled}
      >
          {children}
      </button>
  );
}
