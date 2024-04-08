const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="h-8 w-8 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold">
      {name[0].toUpperCase()}
    </div>
  );
};

export default Avatar;
