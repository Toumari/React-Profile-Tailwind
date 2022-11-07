import heroImage from "../assets/profile.jpg";

export default function HeroImage() {
  return (
    <div className="bg-gray-900">
      <div className="img-container flex items-center justify-center">
        <img
          className="border-solid border-2 border-amber-600 rounded-full mt-8 mb-4  h-48 sm:h-72 sm:mb-5  sm:mt-12 object-cover "
          src={heroImage}
          alt="hero"
        />
      </div>
    </div>
  );
}
