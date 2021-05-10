import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFile from '../library/ton/classes/utils/TonKeysFile'
import GiverV2 from '../library/ton/classes/GiverV2'
import {TonClient} from '@tonclient/core'
import KitInterface from '../library/ton/classes/utils/interfaces/KitInterface'
import Ton from '../library/ton/classes/utils/Ton'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.getKit(config.net.test)

it('Valid', async done => {
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.giverKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)
    const simpleWalletKeys: KeyPair = await Ton.keys.random(kit.client)
    const simpleWallet: SimpleWallet = new SimpleWallet(kit, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.calculateAddress(), 10_000_000_000)
    const deployResult: boolean = await simpleWallet.deploy()

    expect(deployResult).toBeTruthy()
    expect(await simpleWallet.getOwner()).toBe(Ton.string.x0(simpleWalletKeys.public))
    done()
}, testTimeout)