import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react'

export default function Blog() {
  const featuredPost = {
    title: 'Pawn Appétit v0.3.2 Released: Enhanced Analysis and Performance Improvements',
    excerpt: 'Our latest release brings significant improvements to game analysis, engine management, and overall performance. Learn about the new features and improvements.',
    author: 'Pawn-Appetit Team',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Release',
    slug: 'v0-3-2-release',
    image: '/images/blog/v0-3-2-release.jpg'
  }

  const blogPosts = [
    {
      title: 'Building Your First Opening Repertoire with Pawn Appétit',
      excerpt: 'A comprehensive guide on how to create, organize, and practice your opening repertoire using Pawn Appétit\'s powerful tools.',
      author: 'Rustam Abrahamyan',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Tutorial',
      slug: 'building-opening-repertoire',
      tags: ['repertoire', 'openings', 'training']
    },
    {
      title: 'The Ultimate Guide to Chess Engine Analysis',
      excerpt: 'Learn how to effectively use chess engines for game analysis, including tips for interpreting evaluations and finding improvements.',
      author: 'Francisco Salgueiro',
      date: '2025-01-05',
      readTime: '12 min read',
      category: 'Guide',
      slug: 'chess-engine-analysis-guide',
      tags: ['analysis', 'engines', 'improvement']
    },
    {
      title: 'Contributing to Open Source Chess Software',
      excerpt: 'How to get started contributing to chess software projects, with a focus on Pawn Appétit and the broader chess development community.',
      author: 'Community Team',
      date: '2025-01-01',
      readTime: '6 min read',
      category: 'Community',
      slug: 'contributing-chess-software',
      tags: ['open-source', 'contributing', 'development']
    },
    {
      title: 'Chess Database Management Best Practices',
      excerpt: 'Tips and tricks for organizing and managing large chess databases effectively using Pawn Appétit.',
      author: 'Pawn-Appetit Team',
      date: '2024-12-28',
      readTime: '7 min read',
      category: 'Tutorial',
      slug: 'database-management',
      tags: ['database', 'organization', 'workflow']
    },
    {
      title: 'Analyzing Famous Games: Kasparov vs Deep Blue, 1997',
      excerpt: 'A detailed analysis of the historic match between Garry Kasparov and IBM\'s Deep Blue, demonstrating Pawn Appétit\'s analysis features.',
      author: 'Chess Analysis Team',
      date: '2024-12-20',
      readTime: '15 min read',
      category: 'Analysis',
      slug: 'kasparov-deep-blue-analysis',
      tags: ['analysis', 'history', 'famous-games']
    },
    {
      title: 'Mobile Chess Analysis: The Future of On-the-Go Training',
      excerpt: 'A look at our upcoming mobile applications and how they will revolutionize chess analysis and training on mobile devices.',
      author: 'Development Team',
      date: '2024-12-15',
      readTime: '4 min read',
      category: 'Future',
      slug: 'mobile-chess-analysis',
      tags: ['mobile', 'future', 'development']
    }
  ]

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Release', count: 3 },
    { name: 'Tutorial', count: 4 },
    { name: 'Guide', count: 2 },
    { name: 'Community', count: 2 },
    { name: 'Analysis', count: 1 }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Blog &amp;
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}News
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Stay updated with the latest news, tutorials, and insights from the 
              Pawn Appétit development team and chess community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Article
            </h2>
          </div>

          <div className="card card-hover p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(featuredPost.date)}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📰</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Featured Article Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.name === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card card-hover p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm"
                  >
                    Read →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter to get the latest blog posts, release notes, 
              and chess tips delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to improve your chess?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Download Pawn Appétit and start your journey to chess mastery today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/install"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Download Now
              </a>
              <a
                href="/docs"
                className="text-white hover:text-primary-100 font-medium"
              >
                Read Documentation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
