interface SkillBadgeProps {
  name: string;
  icon: string;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <div
      className="flex items-center gap-2 rounded-md pl-1 pr-3 py-1 text-sm font-bold text-change shadow-lg shadow-text-black/50 dark:shadow-text-white/50 border-1 dark:border-text-white border-text-black">
      <span className="flex items-center justify-center background-change p-1 rounded">
        <img src={icon} alt={`${name} icon`} className="h-15 w-15" />
      </span>
      <span>{name.toUpperCase()}</span>
    </div>
  );
}

export default SkillBadge;