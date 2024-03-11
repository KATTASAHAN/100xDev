const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center gap-4 px-20">
      <div className="font-bold text-3xl">
        "The customer service I received was exceptional. The support team went
        above and beyond to address my concerns."
      </div>
      <div>
        <div className="font-bold text-xl">Jules Winnfield</div>
        <div className="font-semibold text-slate-700">CEO, Acme Inc</div>
      </div>
    </div>
  );
};

export default Quote;
