import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PressPage() {
  const pressReleases = [
    {
      title: '어른 왕자',
      year: '2022',
      description: '극단 더 울림포스의 첫 창작 작품으로, PROJECT - ULLIM의 이름으로 시작된 기념비적인 공연입니다.',
      links: [
        {
          text: '보도자료 보기',
          url: 'https://sports.khan.co.kr/article/202207281838003?pt=nv&utm_source=urlCopy&utm_medium=social&utm_campaign=sharing'
        }
      ]
    },
    {
      title: '빈센트 반 카오스',
      year: '2024',
      description: '자신을 빈센트 반 고흐라고 착각하는 조현병 환자 송준우의 이야기를 통해 청년소외계층의 삶의 애환을 판타지적 요소로 표현한 작품입니다.',
      links: [
        {
          text: '보도자료 보기',
          url: 'https://sports.khan.co.kr/article/202402292215003?pt=nv&utm_source=urlCopy&utm_medium=social&utm_campaign=sharing'
        }
      ]
    },
    {
      title: '빈센트 반 카오스 (재연)',
      year: '2025',
      description: '2024년 호평을 받은 빈센트 반 카오스의 재연 공연으로, 더욱 완성도 높은 무대를 선보입니다.',
      links: [
        {
          text: '보도자료 1',
          url: 'http://www.ikoreanspirit.com/news/articleView.html?idxno=78639'
        },
        {
          text: '보도자료 2',
          url: 'https://www.abcn.kr/news/articleView.html?idxno=78036'
        }
      ]
    },
    {
      title: '블러드 비즈니스',
      year: '2023',
      description: '극단의 창작 작품으로 인간의 본성과 이면성을 탐구하는 작품입니다.'
    },
    {
      title: 'SHOOK (슉)',
      year: '2025',
      description: '남혁준 연출가가 정식 라이센스를 취득하여 연출한 작품으로, 더 울림포스의 새로운 방향을 제시합니다.'
    }
  ];

  const upcomingProductions = [
    {
      title: 'Take Me Out',
      year: '2026',
      date: '3월 5일 ~ 3월 19일',
      status: '극장 대관 완료',
      description: '해외 수상경력 작품으로, 남혁준 연출가가 직접 번역하여 선보이는 작품입니다.'
    },
    {
      title: '빈센트 반 카오스 (재연)',
      year: '2026',
      date: '9월 ~ 10월 (예정)',
      description: '인기 작품의 또 다른 재연 공연입니다.'
    }
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
            보도자료 및 작품 활동
          </motion.h1>
          <motion.p
            className="font-paragraph text-lg md:text-xl text-light-gray/90 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            극단 더 울림포스의 창작 작품과 보도자료를 확인하세요. 2022년부터 현재까지 4년간의 꾸준한 활동 기록입니다.
          </motion.p>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-4">
              작품 활동 기록
            </h2>
            <p className="text-light-gray/80">매년 1회 이상의 작품 활동으로 꾸준한 성장을 이어가고 있습니다.</p>
          </motion.div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                className="p-8 bg-dark-gray/20 border border-dark-gray/30 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="font-heading text-2xl md:text-3xl text-secondary">
                        {release.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded">
                        {release.year}
                      </span>
                    </div>
                    <p className="font-paragraph text-light-gray/80 leading-relaxed mb-4">
                      {release.description}
                    </p>
                    {release.links && release.links.length > 0 && (
                      <div className="flex flex-wrap gap-4">
                        {release.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white transition-colors rounded"
                          >
                            {link.text}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Productions Section */}
      <section className="py-24 bg-dark-gray/20">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-4">
              예정 작품
            </h2>
            <p className="text-light-gray/80">앞으로 선보일 더 울림포스의 새로운 작품들입니다.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingProductions.map((production, index) => (
              <motion.div
                key={production.title}
                className="p-8 bg-background/50 border border-dark-gray/30 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-2xl text-secondary">
                    {production.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded">
                    {production.year}
                  </span>
                </div>
                <p className="text-primary font-bold mb-2">{production.date}</p>
                {production.status && (
                  <p className="text-sm text-light-gray/70 mb-4">
                    상태: <span className="text-primary font-bold">{production.status}</span>
                  </p>
                )}
                <p className="font-paragraph text-light-gray/80 leading-relaxed">
                  {production.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Summary Section */}
      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-8 text-center">
              극단의 비전
            </h2>
            <div className="space-y-6 text-light-gray/80 font-paragraph text-lg leading-relaxed">
              <p>
                2025년 작품 SHOOK을 시작으로 더 울림포스에 합류하게 된 남혁준 연출가와 함께, 앞으로는 기존의 창작 작품에 더해 해외수상경력 작품의 라이센스를 정식 취득하고 직접 번역해 매년 2회 이상 연극 공연을 올릴 계획을 가지고 있습니다.
              </p>
              <p>
                극단 더 울림포스는 인간의 본성과 이면성에 관심을 가지고, 극적인 상황 속 존재하는 인물의 다양한 심리 변화에 따른 역동적인 전개를 통해 관객들의 마음을 울리는 작품을 만들어갑니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
