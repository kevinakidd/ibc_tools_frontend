import {NextPage} from "next";
import {useReducer} from "react";

// Components
import Head from "next/head";
import Menu from "../components/menu/Menu";
import FormCard from "../components/stargaze-snapshot/FormCard"
import CollectionCard from "../components/stargaze-snapshot/CollectionCard"

// Assets
import styles from "../styles/Home.module.css";
import {SnapshotState} from "../types/snapshotTypes";

const StargazeSnapshot: NextPage = () => {

    const [state, setState] = useReducer(
        (state: SnapshotState, newState: Partial<SnapshotState>) => ({
            ...state,
            ...newState
        }),
        {
            loading: false, alertMsg: '', alertSeverity: '', address: '',
            uniqueHolders: '', numTokens: '', name: '', owners: [], currentPage: 1, currentOwners: []
        }
    )

    return(
        <>
            <Head>
                <link rel="icon" href="/favicon.png" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/IBC_NFT_Webclip.png" />
                <title>Stargaze Snapshot Tool for the SG-721 NFT standard 📸</title>
                <meta name="description" content="Use IBCNFTs Stargaze Snapshot Tool in your NFT community to extract all the holders of any collection on the Stargaze blockchain." />
            </Head>
            <img className="lg:hidden md:hidden" src="/assetmantle_mobile_banner.png" alt="banner" />
            <img className="hidden lg:flex md:flex" src="/assetmantle_desktop_banner.png" alt="banner" />
            <Menu />
            <main className={styles.main}>
                {state.owners.length === 0 ?
                    <FormCard state={state} setState={setState} />
                    :
                    <CollectionCard state={state} setState={setState} />
                }
            </main>
        </>
    )

}

export default StargazeSnapshot