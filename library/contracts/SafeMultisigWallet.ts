import Contract from '../contract/Contract'
import safeMultisigWalletData from './SafeMultisigWallet/SafeMultisigWallet'
import {AbiContract, KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'

export default class SafeMultisigWallet extends Contract {
    public constructor(client: TonClient, timeout: number,  keys: KeyPair) {
        super(client, timeout,{
            abi: safeMultisigWalletData.abi,
            tvc: safeMultisigWalletData.tvc,
            initialData: {},
            keys: keys
        })
    }



    /**********
     * DEPLOY *
     **********/
    public async deploy(owners: string[] | number[], reqConfirms: number): Promise<boolean> {
        return await this._deploy({
            owners: owners,
            reqConfirms: reqConfirms
        })
    }



    /**********
     * PUBLIC *
     **********/
    public async callAnotherContract(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        abi: AbiContract,
        method: string,
        input: Object,
        keys: KeyPair
    ): Promise<ResultOfProcessMessage> {
        const payload: string = await this._getPayloadToCallAnotherContract(abi, method, input)
        return await this.sendTransaction(
            dest,
            value,
            bounce,
            flags,
            payload,
            keys
        )
    }

    public async sendTransactionWithComment(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        comment: string,
        keys: KeyPair
    ): Promise<ResultOfProcessMessage> {
        const payload: string = await this._getPayloadToTransferWithComment(comment)
        return await this.sendTransaction(
            dest,
            value,
            bounce,
            flags,
            payload,
            keys
        )
    }

    public async sendTransaction(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        payload: string,
        keys: KeyPair
    ): Promise<ResultOfProcessMessage> {
        return await this._call('sendTransaction', {
            dest: dest,
            value: value,
            bounce: bounce,
            flags: flags,
            payload: payload
        }, keys)
    }
}