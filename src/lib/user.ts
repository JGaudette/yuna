import Store from 'electron-store'
import { AnilistData, CrunchyrollData } from '@/state/auth'

export interface QueueItem {
  nextEpisode: string | null
  crunchyroll: string | null
}

interface UserStore {
  queue: QueueItem[]
  crunchyroll: CrunchyrollData
  anilist: AnilistData
}

export const userStore = new Store<UserStore>({ name: 'user' })
