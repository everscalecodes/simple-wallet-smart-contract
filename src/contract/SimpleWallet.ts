const SimpleWalletContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint16"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "upgrade",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getOwner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECGwEAAvAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsXBgUEAAACgCHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwMBwE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwHAiggghBotV8/u+MCIIIQfxH717rjAgoIAmIw+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/XDQ+V1NHQ0w/f1NHbPOMAf/hnCRoBXIj4RSBukjBw3vhCuvLoZPgAVHNCyM+FgMoAc89AzgH6AnHPC2ohzxTJIvsAXwUVBFAgghAVvCVCuuMCIIIQFyMMOrrjAiCCEEkcPmS64wIgghBotV8/uuMCEg8NCwRcMPhCbuMA+Ebyc3/4ZtGI+EUgbpIwcN74Qrry6GT4QoghwwDy6GX4ADDbPH/4ZwwVFBoBRO1E0NdJwgGKjhdw7UTQ9AWAQPQO8r3XC//4YnD4Y3D4ZuIWA3gw+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMkcPmSM8Wy//JcPsAkTDi4wB/+GcWDhoABPhCAhQw1NHbPOMAf/hnEBoCWoj4RSBukjBw3vhCuvLoZPgAIPsEINAgizits1jHBZPXTdDe10zQ7R7tU9s8MBURAATwAgMgMPhCbuMA0//R2zzbPH/4ZxYTGgI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4YhUUAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACDtRNDT/9M/0gDR+Gb4Y/hiAgr0pCD0oRkYABRzb2wgMC40Ny4wARagAAAAAts8+A/yABoAIPhG+EP4QsjL/8s/ygDJ7VQ=",
    code: "te6ccgECGAEAAsMABCSK7VMg4wMgwP/jAiDA/uMC8gsUAwIBAAACgCHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwJBAE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwEAiggghBotV8/u+MCIIIQfxH717rjAgcFAmIw+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/XDQ+V1NHQ0w/f1NHbPOMAf/hnBhcBXIj4RSBukjBw3vhCuvLoZPgAVHNCyM+FgMoAc89AzgH6AnHPC2ohzxTJIvsAXwUSBFAgghAVvCVCuuMCIIIQFyMMOrrjAiCCEEkcPmS64wIgghBotV8/uuMCDwwKCARcMPhCbuMA+Ebyc3/4ZtGI+EUgbpIwcN74Qrry6GT4QoghwwDy6GX4ADDbPH/4ZwkSERcBRO1E0NdJwgGKjhdw7UTQ9AWAQPQO8r3XC//4YnD4Y3D4ZuITA3gw+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMkcPmSM8Wy//JcPsAkTDi4wB/+GcTCxcABPhCAhQw1NHbPOMAf/hnDRcCWoj4RSBukjBw3vhCuvLoZPgAIPsEINAgizits1jHBZPXTdDe10zQ7R7tU9s8MBIOAATwAgMgMPhCbuMA0//R2zzbPH/4ZxMQFwI4iPhFIG6SMHDe+EK68uhkIIghwwDy6GX4ADD4YhIRAD5Pd25lciBwdWJsaWMga2V5IGNhbm5vdCBiZSBudWxsADJNZXRob2QgZm9yIHRoZSBvd25lciBvbmx5ACDtRNDT/9M/0gDR+Gb4Y/hiAgr0pCD0oRYVABRzb2wgMC40Ny4wARagAAAAAts8+A/yABcAIPhG+EP4QsjL/8s/ygDJ7VQ=",
    codeHash: "d95585c53ae2c7edf9a22683bdf51e2ff5ecbca822621359fd385d2c72cd93c5",
};
export default SimpleWalletContract;