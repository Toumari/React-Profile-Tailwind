export default function Skill(props) {
  return (
    <div className="sm:max-w-md flex flex-col justify-center sm:m-auto px-8 sm:w-full sm:pt-2 pb-8">
      <h1 className="text-white text-base mb-3 sm:text-center">
        {props.skillName}
      </h1>
      <div className="w-full bg-gray-200 rounded-full ">
        <div
          className="bg-amber-600 text-xs font-medium h-3 leading-none rounded-l-full"
          style={{ width: props.width + "%" }}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}
