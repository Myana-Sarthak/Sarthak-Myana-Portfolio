import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink, CheckCircle2, ChevronRight, Download, X, ZoomIn, FileText, Image as ImageIcon } from "lucide-react";
import { PROJECTS } from "../constants";
import { useEffect, useState } from "react";

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-dark text-white p-6">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <p className="opacity-50 mb-8 text-center max-w-md">The project you are looking for does not exist or has been moved.</p>
        <Link to="/" className="px-8 py-3 bg-accent text-white rounded-full font-bold transition-all shadow-lg shadow-accent/20">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-dark min-h-screen text-white selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/20 via-bg-dark/60 to-bg-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-20">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-accent font-bold mb-8 hover:gap-4 transition-all w-fit"
          >
            <ArrowLeft size={20} /> Back to Projects
          </motion.button>

          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-widest uppercase border border-accent/20"
            >
              {project.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Description & Features */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold border-l-4 border-accent pl-6">Project Overview</h2>
              <p className="text-xl opacity-60 leading-relaxed font-light">
                {project.fullDesc}
              </p>
            </div>

            {/* Problem Statement */}
            {(project as any).problemStatement && (
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold border-l-4 border-accent pl-6">Problem Statement</h2>
                <p className="text-xl opacity-60 leading-relaxed font-light">
                  {(project as any).problemStatement}
                </p>
              </div>
            )}

            {/* Target Users */}
            {(project as any).targetUsers && (
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold border-l-4 border-accent pl-6">Target Users</h2>
                <p className="text-xl opacity-60 leading-relaxed font-light">
                  {(project as any).targetUsers}
                </p>
              </div>
            )}

            {/* Tools & Typography */}
            {(project as any).tools && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-display font-bold border-l-4 border-accent pl-6">Tools Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {(project as any).tools.software.map((tool: string) => (
                      <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Typography */}
                {(project as any).tools.typography && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-display font-bold border-l-4 border-accent pl-6">Typography</h2>
                    <p className="text-xl opacity-60 leading-relaxed font-light">
                      {(project as any).tools.typography}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Design Process */}
            {(project as any).designProcess && (
              <div className="space-y-10">
                <h2 className="text-3xl font-display font-bold border-l-4 border-accent pl-6">Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                    <h3 className="text-xl font-bold text-accent">Color Theory</h3>
                    <p className="opacity-60 leading-relaxed">{(project as any).designProcess.colorTheory}</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                    <h3 className="text-xl font-bold text-accent">UI Execution</h3>
                    <p className="opacity-60 leading-relaxed">{(project as any).designProcess.execution}</p>
                  </div>
                </div>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold border-l-4 border-accent pl-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group"
                    >
                      <div className="p-2 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <CheckCircle2 size={24} />
                      </div>
                      <p className="text-lg font-medium opacity-80">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 space-y-12">
          <div className="text-center space-y-4 px-6">
            <h2 className="text-4xl font-display font-bold">Project Gallery</h2>
          </div>

          {/* Categorized Gallery */}
          {(project as any).categorizedGallery ? (
            <div className="space-y-20">
              {(project as any).categorizedGallery.map((cat: any, catIndex: number) => (
                <div key={catIndex} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <h3 className="text-2xl font-display font-bold opacity-80 px-4">{cat.category}</h3>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cat.items.map((item: any, itemIndex: number) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05 }}
                        className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 cursor-pointer"
                        onClick={() => setSelectedImage(item.image)}
                      >
                        {/* Preview */}
                        <div className="aspect-[4/5] overflow-hidden bg-black/20">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Hover Overlay - Removed zoom icon as requested */}

                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {project.gallery.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => project.id !== 'vault-ease' && setSelectedImage(img)}
                  className={`w-full overflow-hidden rounded-[48px] border border-white/10 shadow-2xl bg-white/5 hover:border-accent/20 transition-all group relative p-3 ${
                    project.id !== 'vault-ease' ? 'cursor-zoom-in' : 'cursor-default'
                  } ${
                    project.gallery.length === 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Browser-like header for web projects */}
                  {project.category.toLowerCase().includes('web') && (
                    <div className="bg-white/10 px-4 py-3 border-b border-white/10 flex gap-1.5 items-center rounded-t-[36px]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    </div>
                  )}
                  <div className={`relative overflow-hidden ${project.category.toLowerCase().includes('web') ? 'rounded-b-[36px]' : 'rounded-[36px]'}`}>
                    <img 
                      src={img} 
                      alt={`${project.title} gallery ${idx + 1}`} 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Lightbox Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </motion.button>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative max-w-full max-h-full overflow-auto rounded-2xl scrollbar-hide"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage}
                    alt="Full size view"
                    className="w-full h-auto max-w-7xl mx-auto rounded-xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-end gap-8">
            {project.downloadUrl && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a 
                  href={project.downloadUrl} 
                  download={`${project.title.replace(/\s+/g, '-')}-Design.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/20 rounded-2xl font-bold transition-all group shadow-lg shadow-accent/5"
                >
                  <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                  Download to view
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Video Prototype Section */}
      {project.videoUrl && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-display font-bold">Interactive Prototype</h2>
              <p className="opacity-40 max-w-2xl mx-auto">Watch the mobile app UI in action with this functional prototype video.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black"
            >
              <iframe 
                src={project.videoUrl} 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-display font-bold opacity-20">Next Project</h2>
          <Link 
            to={`/project/${PROJECTS[(PROJECTS.findIndex(p => p.id === id) + 1) % PROJECTS.length].id}`}
            className="group inline-flex flex-col items-center gap-6"
          >
            <span className="text-3xl md:text-5xl font-display font-bold group-hover:text-accent transition-colors">
              {PROJECTS[(PROJECTS.findIndex(p => p.id === id) + 1) % PROJECTS.length].title}
            </span>
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
              <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
