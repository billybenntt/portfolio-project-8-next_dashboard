import { IconDashboard } from '@/assets/icons';

function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white duration-200 hover:text-zinc-400`}
    >
      <IconDashboard />
      <p className="p-1 text-lg md:text-2xl">Next Dashboard</p>
    </div>
  );
}

export default AcmeLogo;
