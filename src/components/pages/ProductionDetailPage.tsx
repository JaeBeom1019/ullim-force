import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState, useRef } from 'react';
import { BaseCrudService } from '@/integrations';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Film, Users, Video, ChevronLeft, ChevronRight } from 'lucide-react';

interface Performance {
  _id: string;
  title?: string;
  synopsis?: string;
  mainImage?: string;
  genre?: string;
  productionYear?: number;
  performanceDate?: Date | string;
  cast?: string;
  director?: string;
  runningTime?: number;
  trailerUrl?: string;
}

export default function ProductionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [performance, setPerformance] = useState<Performance | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Gallery images for Vincent Van Chaos
  const vincentGalleryImages = [
    'https://static.wixstatic.com/media/87347d_84d6eeb665194dc7a191b67331bd0f68~mv2.jpg',
    'https://static.wixstatic.com/media/87347d_1c49a83456a040f9969bd2dc729ffe52~mv2.jpg',
    'https://static.wixstatic.com/media/87347d_d621f43a5c354737acdbe5443be674fa~mv2.jpg',
    'https://static.wixstatic.com/media/87347d_b5216d43ec014cc1a7cfbdd59180aeeb~mv2.jpg',
    'https://static.wixstatic.com/media/87347d_5af27eae8c8c4c4c82b082c19fb6521f~mv2.jpg',
    'https://static.wixstatic.com/media/87347d_4c86651edbd143069819c8ce9d7c9f25~mv2.jpg',
    'https://static.wixstatic.com/media/87347d_5af56382acc745a59f0c7b2f0853ac10~mv2.jpg',
    'https://static.wixstatic.com/media/87347d_cf559a2497d647a6bd447bcc96787530~mv2.jpg',
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const fetchPerformance = async () => {
      if (!id) return;
      try {
        const item = await BaseCrudService.getById<Performance>('performances', id);
        setPerformance(item);
      } catch (error) {
        console.error('Error fetching performance:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPerformance();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-paragraph text-lg text-light-gray">Loading...</p>
        </div>
      </div>
    );
  }

  if (!performance) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="font-heading text-4xl text-secondary mb-4">Production Not Found</h1>
          <Link to="/productions">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph text-base px-8 py-6 h-auto mt-4">
              <ArrowLeft className="mr-2" size={20} />
              Back to Productions
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative pt-20 h-[70vh] min-h-[600px] overflow-hidden">
        {performance.mainImage && (
          <>
            <Image
              src={performance.mainImage}
              alt={performance.title || 'Performance'}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <Link to="/productions">
              <Button
                variant="outline"
                className="border-secondary/50 text-secondary hover:bg-secondary/10 font-paragraph text-sm mb-6"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to Productions
              </Button>
            </Link>
            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl text-secondary mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {performance.title}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-4 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {performance.genre && (
                <span className="font-paragraph text-lg text-primary">
                  {performance.genre}
                </span>
              )}
              {performance.productionYear && (
                <span className="font-paragraph text-lg text-light-gray/80">
                  {performance.productionYear}
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl text-secondary mb-6">Synopsis</h2>
                <p className="font-paragraph text-lg text-light-gray/90 leading-relaxed mb-8">
                  {performance.synopsis || 'No synopsis available.'}
                </p>

                {performance.title === '빈센트 반 카오스' ? (
                  <div className="mb-8">
                    <h3 className="font-heading text-2xl text-secondary mb-4">공연 사진</h3>
                    <div className="relative group">
                      <div 
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {vincentGalleryImages.map((img, index) => (
                          <div key={index} className="flex-shrink-0 w-[400px] h-[300px]">
                            <Image
                              src={img}
                              alt={`빈센트 반 카오스 공연 사진 ${index + 1}`}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-secondary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-secondary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Scroll right"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                ) : performance.trailerUrl ? (
                  <div className="mb-8">
                    <h3 className="font-heading text-2xl text-secondary mb-4">Trailer</h3>
                    <a
                      href={performance.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph text-base px-6 py-3 transition-colors"
                    >
                      <Video size={20} />
                      Watch Trailer
                    </a>
                  </div>
                ) : null}
              </motion.div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-dark-gray/20 p-8 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-heading text-2xl text-secondary mb-6">Production Details</h3>

                {performance.director && (
                  <div className="flex items-start gap-4">
                    <Film size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-paragraph text-sm text-light-gray/60 mb-1">Director</p>
                      <p className="font-paragraph text-base text-secondary">{performance.director}</p>
                    </div>
                  </div>
                )}

                {performance.cast && (
                  <div className="flex items-start gap-4">
                    <Users size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-paragraph text-sm text-light-gray/60 mb-1">Cast</p>
                      <p className="font-paragraph text-base text-secondary">{performance.cast}</p>
                    </div>
                  </div>
                )}

                {performance.runningTime && (
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-paragraph text-sm text-light-gray/60 mb-1">Running Time</p>
                      <p className="font-paragraph text-base text-secondary">
                        {performance.runningTime} minutes
                      </p>
                    </div>
                  </div>
                )}

                {performance.performanceDate && (
                  <div className="flex items-start gap-4">
                    <Calendar size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-paragraph text-sm text-light-gray/60 mb-1">Performance Date</p>
                      <p className="font-paragraph text-base text-secondary">
                        {new Date(performance.performanceDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
