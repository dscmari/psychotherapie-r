import Link from "next/link";

type Props = {
  className?:string  
  text: string;
  path: string
};

export default function TopicBtn({className, text, path }: Props) {
  return (
    <Link
      href={path}
      className={`!text-sage-brown bg-stone-50 border border-sage-brown px-4 py-2 font-semibold tracking-tight rounded-xl whitespace-nowrap hover:shadow-xl w-full lg:w-44 text-center ${className}`}
    >
      {text}
    </Link>
  );
}
