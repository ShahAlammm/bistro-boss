const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="m-10 md:w-4/12 text-center mx-auto mt-24">
      <p className="text-[#D99904] text-lg m-2">--- <span className="italic font-serif">{subHeading}</span> ---</p>
      <h3 className="text-3xl uppercase border-y-2 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
