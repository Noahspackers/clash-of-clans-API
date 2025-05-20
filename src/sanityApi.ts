import { sanityClient } from './sanity'
import type { PortableTextBlock } from '@portabletext/types'

export type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedBy: string
  header: PortableTextBlock[];
  body: PortableTextBlock[];
}

export const fetchPosts = async (): Promise<Post[]> => {
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      publishedBy,
      header,
      body
    }`
    return await sanityClient.fetch(query)
  }
  
  export type ClanContent = {
    _id: string,
    name: string,
    slug: { current: string },
    clanTag: string,
    description: PortableTextBlock[];
    levelRequirement: string
  }
  
  export const fetchClans = async (): Promise<ClanContent[]> => {
    const query = `*[_type == "clan"]
    {_id, name, slug, clanTag, description, levelRequirement
    }`
    return await sanityClient.fetch(query)
  }

  export type GeneralClanInfo = {
    _id: string,
    name: string,
    slug: { current: string },
    description: PortableTextBlock[];
  }
  
  export const fetchGeneralClanInfo = async (): Promise<GeneralClanInfo[]> => {
    const query = `*[_type == "clanInfo"]
    {_id, name, slug, description
    }`
    return await sanityClient.fetch(query)
  }