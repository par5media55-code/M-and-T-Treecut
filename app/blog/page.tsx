import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | M&T Treecut - Tree Care Tips & News',
  description: 'Expert tree care tips, safety advice and industry news from M&T Treecut. Learn about tree felling, stump removal and property maintenance in North West Province.',
  openGraph: {
    title: 'Blog | M&T Treecut - Tree Care Tips & News',
    description: 'Expert tree care tips, safety advice and industry news from M&T Treecut.',
    url: 'https://mttreecut.co.za/blog',
  }
};

const articles = [
  {
    slug: 'signs-tree-needs-removal',
    title: '5 Signs Your Tree Needs to Be Removed',
    excerpt: 'Learn the warning signs that indicate a tree on your property may be dangerous and require professional removal.',
    date: '2024-01-15',
    category: 'Tree Safety'
  },
  {
    slug: 'stump-removal-vs-grinding',
    title: 'Stump Removal vs Stump Grinding: Which Do You Need?',
    excerpt: 'Understanding the difference between complete stump removal and grinding, and which option is best for your property.',
    date: '2024-01-10',
    category: 'Stump Services'
  },
  {
    slug: 'tree-pruning-best-practices',
    title: 'Tree Pruning Best Practices for North West Climate',
    excerpt: 'Expert tips on when and how to prune trees in North West Province to promote health and prevent storm damage.',
    date: '2024-01-05',
    category: 'Tree Care'
  },
  {
    slug: 'emergency-tree-removal-storms',
    title: 'Emergency Tree Removal: What to Do After a Storm',
    excerpt: 'Step-by-step guide on what to do when a tree falls on your property during a North West storm.',
    date: '2023-12-28',
    category: 'Emergency Services'
  },
  {
    slug: 'cost-of-tree-felling-south-africa',
    title: 'How Much Does Tree Felling Cost in South Africa?',
    excerpt: 'A comprehensive breakdown of tree felling costs in South Africa and what factors affect pricing.',
    date: '2023-12-20',
    category: 'Pricing'
  }
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-am-charcoal min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-am-gold uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
              <span className="w-8 h-[1px] bg-am-gold" />
              Our Blog
              <span className="w-8 h-[1px] bg-am-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Tree Care <span className="italic text-am-gold">Tips & News</span>
            </h1>
            <p className="text-am-wood text-sm max-w-2xl mx-auto">
              Expert advice on tree felling, stump removal, pruning and property maintenance from the team at M&T Treecut.
            </p>
          </div>

          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-am-charcoal-light border border-am-green-dark p-8 hover:border-am-gold/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-am-gold text-[10px] uppercase tracking-widest font-bold">{article.category}</span>
                  <span className="text-am-wood text-[10px]">{article.date}</span>
                </div>
                <h2 className="text-xl font-serif text-white group-hover:text-am-gold transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-am-wood text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="inline-block mt-4 text-am-gold text-xs uppercase tracking-widest font-bold">
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActionButtons />
    </>
  );
}
