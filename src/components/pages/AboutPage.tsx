import { motion } from 'framer-motion';
// Image 컴포넌트는 더 이상 쓰지 않으므로 import에서 제거해도 됩니다.
// import { Image } from '@/components/ui/image'; 
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

  // [수정 1] 새로운 멤버 데이터 배열 정의 (이미지 제거, 학력/소개 추가)
  const teamMembers = [
    {
      name: '홍이빈',
      role: '대표 / 극작 / 배우',
      education: '안양예술고등학교 연극영화과(졸업), 서경대학교 뮤지컬과 (중퇴)',
      bio: '더 울림포스의 대표로 극작과 배우를 겸하고 있으며, 빈센트 반 카오스의 초연 당시 연출도 겸했습니다. 이찬빈 연출의 PROJECT - ULLIM를 이어받아 정식 극단 The UllimForce로 창단하였습니다.',
    },
    {
      name: '이찬빈',
      role: '극작 / 연출',
      education: 'Vancouver Film School (벤쿠버 필름 스쿨) 졸업',
      bio: '어른왕자의 극작 / 연출가로 비공식 단체 [PROJECT - ULLIM]의 창립자. 현재는 벤쿠버 필름 스쿨을 졸업하고 영화감독을 준비하며 필름 스쿨 교내 조교로 활동을 이어나가고 있습니다.',
    },
    {
      name: '남혁준',
      role: '연출',
      education: '중앙대학교 공연영상창작학부 연출전공 졸업',
      bio: 'SHOOK의 정식 라이센스 취득하여 더 울림포스의 연출가로 합류하였으며, 한국에서 공연되지 않은 해외 수상작을 찾아 직접 번역하여 공연을 올리고 있습니다.',
    },
    {
      name: '조재범',
      role: 'PM',
      // [수정 포인트] 콤마 제거 후 \n 추가
      education: '서울대학교 공과대학(졸업)\n서울대학교 에너지시스템공학부 (재학)',
      bio: '극단의 살림을 맡아 기획부터 현장 운영까지 제작 과정의 전반을 두루 살피고 있습니다. 이성적인 판단이 필요한 실무의 영역을 도맡아 정리하며, 무대 위의 열정이 흔들리지 않고 온전히 관객에게 닿을 수 있도록 보이지 않는 곳에서 묵묵히 서포트합니다.',
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
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed font-bold">{"극단 '더 울림포스'는 2022년 창작극 '어른 왕자'로 시작되어, 2025년 정식 출범한 종합 예술 프로덕션입니다. 우리는 배우, 연출, 극작 등 창작의 최전선부터 공학적 경영 지원에 이르기까지, 프로덕션의 A to Z를 아우르는 올인원(All-in-One) 시스템을 갖추고 있습니다. 예술가들의 뜨거운 직관이 현실적인 공학적 관리 시스템과 만나, 가장 효율적이면서도 완성도 높은 무대를 구현해냅니다."}</p>
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">{"이러한 탄탄한 제작 기반 위에서 우리는 인간 본성과 심리의 이면을 집요하게 탐구합니다. 대표작 '빈센트 반 카오스'가 조현병 환자의 시선을 통해 청년 소외 계층의 아픔을 판타지적 요소로 풀어냈듯, 우리는 인물의 복잡한 심리 변화를 역동적인 서사로 그려내는 데 주력합니다."}</p>
            <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">{"우리가 다루는 인간의 내면과 삶의 애환은 특정 문화를 넘어 전 세계 누구나 공감할 수 있는 보편적인 주제입니다. '더 울림포스'는 독창적인 스토리텔링과 안정적인 제작 역량을 바탕으로, 한국을 넘어 세계 관객에게 깊은 울림을 전하는 글로벌 극단으로 나아가겠습니다."}</p>
          </motion.div>
        </div>
      </section>

      {/* [수정 2] Team Section: 이미지를 제거하고 텍스트 중심의 카드로 변경 */}
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
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="p-8 bg-background/50 border border-dark-gray/30 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* 이름 */}
                <h3 className="font-heading text-2xl text-secondary mb-2">
                  {member.name}
                </h3>
                {/* 직책 (강조) */}
                <p className="text-primary font-bold mb-4">
                  {member.role}
                </p>
                {/* [수정 2] whitespace-pre-line 클래스 추가 (줄바꿈 적용) */}
                <p className="font-paragraph text-base text-light-gray/80 leading-relaxed mb-4 whitespace-pre-line">
                  {member.education}
                </p>
                {/* 학력 (본문 스타일) */}
                <p className="font-paragraph text-base text-light-gray/80 leading-relaxed mb-4">
                  {member.education}
                </p>
                {/* 상세 소개 (작은 텍스트) */}
                <p className="font-paragraph text-sm text-light-gray/70 leading-relaxed">
                  {member.bio}
                </p>
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