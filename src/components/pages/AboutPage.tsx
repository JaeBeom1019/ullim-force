import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: '우수성',
      description: '우리는 모든 제작에서 완벽을 추구하며, 작업의 모든 측면에서 최고의 품질을 보장합니다.',
    },
    {
      icon: Zap,
      title: '혁신',
      description: '우리는 최첨단 기술과 창의적인 접근 방식을 수용하여 연극 공연의 경계를 넓힙니다.',
    },
    {
      icon: Users,
      title: '협력',
      description: '우리는 팀워크의 힘을 믿으며, 재능 있는 예술가와 전문가들을 모아 마법을 창조합니다.',
    },
    {
      icon: Award,
      title: '영향력',
      description: '우리는 관객들에게 깊은 울림을 주고 지속적인 문화적 인상을 남기는 공연을 만듭니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-gray/40 to-background" />
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary"
            >
              About UllimForce
            </motion.h1>
            <motion.span
              className="font-paragraph text-lg text-light-gray/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Today, 9:30 PM
            </motion.span>
          </motion.div>
          <motion.p
            className="font-paragraph text-lg md:text-xl text-light-gray/90 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A leading production house dedicated to creating unforgettable theatrical experiences that captivate and inspire audiences worldwide.
          </motion.p>
        </div>
      </section>
      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-6">{"체계적인 시스템 위에서 피어나는 역동적인 드라마"}</h2>
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">{"극단 '더 울림포스'는 2022년 창작극 '어른 왕자'로 시작되어, 2025년 정식 출범한 종합 예술 프로덕션입니다. 우리는 배우, 연출, 극작 등 창작의 최전선부터 공학적 경영 지원에 이르기까지, 프로덕션의 A to Z를 아우르는 **'올인원(All-in-One) 시스템'**을 갖추고 있습니다. 예술가들의 뜨거운 직관이 현실적인 공학적 관리 시스템과 만나, 가장 효율적이면서도 완성도 높은 무대를 구현해냅니다."}</p>
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">{"이러한 탄탄한 제작 기반 위에서 우리는 인간 본성과 심리의 이면을 집요하게 탐구합니다. 대표작 '빈센트 반 카오스'가 조현병 환자의 시선을 통해 청년 소외 계층의 아픔을 판타지적 요소로 풀어냈듯, 우리는 인물의 복잡한 심리 변화를 역동적인 서사로 그려내는 데 주력합니다."}</p>
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">{"우리가 다루는 인간의 내면과 삶의 애환은 특정 문화를 넘어 전 세계 누구나 공감할 수 있는 보편적인 주제입니다. '더 울림포스'는 독창적인 스토리텔링과 안정적인 제작 역량을 바탕으로, 한국을 넘어 세계 관객에게 깊은 울림을 전하는 글로벌 극단으로 나아가겠습니다."}</p>

          </motion.div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-24 bg-dark-gray/20">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-6">
              우리 팀
            </h2>
            <p className="font-paragraph text-lg text-light-gray/90 max-w-3xl mx-auto">
              더 울림포스를 이끌어가는 창의적인 인재들을 만나보세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: '홍이빈',
                role: '극작가',
                image: 'https://static.wixstatic.com/media/87347d_8066327a18c54c1bb62c4cb9137ab3fd~mv2.png?originWidth=384&originHeight=384',
              },
              {
                name: '이찬빈',
                role: '극작가',
                image: 'https://static.wixstatic.com/media/87347d_82eb1312c07a4555917a06bfd3d1c610~mv2.png?originWidth=384&originHeight=384',
              },
              {
                name: '남혁준',
                role: '연출가',
                image: 'https://static.wixstatic.com/media/87347d_b2f3b883dd694d3681f1a1d9d0e1ccec~mv2.png?originWidth=384&originHeight=384',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-background/50 border border-dark-gray/30 overflow-hidden hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-square relative overflow-hidden bg-dark-gray/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-2xl text-secondary mb-2">{member.name}</h3>
                  <p className="font-paragraph text-base text-primary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-6">
              우리의 가치
            </h2>
            <p className="font-paragraph text-lg text-light-gray/90 max-w-3xl mx-auto">
              더 울림포스의 모든 활동을 이끄는 원칙들입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 bg-background/50 border border-dark-gray/30 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 border border-primary/30">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-secondary mb-4">{value.title}</h3>
                <p className="font-paragraph text-base text-light-gray/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
