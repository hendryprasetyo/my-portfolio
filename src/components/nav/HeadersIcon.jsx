function HeadersIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer sm:px-5 md:px-10 sm:h-14  md:hover:bg-gray-300 rounded-xl active:border-b-2  active:border-blue-500 group">
      <Icon
        className={`h-5 text-gray-500 text-center md:h-6 text-[40px] md:text-[22px] lg:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeadersIcon;
