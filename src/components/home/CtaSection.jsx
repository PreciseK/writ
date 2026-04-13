import { useNavigate } from 'react-router-dom';
import { BackgroundPaths } from '@/components/ui/background-paths';

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <BackgroundPaths title="Let's discuss your delivery needs">
      <div
        className="inline-block group relative bg-gradient-to-b from-white/10 to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <button
          onClick={() => navigate('/contact')}
          className="rounded-[1.15rem] px-8 py-4 text-[16px] font-medium backdrop-blur-md bg-white/95 hover:bg-white text-black transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 hover:shadow-md flex items-center gap-3"
        >
          <span className="opacity-90 group-hover:opacity-100 transition-opacity">Book a Call</span>
          <span className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">→</span>
        </button>
      </div>
    </BackgroundPaths>
  );
};

export default CtaSection;
