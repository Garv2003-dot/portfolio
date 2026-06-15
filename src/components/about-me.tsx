import { Target, BookOpen, BrainCircuit, ServerCrash, Blocks, Workflow } from 'lucide-react';

export function AboutMe() {
  return (
    <section id="about" className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">About Me</h2>
          <p className="text-sm font-mono text-white/40 tracking-widest uppercase mt-2">The person behind the code</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Philosophy & Interests */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl space-y-4">
            <Target className="text-pink-500" size={24} />
            <h3 className="text-2xl font-bold text-white">Engineering Philosophy</h3>
            <p className="text-lg text-white/80 font-medium leading-relaxed">
              I build fault-tolerant systems that abstract away complexity. My focus has shifted from simply designing interfaces to architecting the intelligent engines that power them. I believe that integrating AI should enhance deterministic business logic, never compromise it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-3">
              <BrainCircuit className="text-indigo-400" size={20} />
              <h4 className="text-lg font-bold text-white">Current Focus</h4>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                Deepening expertise in LLM-as-a-router patterns, utilizing the Gemini API for intent extraction, and building edge-deployed monorepos.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-3">
              <BookOpen className="text-emerald-400" size={20} />
              <h4 className="text-lg font-bold text-white">Continuous Learning</h4>
              <p className="text-sm text-white/70 font-medium leading-relaxed">
                I strictly alternate my learning between system architecture and non-technical frameworks, actively studying behavioral economics and cognitive mnemonic techniques to improve my problem-solving models.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Capabilities */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent border border-white/5 p-8 rounded-3xl h-full flex flex-col">
            
            <div className="flex items-center gap-3 mb-8">
              <Blocks className="text-indigo-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Core Capabilities</h3>
            </div>
            
            <div className="space-y-6 flex-1">
              
              {/* Capability 1 */}
              <div className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <BrainCircuit className="text-blue-400" size={18} />
                  <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">AI-Driven Workflows</h4>
                </div>
                <p className="text-sm text-white/70 font-medium leading-relaxed">
                  Integrating LLMs (Gemini, Claude) as routing engines to parse unstructured data into strictly validated JSON schemas, backed by deterministic database fallbacks.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Workflow className="text-pink-400" size={18} />
                  <h4 className="font-bold text-white group-hover:text-pink-400 transition-colors">B2B SaaS Architecture</h4>
                </div>
                <p className="text-sm text-white/70 font-medium leading-relaxed">
                  Designing secure, multi-tenant applications using Next.js and PostgreSQL, implementing strict JWT-based Role-Based Access Control (RBAC) and data isolation.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <ServerCrash className="text-emerald-400" size={18} />
                  <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors">High-Performance Pipelines</h4>
                </div>
                <p className="text-sm text-white/70 font-medium leading-relaxed">
                  Offloading server bottlenecks by engineering edge-computed rendering, browser-native hardware integrations, and direct client-to-cloud S3 upload streams.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
