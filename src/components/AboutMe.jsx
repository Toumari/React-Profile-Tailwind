export default function AboutMe(props) {
  return (
    <div className="flex flex-col justify-center  sm:items-center sm:text-center bg-gray-900 text-white px-8 pt-8 leading-relaxed">
      <h4 className="text-xl sm:text-2xl  font-bold pb-2">{props.title}</h4>
      <p className="sm:max-w-md font-thin sm:text-lg sm:mt-2">{props.text}</p>
    </div>
  );
}
