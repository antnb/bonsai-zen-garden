
import { useEffect, useState } from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content?: string;
  slug?: string;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    // Mendapatkan daftar semua file markdown di folder blog
    // Catatan: Dalam produksi, Anda mungkin perlu menggunakan pendekatan berbeda
    // seperti API atau mengenumerasi file secara eksplisit
    const blogFiles = [
      '/src/data/blog/python-programming.md',
      '/src/data/blog/understanding-cites.md',
      '/src/data/blog/global-bonsai-trends.md',
      // Tambahkan file blog baru di sini
    ];
    
    const posts: BlogPost[] = [];
    
    // Memproses setiap file markdown
    for (const filePath of blogFiles) {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        
        // Parse frontmatter (metadata) dan konten
        const { frontmatter, content } = parseFrontmatter(text);
        
        // Tambahkan slug berdasarkan nama file
        const slug = filePath.split('/').pop()?.replace('.md', '') || '';
        
        posts.push({
          ...frontmatter as unknown as BlogPost,
          content,
          slug
        });
      } catch (error) {
        console.error(`Error loading blog post ${filePath}:`, error);
      }
    }
    
    // Urutkan berdasarkan tanggal (terbaru dulu)
    return posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Parse frontmatter dari markdown
function parseFrontmatter(markdown: string): { frontmatter: Record<string, any>; content: string } {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    return { 
      frontmatter: {}, 
      content: markdown 
    };
  }
  
  const frontmatterString = match[1];
  const content = markdown.replace(frontmatterRegex, '').trim();
  
  // Parse YAML-like frontmatter
  const frontmatter: Record<string, any> = {};
  frontmatterString.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      // First, store the raw string value
      let rawValue = valueParts.join(':').trim();
      let value: string | boolean | number = rawValue;
      
      // Convert boolean strings to actual booleans
      if (rawValue === 'true') value = true;
      if (rawValue === 'false') value = false;
      
      // Convert numeric strings to numbers
      // Only convert if the string contains only digits and doesn't have spaces
      if (!isNaN(Number(rawValue)) && rawValue !== '' && !rawValue.includes(' ')) {
        value = Number(rawValue);
      }
      
      frontmatter[key.trim()] = value;
    }
  });
  
  return { frontmatter, content };
}

// Custom hook untuk mendapatkan blog posts
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    setLoading(true);
    fetchBlogPosts()
      .then(posts => {
        setPosts(posts);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog posts:', err);
        setError(err);
        setLoading(false);
      });
  }, []);
  
  return { posts, loading, error };
}
