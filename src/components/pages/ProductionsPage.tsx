import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Button } from '@/components/ui/button';

interface Performance {
  _id: string;
  title?: string;
  synopsis?: string;
  mainImage?: string;
  genre?: string;
  productionYear?: number;
  performanceDate?: Date | string;
}

export default function ProductionsPage() {
  const [performances, setPerformances] = useState<Performance[]>([]);
  const [filteredPerformances, setFilteredPerformances] = useState<Performance[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [genres, setGenres] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const fetchPerformances = async () => {
      const { items } = await BaseCrudService.getAll<Performance>('performances');
      setPerformances(items);
      setFilteredPerformances(items);

      // Extract unique genres and filter to only show 뮤지컬 and 연극
      const uniqueGenres = Array.from(
        new Set(items.map((p) => p.genre).filter((g): g is string => !!g))
      ).filter(genre => genre === '뮤지컬' || genre === '연극');
      setGenres(uniqueGenres);

      // Extract unique years
      const uniqueYears = Array.from(
        new Set(items.map((p) => p.productionYear).filter((y): y is number => !!y))
      ).sort((a, b) => b - a);
      setYears(uniqueYears);
    };
    fetchPerformances();
  }, []);

  useEffect(() => {
    let filtered = performances;

    if (selectedGenre !== 'All') {
      filtered = filtered.filter((p) => p.genre === selectedGenre);
    }

    if (selectedYear !== 'All') {
      filtered = filtered.filter((p) => p.productionYear === parseInt(selectedYear));
    }

    setFilteredPerformances(filtered);
  }, [selectedGenre, selectedYear, performances]);

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
            Our Productions
          </motion.h1>
          <motion.p
            className="font-paragraph text-lg md:text-xl text-light-gray/90 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of exceptional theatrical productions that have captivated audiences around the world.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-dark-gray/20 sticky top-20 z-40 backdrop-blur-sm">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-paragraph text-base text-light-gray/80">Filter by:</span>

            {/* Genre Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedGenre === 'All' ? 'default' : 'outline'}
                className={`font-paragraph text-sm h-9 ${
                  selectedGenre === 'All'
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'border-light-gray/30 text-light-gray hover:bg-light-gray/10'
                }`}
                onClick={() => setSelectedGenre('All')}
              >
                All Genres
              </Button>
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={selectedGenre === genre ? 'default' : 'outline'}
                  className={`font-paragraph text-sm h-9 ${
                    selectedGenre === genre
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border-light-gray/30 text-light-gray hover:bg-light-gray/10'
                  }`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedYear === 'All' ? 'default' : 'outline'}
                className={`font-paragraph text-sm h-9 ${
                  selectedYear === 'All'
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'border-light-gray/30 text-light-gray hover:bg-light-gray/10'
                }`}
                onClick={() => setSelectedYear('All')}
              >
                All Years
              </Button>
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year.toString() ? 'default' : 'outline'}
                  className={`font-paragraph text-sm h-9 ${
                    selectedYear === year.toString()
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border-light-gray/30 text-light-gray hover:bg-light-gray/10'
                  }`}
                  onClick={() => setSelectedYear(year.toString())}
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Productions Grid */}
      <section className="py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          {filteredPerformances.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-paragraph text-xl text-light-gray/60">
                No productions found matching your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPerformances.map((performance, index) => (
                <motion.div
                  key={performance._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={`/productions/${performance._id}`} className="group block">
                    <div className="relative overflow-hidden aspect-[3/4] bg-dark-gray">
                      {performance.mainImage && (
                        <Image
                          src={performance.mainImage}
                          alt={performance.title || 'Performance'}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-heading text-xl text-secondary mb-2">
                          {performance.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-2">
                          {performance.genre && (
                            <span className="font-paragraph text-sm text-primary">
                              {performance.genre}
                            </span>
                          )}
                          {performance.productionYear && (
                            <span className="font-paragraph text-sm text-light-gray/70">
                              {performance.productionYear}
                            </span>
                          )}
                        </div>
                        {performance.synopsis && (
                          <p className="font-paragraph text-sm text-light-gray/90 line-clamp-2">
                            {performance.synopsis}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
