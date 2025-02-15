export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'Tuntun Yuchiha',
    avatar: '',
    username: 'yuchihatuntun',
    title: 'Knowledge base maintainer',
    desc: 'Developer specializing in data analytics, embedded engineering, chip architecture design',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/yuchihatuntun' },
      { type: 'twitter', icon: 'twitter', link: 'https://x.com' },
    ],
    nameAliases: ['yuchihatuntun', 'Tuntun Yuchiha', 'Tuntun Yuchiha', 'Ruilin Xu', 'Xu Ruilin'],
    emailAliases: ['xurlin7@mail2.sysu.edu.cn'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
