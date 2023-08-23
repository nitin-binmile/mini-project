

export const FeatureImage: React.FC = () => {
  return (
    <div className="w-[350px] lg:w-[600px] xl:w-[700px]  overflow-hidden ">
      <img src="assets/mobile.png" className="lg:hidden w-[100%]" />
      <img src="assets/desktop.png" className="hidden lg:flex w-[100%]" />
    </div>
  );
};
