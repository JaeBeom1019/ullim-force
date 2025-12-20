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
                Our Story
              </h2>
              <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">
                UllimForce was founded with a singular vision: to transform the theatrical landscape by producing world-class performances that push creative boundaries and captivate audiences.
              </p>
              <p className="font-paragraph text-lg text-light-gray/90 mb-6 leading-relaxed">
                As a production house, we specialize in bringing together exceptional talent, innovative storytelling, and cutting-edge production techniques to create performances that resonate on a profound level.
              </p>
              <p className="font-paragraph text-lg text-light-gray/90 leading-relaxed">
                Our commitment to excellence has established us as a trusted name in the entertainment industry, known for delivering productions that exceed expectations and create lasting cultural impact.
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
                Our Mission
              </h2>
              <p className="font-paragraph text-xl text-light-gray/90 leading-relaxed mb-6">
                To create theatrical productions that transcend entertainment and become transformative experiences, inspiring audiences and enriching cultural landscapes worldwide.
              </p>
              <p className="font-paragraph text-lg text-light-gray/80 leading-relaxed">
                We are committed to fostering creativity, supporting artistic excellence, and delivering productions that stand the test of time.
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
              Our Approach
            </h2>
            <p className="font-paragraph text-lg text-light-gray/90 max-w-3xl mx-auto">
              From concept to curtain call, we bring together the best talent and resources to create exceptional theatrical experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 bg-background/50 border-l-4 border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-4">Creative Development</h3>
              <p className="font-paragraph text-base text-light-gray/80 leading-relaxed">
                We work closely with writers, directors, and creative teams to develop compelling narratives and innovative production concepts.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-background/50 border-l-4 border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-4">Production Excellence</h3>
              <p className="font-paragraph text-base text-light-gray/80 leading-relaxed">
                Our production teams utilize state-of-the-art technology and meticulous attention to detail to bring visions to life.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-background/50 border-l-4 border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading text-2xl text-secondary mb-4">Audience Engagement</h3>
              <p className="font-paragraph text-base text-light-gray/80 leading-relaxed">
                We create performances that connect with audiences on an emotional level, ensuring memorable and impactful experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
