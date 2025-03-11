type ButtonProps = {
  isLoading: boolean;
  onClick: () => void;
  title: string;
};
export default function Button({ isLoading, onClick, title }: ButtonProps) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`${
        isLoading ? "cursor-not-allowed " : "cursor-pointer"
      } w-full  bg-blue-500 text-white p-2  items-center flex flex-row justify-center`}
    >
      {isLoading ? <div className="loader text-center"></div> : title}
    </button>
  );
}
