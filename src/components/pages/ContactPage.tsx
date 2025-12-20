import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Get In Touch
          </motion.h1>
          <motion.p
            className="font-paragraph text-lg md:text-xl text-light-gray/90 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to learn more about our productions? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl text-secondary mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-paragraph text-base text-light-gray/90 mb-2 block">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark-gray/20 border-light-gray/20 text-secondary focus:border-primary h-12"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-paragraph text-base text-light-gray/90 mb-2 block">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark-gray/20 border-light-gray/20 text-secondary focus:border-primary h-12"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="font-paragraph text-base text-light-gray/90 mb-2 block">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-dark-gray/20 border-light-gray/20 text-secondary focus:border-primary h-12"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-paragraph text-base text-light-gray/90 mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-dark-gray/20 border-light-gray/20 text-secondary focus:border-primary min-h-[160px]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph text-base px-8 py-6 h-auto w-full md:w-auto"
                  disabled={submitted}
                >
                  {submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>

                {submitted && (
                  <motion.p
                    className="font-paragraph text-base text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl text-secondary mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/30 flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">Email</h3>
                    <a
                      href="mailto:info@ullimforce.com"
                      className="font-paragraph text-base text-light-gray/90 hover:text-primary transition-colors"
                    >
                      info@ullimforce.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/30 flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">Phone</h3>
                    <a
                      href="tel:+82-2-1234-5678"
                      className="font-paragraph text-base text-light-gray/90 hover:text-primary transition-colors"
                    >
                      +82-2-1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/30 flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">Office</h3>
                    <p className="font-paragraph text-base text-light-gray/90">
                      Seoul, South Korea
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-gray/20 p-8 border-l-4 border-primary">
                <h3 className="font-heading text-2xl text-secondary mb-4">Business Inquiries</h3>
                <p className="font-paragraph text-base text-light-gray/90 leading-relaxed mb-4">
                  For partnership opportunities, production collaborations, or media inquiries, please reach out to our business development team.
                </p>
                <p className="font-paragraph text-base text-light-gray/90">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-dark-gray/20">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl text-secondary mb-6">Visit Our Office</h2>
            <p className="font-paragraph text-lg text-light-gray/90 mb-8">
              Located in the heart of Seoul, our office is open for scheduled visits and meetings.
            </p>
            <div className="aspect-video bg-dark-gray/40 flex items-center justify-center border border-light-gray/10">
              <MapPin size={48} className="text-primary/40" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
