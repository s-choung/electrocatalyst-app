import LightRays from './components/LightRays';
import GradientText from './components/GradientText';
import CountUp from './components/CountUp';

const reactions = [
  {
    id: 1,
    name: 'Oxygen Evolution Reaction',
    abbr: 'OER',
    count: 1247,
    colors: ['#60a5fa', '#3b82f6', '#60a5fa'],
    link: '/oer'
  },
  {
    id: 2,
    name: 'Oxygen Reduction Reaction',
    abbr: 'ORR',
    count: 892,
    colors: ['#f472b6', '#ec4899', '#f472b6'],
    link: '/orr'
  },
  {
    id: 3,
    name: 'Hydrogen Evolution Reaction',
    abbr: 'HER',
    count: 2156,
    colors: ['#34d399', '#10b981', '#34d399'],
    link: '/her'
  },
  {
    id: 4,
    name: 'CO2 Reduction Reaction',
    abbr: 'CO2RR',
    count: 673,
    colors: ['#fbbf24', '#f59e0b', '#fbbf24'],
    link: '/co2rr'
  },
  {
    id: 5,
    name: 'Nitrogen Reduction Reaction',
    abbr: 'NRR',
    count: 428,
    colors: ['#a78bfa', '#8b5cf6', '#a78bfa'],
    link: '/nrr'
  }
];

function App() {
  const lastUpdate = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Combined container for LightRays and all content */}
      <div className="absolute inset-0">
        {/* LightRays Background Canvas */}
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#3b82f6"
          raysSpeed={1.2}
          lightSpread={1.5}
          rayLength={2.5}
          pulsating={true}
          fadeDistance={1.2}
          saturation={0.9}
          followMouse={true}
          mouseInfluence={0.15}
        />

        {/* Header with timestamp */}
        <header className="absolute top-0 right-0 z-10 p-6 pointer-events-auto">
          <div className="text-sm text-gray-400">
            Last updated: {lastUpdate}
          </div>
        </header>

        {/* Main Content - Centered within canvas area */}
        <div className="absolute inset-0 z-5 flex items-center justify-center px-6 py-20 pointer-events-none">
          <div className="flex flex-col items-center pointer-events-auto">
            {/* Title */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-6xl font-bold md:text-7xl lg:text-8xl">
                <GradientText
                  colors={['#60a5fa', '#3b82f6', '#8b5cf6', '#60a5fa']}
                  animationSpeed={6}
                  showBorder={false}
                >
                  FORK Demo
                </GradientText>
              </h1>
              <p className="mt-6 text-xl text-gray-400">
                Explore computational workflows for electrocatalyst design
              </p>
            </div>

            {/* Reaction Buttons */}
            <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reactions.map((reaction) => (
                <button
                  key={reaction.id}
                  onClick={() => {
                    // Placeholder for navigation
                    console.log(`Navigating to ${reaction.link}`);
                    alert(`Workflow for ${reaction.name} coming soon!`);
                  }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:bg-gray-800/70 hover:shadow-2xl active:scale-100 cursor-pointer select-none"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20">
                    <div
                      className="h-full w-full"
                      style={{
                        background: `linear-gradient(135deg, ${reaction.colors.join(', ')})`
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="mb-4 text-5xl font-bold">
                      <GradientText
                        colors={reaction.colors}
                        animationSpeed={8}
                        showBorder={false}
                      >
                        {reaction.abbr}
                      </GradientText>
                    </div>

                    <h3 className="mb-4 text-lg font-semibold text-gray-200">
                      {reaction.name}
                    </h3>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        <CountUp
                          to={reaction.count}
                          from={0}
                          duration={2}
                          delay={0.2}
                        />
                      </span>
                      <span className="text-sm text-gray-500">catalysts</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 z-10 p-6 text-center text-sm text-gray-500 pointer-events-auto">
          <p>Computational Catalysis Research Platform</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
