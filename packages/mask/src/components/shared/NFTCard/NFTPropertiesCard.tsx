import { makeStyles } from '@masknet/theme'
import { Typography } from '@mui/material'
import type { Web3Helper } from '@masknet/plugin-infra/src/web3-helpers'
import type { NetworkPluginID } from '@masknet/web3-shared-base'
import { NFTRank } from './NFTRank.js'
import { useI18N } from '../../../utils/index.js'

const useStyles = makeStyles()((theme) => ({
    wrapper: {
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: 12,
    },
    titleBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    rankBox: {
        display: 'flex',
    },
    title: {
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 700,
        marginBottom: 12,
        color: theme.palette.maskColor.main,
    },
    content: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
    },
    traitsItem: {
        padding: 12,
        width: 'calc(100%/3 - 8px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 14,
        lineHeight: '18px',
        color: theme.palette.maskColor.main,
        fontWeight: 700,
        marginBottom: 12,
        background: theme.palette.maskColor.bg,
        borderRadius: 8,
        boxSizing: 'border-box',
    },
    traitTitle: {
        fontWeight: 400,
        color: theme.palette.maskColor.second,
    },
    traitValue: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    unset: {
        color: 'unset',
    },
}))
interface NFTPropertiesCardProps {
    asset: Web3Helper.NonFungibleAssetScope<void, NetworkPluginID.PLUGIN_EVM>
    rank?: number
    timeline?: boolean
}

export function NFTPropertiesCard(props: NFTPropertiesCardProps) {
    const { asset, rank, timeline } = props
    const { classes, cx } = useStyles()
    const { t } = useI18N()

    return (
        <div className={classes.wrapper}>
            <div className={classes.titleBox}>
                <Typography className={timeline ? cx(classes.title, classes.unset) : classes.title}>
                    {t('plugin_collectible_properties')}
                </Typography>
                <div className={classes.rankBox}>
                    {/* gem rank */}
                    <NFTRank rank={rank} />
                </div>
            </div>
            <div className={classes.content}>
                {asset.traits?.map((x) => {
                    return (
                        <div key={x.type} className={classes.traitsItem}>
                            <Typography className={classes.traitTitle}>{x.type}</Typography>
                            <Typography className={classes.traitValue} title={x.value}>
                                {x.value}
                            </Typography>
                            <Typography>({x.rarity ?? '-%'})</Typography>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
