import { IconedTextFieldProps } from "./@types/iconedTextField.propsType";

export default function IconedTextField(props: IconedTextFieldProps) {
  return (
    <div className="relative flex flex-row-reverse items-center ">
      <button
        className="bg-theme-gray-3 px-4 py-3.5 rounded-s-lg absolute top-0 left-0 focus:outline-none bg-[#f5f5f5]"
        onClick={props.onIconClicked}
        disabled={props.disabledIcon || false}
        type="button"
      >
        {props.icon}
      </button>
      <input
        {...props}
        className={`bg-theme-gray-3 pr-5 pl-16 py-3.5 w-full rounded-lg inline-block shadow-none transition-all active:outline-none outline-none focus:outline-none focus:shadow-md ${props.className}`}
      />
    </div>
  );
}
