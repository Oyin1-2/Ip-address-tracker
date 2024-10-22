function Details({isp, location, ipAddress, timezone}) {
  return (
    <div className="w-full h-full bg-white lg:grid grid-cols-4 grid-rows-1 px-8 gap-5 py-5">
      <div className="w-full h-full text-center lg:text-left  lg:border-r pt-4 border-[#08080850] space-y-3">
        <p className="text-[#020101] text-xs font-bold tracking-wider">
          IP Adress
        </p>
        <h3 className="font-bold text-2xl max-w-[70%]">{ipAddress}</h3>
      </div>
      <div className="w-full h-full text-center lg:text-left  lg:border-r pt-4 border-[#08080850] space-y-3">
        <p className="text-[#020101] text-xs font-bold tracking-wider">
          Location
        </p>
        <h3 className="font-bold text-2xl">{location}</h3>
      </div>
      <div className="w-full h-full text-center lg:text-left  lg:border-r pt-4 border-[#08080850] space-y-3">
        <p className="text-[#020101] text-xs font-bold tracking-wider">
          Timezone
        </p>
        <h3 className="font-bold text-2xl">{timezone}</h3>
      </div>
      <div className="w-full h-full text-center lg:text-left  pt-4  space-y-3">
        <p className="text-[#020101] text-xs font-bold tracking-wider">ISP</p>
        <h3 className="font-bold text-2xl">{isp}</h3>
      </div>
    </div>
  );
}

export default Details;
