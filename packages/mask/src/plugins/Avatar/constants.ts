import { PluginId } from '@masknet/plugin-infra'
import { ChainId } from '@masknet/web3-shared-evm'

export const NFT_AVATAR_JSON_SERVER = 'https://configuration.r2d2.to/com.maskbook.avatar.json'
export const NFT_AVATAR_DB_NAME = 'com.maskbook.user'
export const NFT_AVATAR_DB_NAME_STORAGE = 'com.maskbook.user.storage'
export const NFT_AVATAR_METADATA_STORAGE = 'com.maskbook.avatar.metadata.storage'

export const PLUGIN_ID = PluginId.Avatar
export const PLUGIN_NAME = 'Avatar'
export const PLUGIN_DESCRIPTION = 'NFT Avatar'

export enum RSS3_KEY_SNS {
    TWITTER = '_nfts',
    FACEBOOK = '_facebook_nfts',
    INSTAGRAM = '_instagram_nfts',
}

export const SUPPORTED_CHAIN_IDS: ChainId[] = [ChainId.Mainnet, ChainId.Matic, ChainId.BSC]

export const mask_avatar_dark = new URL('./assets/mask.dark.svg', import.meta.url)
export const mask_avatar_light = new URL('./assets/mask.light.svg', import.meta.url)
