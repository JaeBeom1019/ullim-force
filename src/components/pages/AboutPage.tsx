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
          <motion.h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About UllimForce
          </motion.h1>
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
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-6">
              우리의 이야기
            </h2>
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">
              극단 '더 울림포스'는 2022년 8월 6일~7일 [PROJECT - ULLIM]의 이름으로 창작 작품 '어른 왕자'로 시작되어, 2025년 1월 17일에 [더 울림포스]의 이름으로 사업자 등록이 완료된 정식 극단입니다.
            </p>
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">
              더 울림포스는 2025년까지 극단의 특성을 나타낼 수 있는 창작 작품으로 활동을 이어나가고 있습니다. 홍이빈 극작가와 이찬빈 극작가는 인간의 본성과 이면성에 관심을 가지고 극적인 상황 속 존재하는 인물의 다양한 심리 변화에 따른 역동적인 전개가 글의 특징입니다.
            </p>
            <p className="font-paragraph text-lg text-light-gray/90 leading-relaxed">
              대표적으로 '빈센트 반 카오스'에서 자신을 빈센트 반 고흐라고 착각하는 조현병 환자 송준우라는 인물을 다루며, 청년소외계층의 빠져나올 수 없는 늪 같은 삶의 애환을 판타지적인 요소를 통해 역동적으로 표현해냈습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        {/* ... keep existing code (story) */}
      </section>

      {/* Mission Section */}
      <section className="py-24">
        {/* ... keep existing code (mission) */}
      </section>

      {/* Team Section */}
      <section className="py-24 bg-dark-gray/20">
        {/* ... keep existing code (team) */}
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
