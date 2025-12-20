// HPI 1.6-V
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Globe, Award, ChevronDown } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';

// --- Types ---
interface Performance {
  _id: string;
  title?: string;
  synopsis?: string;
  mainImage?: string;
  genre?: string;
  productionYear?: number;
  performanceDate?: Date | string;
}

// --- Components ---

// Mandatory AnimatedElement for scroll reveals
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via setTimeout if needed, or just let CSS handle it
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-1000 ease-out ${className || ''}`}>{children}</div>;
};

// Custom Marquee Component
const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="relative flex overflow-hidden py-6 bg-primary text-white">
      <div className="animate-marquee whitespace-nowrap flex gap-8">
        {Array(10).fill(text).map((item, i) => (
          <span key={i} className="text-2xl font-heading font-bold uppercase tracking-widest mx-4">
            {item}
          </span>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8">
        {Array(10).fill(text).map((item, i) => (
          <span key={i} className="text-2xl font-heading font-bold uppercase tracking-widest mx-4">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  const [featuredPerformances, setFeaturedPerformances] = useState<Performance[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Data Fidelity Protocol: Fetching Data
  useEffect(() => {
    const fetchPerformances = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Performance>('performances');
        setFeaturedPerformances(items.slice(0, 3));
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to fetch performances", error);
      }
    };
    fetchPerformances();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-clip selection:bg-primary selection:text-white">
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 45s linear infinite;
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: useTransform(scrollYProgress, [0, 0.2], [1.1, 1.2]) }}
        >
          <Image
            src="https://static.wixstatic.com/media/87347d_5b93acb25d0c47b89a2ed9675a015baf~mv2.png?originWidth=1920&originHeight=1024"
            alt="Atmospheric dark stage with dramatic lighting"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
          <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/87347d_c4cacfaa66b4447885adbc9c7ae570c1~mv2.png?originWidth=1920&originHeight=1024')] opacity-[0.03] mix-blend-overlay" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-16 flex flex-col justify-end h-full pb-32">
          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-primary font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4"
            >
              <span className="h-[1px] w-12 bg-primary inline-block"></span>
              The UllimForce Production
            </motion.p>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              THE ULLIM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">FORCE</span>
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 overflow-hidden">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/productions">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-8 text-lg font-medium tracking-wide transition-all hover:pl-12 group">
                  작품 보기
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-400 max-w-md font-paragraph leading-relaxed border-l border-gray-800 pl-6"
            >
              우리는 단순한 극단이 아닙니다. 전 세계적으로 울려 퍼지는 세계 수준의 연극 경험을 창작하는 프리미엄 제작사입니다.
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="animate-bounce w-4 h-4" />
        </motion.div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <section className="bg-background border-y border-white/10 relative z-20">
        <Marquee text="창작 작품 • 글로벌 배포 • 창의적 우수성 • " />
      </section>

      {/* --- PHILOSOPHY / STICKY SECTION --- */}
      <section className="relative py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky Title */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <AnimatedElement>
                  <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-none">
                    더<br />
                    <span className="text-primary">울림</span><br />
                    포스
                  </h2>
                  <div className="w-24 h-1 bg-white/20 mb-8"></div>
                  <p className="text-xl text-gray-400 font-paragraph">
                    기술, 서사, 규모를 통해 라이브 공연의 경계를 재정의합니다.
                  </p>
                </AnimatedElement>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:col-span-8 space-y-32">
              <AnimatedElement delay={200}>
                <div className="group relative aspect-video overflow-hidden mb-8 bg-dark-gray">
                  <Image 
                    src="https://static.wixstatic.com/media/87347d_085bb172fba34b0aa2b0a19c4a78bf91~mv2.png?originWidth=1280&originHeight=704" 
                    alt="제작 계획"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-heading text-white mb-2">제작 우수성</h3>
                    <p className="text-gray-300 max-w-lg">스크립트 개발부터 무대 디자인까지, 우리는 창의적 라이프사이클의 모든 측면을 정밀하게 관리합니다.</p>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <h3 className="text-4xl font-heading text-white mb-6">글로벌 스토리텔링</h3>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6">
                      우리의 서사는 국경을 초월합니다. 우리는 보편적인 인간의 감정에 호소하는 콘텐츠를 만들고, 국제 관객을 위해 설계된 시각적으로 놀라운 스펙터클로 포장합니다.
                    </p>
                    <ul className="space-y-4">
                      {['국제 라이센싱', '오리지널 IP 창작', '문화 간 적응'].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-primary mr-4"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 relative">
                     {/* User provided logo used contextually here */}
                    <div className="relative z-10 bg-dark-gray p-8 border border-white/10">
                        <Image 
                            src="https://static.wixstatic.com/media/87347d_c288e7f8852243518c785fa741df5d75~mv2.jpeg"
                            alt="UllimForce Official Logo"
                            className="w-full h-auto opacity-90"
                        />
                    </div>
                    <div className="absolute -inset-4 border border-primary/30 z-0"></div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCTIONS (Horizontal Scroll / Showcase) --- */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-16 mb-20 flex justify-between items-end">
          <AnimatedElement>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">포트폴리오</span>
            <h2 className="font-heading text-5xl md:text-6xl text-white">주요 작품</h2>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <Link to="/productions">
              <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded-none px-8 py-6">
                모든 작품 보기
              </Button>
            </Link>
          </AnimatedElement>
        </div>

        <div className="max-w-[120rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 gap-32">
            {featuredPerformances.map((performance, index) => (
              <AnimatedElement key={performance._id} delay={index * 100}>
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-3/5 relative">
                    <Link to={`/productions/${performance._id}`} className="block overflow-hidden relative aspect-[16/9]">
                      <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {performance.mainImage ? (
                        <Image
                          src={performance.mainImage}
                          alt={performance.title || 'Performance'}
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-dark-gray flex items-center justify-center">
                          <span className="text-white/20">No Image Available</span>
                        </div>
                      )}
                      {/* Hover Reveal Button */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                          <ArrowRight className="text-white w-8 h-8" />
                        </div>
                      </div>
                    </Link>
                    {/* Decorative Number */}
                    <div className={`absolute -top-12 ${index % 2 === 1 ? '-right-12' : '-left-12'} text-9xl font-heading font-black text-white/5 select-none z-0`}>
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-2/5 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 border border-white/20 text-xs uppercase tracking-wider text-white/70">
                        {performance.genre || 'Theatrical'}
                      </span>
                      {performance.productionYear && (
                        <span className="text-xs text-white/50 font-mono">
                          {performance.productionYear}
                        </span>
                      )}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                      <Link to={`/productions/${performance._id}`}>
                        {performance.title}
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-400 mb-8 line-clamp-3 leading-relaxed">
                      {performance.synopsis || "우리의 창의적 비전의 정점을 나타내는 스토리텔링과 시각적 웅장함의 걸작을 경험하세요."}
                    </p>
                    <Link to={`/productions/${performance._id}`} className="inline-flex items-center text-white font-medium hover:text-primary transition-colors group/link">
                      <span className="border-b border-white/30 pb-1 group-hover/link:border-primary transition-colors">세부 정보 확인</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS / IMPACT SECTION --- */}
      <section className="py-24 bg-background border-t border-white/5">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Productions", value: "25+", icon: Play },
              { label: "Global Awards", value: "14", icon: Award },
              { label: "Countries", value: "08", icon: Globe },
              { label: "Audience Reach", value: "1M+", icon: Star },
            ].map((stat, i) => (
              <AnimatedElement key={i} delay={i * 100} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <stat.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-gray-500">{stat.label}</div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://static.wixstatic.com/media/87347d_24e8710df4384994a90c1e9be8061391~mv2.png?originWidth=1920&originHeight=1024"
            alt="Curtain call"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedElement>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8">
              뭔가 특별한 것을 <br />
              <span className="text-stroke">만들 준비가 되셨나요?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              새로운 제작에 파트너로 참여하고 싶거나 우리의 작품을 당신의 극장으로 가져오고 싶다면, 우리는 협력할 준비가 되어 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-8 text-lg rounded-none min-w-[200px]">
                  문의하기
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-10 py-8 text-lg rounded-none min-w-[200px]">
                  우리의 이야기
                </Button>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}