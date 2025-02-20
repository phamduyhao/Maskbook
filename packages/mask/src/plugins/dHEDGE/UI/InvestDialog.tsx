import { InjectedDialog, useOpenShareTxDialog, useSelectFungibleToken } from '@masknet/shared'
import { useRemoteControlledDialog } from '@masknet/shared-base-ui'
import { makeStyles, ActionButton } from '@masknet/theme'
import { useAccount, useFungibleTokenBalance } from '@masknet/plugin-infra/web3'
import { formatBalance, FungibleToken, isZero, NetworkPluginID, rightShift } from '@masknet/web3-shared-base'
import { ChainId, SchemaType } from '@masknet/web3-shared-evm'
import { DialogActions, DialogContent } from '@mui/material'
import { useCallback, useMemo, useState, useEffect } from 'react'
import { activatedSocialNetworkUI } from '../../../social-network/index.js'
import { isFacebook } from '../../../social-network-adaptor/facebook.com/base.js'
import { isTwitter } from '../../../social-network-adaptor/twitter.com/base.js'
import { useI18N } from '../../../utils/i18n-next-ui.js'
import { EthereumERC20TokenApprovedBoundary } from '../../../web3/UI/EthereumERC20TokenApprovedBoundary.js'
import { WalletConnectedBoundary } from '../../../web3/UI/WalletConnectedBoundary.js'
import { TokenAmountPanel } from '../../../web3/UI/TokenAmountPanel.js'
import { CrossIsolationMessages } from '@masknet/shared-base'
import { useInvestCallback } from '../hooks/useInvestCallback.js'
import { PluginDHedgeMessages } from '../messages.js'
import type { Pool } from '../types.js'
import { PluginWalletStatusBar } from '../../../utils/index.js'

const useStyles = makeStyles()((theme) => ({
    paper: {
        width: '450px !important',
    },
    form: {
        '& > *': {
            margin: theme.spacing(1, 0),
        },
    },
    root: {
        margin: theme.spacing(2, 0),
    },
    tip: {
        fontSize: 12,
        color: theme.palette.text.secondary,
        padding: theme.spacing(2, 2, 0, 2),
    },
    button: {
        margin: 0,
        padding: 0,
        height: 40,
    },
}))

export function InvestDialog() {
    const { t } = useI18N()
    const { classes } = useStyles()
    const [pool, setPool] = useState<Pool>()
    const [token, setToken] = useState<FungibleToken<ChainId, SchemaType>>()
    const [allowedTokens, setAllowedTokens] = useState<string[]>()

    // context
    const account = useAccount(NetworkPluginID.PLUGIN_EVM)

    // #region remote controlled dialog
    const { open, closeDialog } = useRemoteControlledDialog(PluginDHedgeMessages.InvestDialogUpdated, (ev) => {
        if (!ev.open) return
        setPool(ev.pool)
        setAllowedTokens(ev.tokens)
    })
    const onClose = useCallback(() => {
        setPool(undefined)
        setAllowedTokens([])
        setToken(undefined)
        closeDialog()
    }, [closeDialog])
    // #endregion

    // #region select token
    const selectFungibleToken = useSelectFungibleToken(NetworkPluginID.PLUGIN_EVM)
    const onSelectTokenChipClick = useCallback(async () => {
        const picked = await selectFungibleToken({
            disableNativeToken: true,
            whitelist: allowedTokens,
        })
        if (picked) setToken(picked)
    }, [selectFungibleToken, token?.address, allowedTokens])
    // #endregion

    // #region amount
    const [rawAmount, setRawAmount] = useState('')
    const amount = rightShift(rawAmount || '0', token?.decimals)
    const {
        value: tokenBalance = '0',
        loading: loadingTokenBalance,
        retry: retryLoadTokenBalance,
    } = useFungibleTokenBalance(NetworkPluginID.PLUGIN_EVM, token?.address ?? '')
    // #endregion

    // #region blocking
    const [{ loading: isInvesting }, investCallback] = useInvestCallback(pool, amount.toFixed(), token)
    const openShareTxDialog = useOpenShareTxDialog()
    const cashTag = isTwitter(activatedSocialNetworkUI) ? '$' : ''
    const isOnTwitter = isTwitter(activatedSocialNetworkUI)
    const isOnFacebook = isFacebook(activatedSocialNetworkUI)
    const shareText = token
        ? t('plugin_dhedge_share_text', {
              amount: formatBalance(amount, token.decimals),
              symbol: `${cashTag}${token.symbol}`,
              pool: pool?.name,
              account_promote: t('plugin_dhedge_account_promote', {
                  context: isOnTwitter ? 'twitter' : isOnFacebook ? 'facebook' : 'default',
              }),
          })
        : ''
    const invest = useCallback(async () => {
        const hash = await investCallback()
        if (typeof hash !== 'string') return
        await openShareTxDialog({
            hash,
            onShare() {
                activatedSocialNetworkUI.utils.share?.(shareText)
            },
        })
        retryLoadTokenBalance()
        onClose()
    }, [investCallback, openShareTxDialog, onClose])
    // #endregion

    // #region Swap
    useEffect(
        () =>
            CrossIsolationMessages.events.swapDialogUpdate.on(({ open }) => {
                if (!open) retryLoadTokenBalance()
            }),
        [retryLoadTokenBalance],
    )

    const openSwap = useCallback(() => {
        if (!token) return
        CrossIsolationMessages.events.swapDialogUpdate.sendToLocal({
            open: true,
            traderProps: {
                defaultInputCoin: token,
            },
        })
    }, [token])
    // #endregion

    // #region submit button
    const validationMessage = useMemo(() => {
        if (!account) return t('plugin_wallet_connect_a_wallet')
        if (!amount || amount.isZero()) return t('plugin_dhedge_enter_an_amount')
        if (amount.isGreaterThan(tokenBalance))
            return t('plugin_dhedge_insufficient_balance', {
                symbol: token?.symbol,
            })
        return ''
    }, [account, amount.toFixed(), token, tokenBalance])
    // #endregion

    if (!pool) return null
    return (
        <div className={classes.root}>
            <InjectedDialog open={open} onClose={onClose} title={pool.name} maxWidth="xs">
                <DialogContent style={{ padding: 16 }}>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TokenAmountPanel
                            label="Amount"
                            amount={rawAmount}
                            balance={tokenBalance ?? '0'}
                            token={token}
                            onAmountChange={setRawAmount}
                            SelectTokenChip={{
                                loading: loadingTokenBalance,
                                ChipProps: {
                                    onClick: onSelectTokenChipClick,
                                },
                            }}
                        />
                    </form>
                </DialogContent>
                <DialogActions style={{ padding: 0 }}>
                    <PluginWalletStatusBar>
                        <WalletConnectedBoundary>
                            {isZero(tokenBalance) ? (
                                <ActionButton
                                    className={classes.button}
                                    fullWidth
                                    onClick={openSwap}
                                    disabled={isInvesting}
                                    loading={loadingTokenBalance || isInvesting}>
                                    {t('plugin_dhedge_buy_token', { symbol: token?.symbol })}
                                </ActionButton>
                            ) : (
                                <EthereumERC20TokenApprovedBoundary
                                    amount={amount.toFixed()}
                                    spender={pool.address}
                                    token={token?.schema === SchemaType.ERC20 ? token : undefined}>
                                    <ActionButton
                                        className={classes.button}
                                        fullWidth
                                        disabled={!!validationMessage || isInvesting}
                                        onClick={invest}
                                        loading={loadingTokenBalance || isInvesting}>
                                        {validationMessage || t('plugin_dhedge_invest')}
                                    </ActionButton>
                                </EthereumERC20TokenApprovedBoundary>
                            )}
                        </WalletConnectedBoundary>
                    </PluginWalletStatusBar>
                </DialogActions>
            </InjectedDialog>
        </div>
    )
}
