import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const baseUrl = 'https://samn.dev'

// Get all blog posts
function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'blog')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir)
  const mdxFiles = files.filter(file => file.endsWith('.mdx'))

  return mdxFiles.map(file => {
    const filePath = path.join(blogDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      slug: file.replace('.mdx', ''),
      date: data.date ? new Date(data.date) : new Date(),
    }
  })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts()

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vibe-coding`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'never' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}