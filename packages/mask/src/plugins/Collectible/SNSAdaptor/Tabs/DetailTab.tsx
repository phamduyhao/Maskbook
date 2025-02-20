import { LoadingBase, makeStyles } from '@masknet/theme'
import { useMemo } from 'react'
import { CollectibleTab } from '../CollectibleTab.js'
import type { Web3Helper } from '@masknet/plugin-infra/src/web3-helpers'
import type { NetworkPluginID } from '@masknet/web3-shared-base'
import { NFTInfoCard } from '../../../../components/shared/NFTCard/NFTInfoCard.js'
import { NFTPropertiesCard } from '../../../../components/shared/NFTCard/NFTPropertiesCard.js'
import { CollectibleState } from '../../hooks/useCollectibleState.js'
import type { AsyncState } from 'react-use/lib/useAsyncFn'

const useStyles = makeStyles()((theme) => ({
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 300,
    },
    info: {
        width: '100%',
        marginBottom: 24,
    },
}))

export interface DetailTabProps {
    asset: AsyncState<Web3Helper.NonFungibleAssetScope<void, NetworkPluginID.PLUGIN_EVM>>
}

export function DetailTab(props: DetailTabProps) {
    const { asset } = props
    const { provider, rarity } = CollectibleState.useContainer()
    const { classes } = useStyles()

    return useMemo(() => {
        if (asset.loading || !asset.value || rarity.loading)
            return (
                <CollectibleTab>
                    <div className={classes.body}>
                        <LoadingBase />
                    </div>
                </CollectibleTab>
            )
        return (
            <CollectibleTab>
                <div className={classes.body}>
                    <div className={classes.info}>
                        <NFTInfoCard sourceType={provider} asset={asset.value} />
                    </div>
                    <NFTPropertiesCard rank={rarity.value?.rank} asset={asset.value} />
                </div>
            </CollectibleTab>
        )
    }, [asset, classes])
}
