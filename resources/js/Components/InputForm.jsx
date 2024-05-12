export default function InputForm(props) {
  return  (
    <div className="mb-5">
      <label
        htmlFor={props.id}
        className="block text-lg font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          {...props}
          className="shadow-md p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Input text"
        />
      </div>
    </div>
  );
}