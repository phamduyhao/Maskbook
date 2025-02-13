import type { Plugin } from '@masknet/plugin-infra'
import { SocialAddressType } from '@masknet/web3-shared-base'
import { base } from '../base.js'
import { PLUGIN_ID, PLUGIN_NAME } from '../constants.js'
import { TabContent } from './components/TabContent.js'
import { ConsoleDialog } from './components/ConsoleDialog.js'
import { ApplicationEntry } from '@masknet/shared'
import { Icons } from '@masknet/icons'
import { useRemoteControlledDialog } from '../../../../shared-base-ui/src/hooks/index.js'
import { PluginDebuggerMessages } from '../messages.js'
import { ConnectionDialog } from './components/ConnectionDialog.js'
import { HubDialog } from './components/HubDialog.js'
import { ProfileCover } from './components/ProfileCover.js'
import { AvatarDecorator } from './components/AvatarDecorator.js'

const sns: Plugin.SNSAdaptor.Definition = {
    ...base,
    init(signal) {},
    ApplicationEntries: [
        {
            ApplicationEntryID: `${PLUGIN_ID}_Debugger`,
            RenderEntryComponent() {
                const { openDialog } = useRemoteControlledDialog(PluginDebuggerMessages.consoleDialogUpdated)
                return (
                    <ApplicationEntry
                        title={PLUGIN_NAME}
                        disabled={false}
                        iconFilterColor=""
                        icon={<Icons.MaskBlue size={36} />}
                        onClick={() => {
                            openDialog()
                        }}
                    />
                )
            },
            appBoardSortingDefaultPriority: Number.MAX_SAFE_INTEGER,
            marketListSortingPriority: Number.MAX_SAFE_INTEGER,
            icon: <Icons.MaskBlue size={36} />,
            name: PLUGIN_NAME,
        },
        {
            ApplicationEntryID: `${PLUGIN_ID}_Hub`,
            RenderEntryComponent() {
                const { openDialog } = useRemoteControlledDialog(PluginDebuggerMessages.hubDialogUpdated)
                return (
                    <ApplicationEntry
                        title="Hub"
                        disabled={false}
                        iconFilterColor=""
                        icon={<Icons.MaskBlue size={36} />}
                        onClick={() => {
                            openDialog()
                        }}
                    />
                )
            },
            appBoardSortingDefaultPriority: Number.MAX_SAFE_INTEGER,
            marketListSortingPriority: Number.MAX_SAFE_INTEGER,
            icon: <Icons.MaskBlue size={36} />,
            name: PLUGIN_NAME,
        },
        {
            ApplicationEntryID: `${PLUGIN_ID}_Connection`,
            RenderEntryComponent() {
                const { openDialog } = useRemoteControlledDialog(PluginDebuggerMessages.connectionDialogUpdated)
                return (
                    <ApplicationEntry
                        title="Connection"
                        disabled={false}
                        iconFilterColor=""
                        icon={<Icons.MaskBlue size={36} />}
                        onClick={() => {
                            openDialog()
                        }}
                    />
                )
            },
            appBoardSortingDefaultPriority: Number.MAX_SAFE_INTEGER,
            marketListSortingPriority: Number.MAX_SAFE_INTEGER,
            icon: <Icons.MaskBlue size={36} />,
            name: PLUGIN_NAME,
        },
    ],
    GlobalInjection() {
        return (
            <>
                <ConsoleDialog />
                <ConnectionDialog />
                <HubDialog />
            </>
        )
    },
    ProfileCover: [
        {
            ID: `${PLUGIN_ID}_cover`,
            label: 'Cover',
            priority: 99999,
            UI: {
                Cover: ProfileCover,
            },
            Utils: {},
        },
    ],
    ProfileTabs: [
        {
            ID: `${PLUGIN_ID}_tabContent`,
            label: 'Debugger',
            priority: 99999,
            UI: {
                TabContent,
            },
            Utils: {
                sorter(a, z) {
                    if (a.type === SocialAddressType.ADDRESS) return 1
                    if (z.type === SocialAddressType.ADDRESS) return -1

                    return 0
                },
            },
        },
    ],
    AvatarRealm: {
        ID: `${PLUGIN_ID}_avatar`,
        label: 'Debugger',
        priority: 99999,
        UI: {
            Decorator: AvatarDecorator,
        },
    },
}

export default sns
