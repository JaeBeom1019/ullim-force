import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every production, ensuring the highest quality in all aspects of our work.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative approaches to push the boundaries of theatrical performance.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, bringing together talented artists and professionals to create magic.',
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'We create performances that resonate deeply with audiences and leave lasting cultural impressions.',
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://static.wixstatic.com/media/87347d_ded6d9a181de4e7eb662850e22e95a59~mv2.png?originWidth=1152&originHeight=896"
                alt="UllimForce production in progress"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="font-paragraph text-lg text-light-gray/90 max-w-3xl mx-auto">
              The principles that guide everything we do at UllimForce.
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

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-8">
                우리의 비전
              </h2>
              <p className="font-paragraph text-xl text-light-gray/90 leading-relaxed mb-6">
                2025년 작품 SHOOK을 시작으로 더 울림포스에 합류하게 된 남혁준 연출가와 함께 앞으로는 기존의 창작 작품에 더해 해외수상경력 작품의 라이센스를 정식 취득하고 직접 번역해 매년 2회 이상 연극 공연을 올릴 계획을 가지고 있습니다.
              </p>
              <p className="font-paragraph text-lg text-light-gray/80 leading-relaxed">
                우리는 창의성을 육성하고 예술적 우수성을 지원하며 시간의 시험을 견디는 작품을 제공하기 위해 최선을 다하고 있습니다.
              </p>
            </motion.div>
          </div>
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
              극단 구성원
            </h2>
            <p className="font-paragraph text-lg text-light-gray/90 max-w-3xl mx-auto">
              더 울림포스를 이끌어가는 창의적인 리더들
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 bg-background/50 border border-dark-gray/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-2">홍이빈</h3>
              <p className="text-primary font-bold mb-4">대표 / 극작 / 배우</p>
              <p className="font-paragraph text-base text-light-gray/80 leading-relaxed mb-4">
                안양예술고등학교 연극영화과(졸업), 서경대학교 뮤지컬과 (중퇴)
              </p>
              <p className="font-paragraph text-sm text-light-gray/70 leading-relaxed">
                더 울림포스의 대표로 극작과 배우를 겸하고 있으며, 빈센트 반 카오스의 초연 당시 연출도 겸했습니다. 이찬빈 연출의 PROJECT - ULLIM를 이어받아 정식 극단 The UllimForce로 창단하였습니다.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-background/50 border border-dark-gray/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-2">이찬빈</h3>
              <p className="text-primary font-bold mb-4">극작 / 연출</p>
              <p className="font-paragraph text-base text-light-gray/80 leading-relaxed mb-4">
                Vancouver Film School (벤쿠버 필름 스쿨) 졸업
              </p>
              <p className="font-paragraph text-sm text-light-gray/70 leading-relaxed">
                어른왕자의 극작 / 연출가로 비공식 단체 [PROJECT - ULLIM]의 창립자. 현재는 벤쿠버 필름 스쿨을 졸업하고 영화감독을 준비하며 필름 스쿨 교내 조교로 활동을 이어나가고 있습니다.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-background/50 border border-dark-gray/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-2">남혁준</h3>
              <p className="text-primary font-bold mb-4">연출</p>
              <p className="font-paragraph text-base text-light-gray/80 leading-relaxed mb-4">
                중앙대학교 공연영상창작학부 연출전공 졸업
              </p>
              <p className="font-paragraph text-sm text-light-gray/70 leading-relaxed">
                SHOOK의 정식 라이센스 취득하여 더 울림포스의 연출가로 합류하였으며, 한국에서 공연되지 않은 해외 수상작을 찾아 직접 번역하여 공연을 올리고 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
