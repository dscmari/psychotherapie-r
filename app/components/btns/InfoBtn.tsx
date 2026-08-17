type Props = {
  className?: string;
  content: string;
};

export default function InfoBtn({ className, content }: Props) {
  return (
    <button className={`block bg-sage !text-stone-light px-4 py-2 rounded-xl ${className}`}>
      {content}
    </button>
  );
}
