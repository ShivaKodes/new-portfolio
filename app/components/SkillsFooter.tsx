interface SkillsFooterProps{
  text:string
}

export default function Skillsfooter({ text }:SkillsFooterProps) {
  return (
    <p
      className={`relative after:absolute after:w-2 after:h-2 after:bg-lime 
     after:rounded-full after:bottom-[6px] after:mx-3 `}
    >
      {text}
    </p>
  );
}
