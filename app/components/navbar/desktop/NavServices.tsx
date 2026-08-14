import Link from "next/link";

const NavServices = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 underline-offset-4">
          {/* <h3 className="text-xl  mb-2 font-medium">Google Platz 1</h3> */}
          <Link
            href="/#/" 
            className="font-semibold hover:underline"
  
          >
            Verhaltenstherapie
          </Link>
          <Link
            href="/#/"
            className="font-semibold hover:underline"
          >
            Traumatherapie
          </Link>
          <Link
            href="/#/"
            className="font-semibold hover:underline"
          >
           Psychologische Begleitung bei Krebs und anderen körperlichen Erkrankungen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavServices;
